const yargs = require('yargs');
const request = require('request');

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

const mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiYWE4NyIsImEiOiJjam43cnRoY3MwZG9sM3lwYnQzajVoMXptIn0.yrMqrYMcWwuQnDYVt6cyMA`;


request(mapbox, {json: true}, (error, response, body) => {
  let {
    geometry: {
      coordinates: [
        longitude,
        latitude
      ]
    }
  } = body.features[0];

  [ longitude, latitude ] = [Number(longitude.toFixed(4)), Number(latitude.toFixed(4))];

  // console.log(longitude, latitude);

  // https://api.darksky.net/forecast/501be056e4669cd2ca7e3605cb569676/24.8607,67.0011?units=si&exclude=minutely,hourly,flags

  const key = '501be056e4669cd2ca7e3605cb569676';
  
  const API = 'https://api.darksky.net/forecast';  //[key]/[latitude],[longitude]';
  
  // const latitude = '24.8607';
  // const longitude = '67.0011';
  const units = 'si';
  const exclude = 'minutely,hourly,flags';
  
  const url = `${API}/${key}/${latitude},${longitude}?units=${units}&exclude=${exclude}`;
  
  request({
    url,
    json: true
  }, (error, response, body) => {
    if(error) console.log(error);
    console.log(`City: ${body.timezone.split('/')[1]}`);
    console.log(`Continent: ${body.timezone.split('/')[0]}`);
    console.log('Longitude: ', longitude);
    console.log('Latitude: ', latitude);
    console.log(`Current Temperature: ${body.currently.temperature} Celcius`);
    console.log(`Humidity: ${body.currently.humidity * 100}%`);
    console.log('Summary: ', body.currently.summary);
  });


});




