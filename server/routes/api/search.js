// Search for locations

let fetch;
try {
  fetch = require('node-fetch');
} catch (err) {
  fetch = require('node-fetch').default;
}
const generateWebAppURL = require('server/utils').generateWebAppURL;

module.exports = (app) => {

  app.post('/search-location-weather', (req, res) => {
    const requestBody = req.body;
    const apiUrl = generateWebAppURL(requestBody.locationType, requestBody.locationData);

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect('/error' + err.message);
      });
  });
};