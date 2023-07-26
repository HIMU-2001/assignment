// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.enable('trust proxy');

app.post('/api/fetchStockData', async (req, res) => {
    // 8MGan1OR6p4CaL0sOFOLOBpazt57ArPL
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION

    console.log(req.body);
    const {stock,date} = req.body;
    var token = stock.toUpperCase();
    console.log(token);
    const params = {
        apiKey : 'zCTXIKq32nAGxSoCglU5JKAI2di9zHwW'
    }
    const url = 'https://api.polygon.io/v2/aggs/ticker/'+token+'/range/1/day/'+date+'/'+date;
    // const url = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09'
    
    const response = await axios.get(url, { params });
    const data = response.data.results[0];
    console.log(data);
    res.send(data);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));