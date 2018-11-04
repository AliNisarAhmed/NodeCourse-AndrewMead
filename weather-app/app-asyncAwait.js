const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    c: {
      demand: true,
      alias: 'city',
      describe: 'city to fetch the weather of',
      string: 'true'
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const city = encodeURIComponent(argv.c);

// ======

const mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiYWE4NyIsImEiOiJjam43cnRoY3MwZG9sM3lwYnQzajVoMXptIn0.yrMqrYMcWwuQnDYVt6cyMA`;

const key = '501be056e4669cd2ca7e3605cb569676';
  
const API = 'https://api.darksky.net/forecast';  //[key]/[latitude],[longitude]';

// const latitude = '24.8607';
// const longitude = '67.0011';
const units = 'si';
const exclude = 'minutely,hourly,flags';

// const url = `${API}/${key}/${latitude},${longitude}?units=${units}&exclude=${exclude}`;


// ======================

async function getWeather(city) {
  let geoData = await axios.get(mapbox);
  let {
    geometry: {
      coordinates: [
        longitude,
        latitude
      ]
    }
  } = geoData.data.features[0];
  
  let weather = await axios.get(`${API}/${key}/${latitude},${longitude}?units=${units}&exclude=${exclude}`);
  let data = weather.data;

  console.log("***************");
  console.log(`City: ${data.timezone.split('/')[1]}`);
  console.log(`Continent: ${data.timezone.split('/')[0]}`);
  console.log('Longitude: ', longitude);
  console.log('Latitude', latitude);
  console.log(`Current Temperature: ${data.currently.temperature} Celcius`);
  console.log(`Humidity: ${(data.currently.humidity * 100).toFixed(2)}%`);
  console.log('Summary: ', data.currently.summary);
  console.log("***************");
}

getWeather(city);
