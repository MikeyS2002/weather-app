import "./style.css";
import { fetchWeather } from "./weather";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

fetchWeather();
const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sun = new THREE.Mesh(geometry, material);
const moon = new THREE.Mesh(geometry, material);
scene.add(sun, moon);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

var t = 0;
var m = 3;
function render() {
  requestAnimationFrame(render);
  t += 0.01;
  m += 0.01;
  sun.position.y = 2 * Math.sin(t);
  sun.position.x = 2 * Math.cos(t);

  moon.position.y = 2 * Math.sin(m);
  moon.position.x = 2 * Math.cos(m);

  renderer.render(scene, camera);
}
render();
