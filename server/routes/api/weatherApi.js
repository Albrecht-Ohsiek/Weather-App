require('dotenv').config(); //Might have an error here due to location... just confirm later
//API KEY
const KEY = process.env.KEY;

//node-fetch has an error with the latest version. So downgraded to v2
const fetch = require('node-fetch'); //Handles fetching information form api

const api = () => {
    let zip = '';
    const country = 'ZA';

    

    //POST Route front end can use to send ZIP code to backend
    api.post('/searchLocation', (req, res) => {
        zip = req.body.zip;

        //zip codes usually between 00000 and 99999 some in form of 0000 9999
        //We are limiting out zip codes to south african zip codes so length =4
        if(!zip || zip.length !== 4 ){
            res.redirect('/error');
        }
        else{
            res.redirect('/current-weather'); //Specified path form brief
        }
    });

     
    api.get('/searchLocationWeather', (req, res) => {
        const { zip } = req.query;
      
        // Creates string containing Country, Zip, and required API KEY
        const stringBuilder_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${KEY}`;
      
        fetch(stringBuilder_url)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === '404') {
              // Handle case where ZIP code is not found or API response contains an error
              res.status(404).send('ZIP code not found');
            } else {
              // Process the weather data before sending it back to the frontend
              const processedData = {
                location: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                rain: data.rain ? data.rain['1h'] : null,
                clouds: data.clouds.value
              };
      
              res.json(processedData);
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send('An error occurred');
          });
      });

}

module.exports = api;
