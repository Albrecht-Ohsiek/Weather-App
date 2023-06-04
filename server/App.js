//Config File
require('dotenv').config();

//Port can't be the same as client/app
const PORT = process.env.PORT;
const KEY = process.env.KEY;

//Build express server
const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data Array
const data = [];

// Import Routes directory
require('./routes')(app);

//runs server
app.listen(PORT, (err) => {
    if (err) { console.log(err); };
    console.log(`Server is running on port: ${PORT}`);
});
