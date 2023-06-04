//Config File
require('dotenv').config();

//Port can't be the same as client/app
const PORT = process.env.PORT;
const KEY = process.env.KEY;

//Build express server
const express = require('express');
const app = express();
const port = 5000;


// Data Array
const data = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
require('./routes')(app);

// message for port 5000 on browser
app.get('/', (req, res) => {
    res.send('PORT 5000');
  });

//runs server
app.listen(port, (err) => {
    if (err) { console.log(err); };
    console.log(`Server is running on port: ${port}`);
});
