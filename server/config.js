// configuration for server to connect to api.openweather to get information
module.exports = {
    baseUrl: {
      protocol: 'http',
      hostname: 'api.openweathermap.org',
      path: '/data/2.5/weather',
    },
  
    query: {
      name: 'q',
      id: 'id',
      coordinates: {
        latitude: 'lat',
        longitude: 'lon',
      },
      zipcode: 'zip',
    },
  
    APIkey: '3d461f5e0c969b62fcca2d7c18ebde0a',
  };
  