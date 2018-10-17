const request = require('request');

function geocode(city) {
  return new Promise((resolve, reject) => {
    const mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiYWE4NyIsImEiOiJjam43cnRoY3MwZG9sM3lwYnQzajVoMXptIn0.yrMqrYMcWwuQnDYVt6cyMA`;
    
    request(mapbox, {json: true}, (error, response, body) => {
      if (error) {
        reject('Unable to connect to mapbox api');
      }
    
      if (body.features.length === 0) {
        reject('Bad request, please check the name of the city');
      }
    
      let {
        geometry: {
          coordinates: [
            longitude,
            latitude
          ]
        } 
      } = body.features[0];
    
      [ longitude, latitude ] = [Number(longitude.toFixed(4)), Number(latitude.toFixed(4))];

      resolve([ longitude, latitude ]);
  
    });
  })
}
geocode("karachi")
  .then(([longitude, latitude]) => {
    console.log(`longitude: ${longitude}, latitude: ${latitude}`);
  })
  .catch(error => console.log(error));