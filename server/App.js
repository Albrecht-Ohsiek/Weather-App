//Config File
require('dotenv').config();

//Port can't be the same as client/app
const PORT = process.env.PORT;
const KEY = process.env.KEY;

//Build express server
const express = require('express');
const app = express();

// Data Array
const data = [];


//runs server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
