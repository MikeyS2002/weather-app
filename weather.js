export function fetchWeather() {
  const apiKey = "edff5825542f40c7cf5051683a2b004c";

  const location = "NewYork,US";
  const lat = 44.34;
  const lon = 10.99;

  // Define the API endpoint
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;

  console.log(apiKey);
  console.log(apiUrl);
  // Use the fetch() function to get the data from the API
  fetch(apiUrl)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // Do something with the data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred
      console.error(error);
    });
}
