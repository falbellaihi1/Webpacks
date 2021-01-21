var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const API_URI = "https://api.meaningcloud.com/sentiment-2.1?key=";
let searchURL = "";
let projectData={};
/* EXPRESS */
const app = express();
const bodyParser = require('body-parser');


/* fetch node */
const fetch = require("node-fetch");


app.use(express.static('dist'));
/* Middleware*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
/*DotENV*/
const dotenv = require('dotenv');
dotenv.config();

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
    console.log(`Your API key is ${process.env.API_KEY}`);
});


app.get('/results', function (req, res) {
    console.log("get called");
    res.send(projectData);
});

app.post('/add', function (req, res) {
    searchURL = req.body.formText;
    getData(`${API_URI}${process.env.API_KEY}&of=json&url=${searchURL}&lang=en`).then(function (result) {
        projectData["results"] = result;
        res.send(result, process.env.API_KEY);
    });


});


const getData = async (API_URI) => {

    const res = await fetch(API_URI)
    try {

        return await res.json();
    } catch (error) {
        console.log("error", error.code);
        // appropriately handle the error
    }

}


