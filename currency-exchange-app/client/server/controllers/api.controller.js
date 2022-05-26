const Exchange = require('../models/exchange.model');

const axios = require("axios");

function convertCurrency(req, res) {

    // console.log('hitting this route')
    // console.log(convertFrom, 'from')
    // console.log(convertTo, 'to')
    // console.log(amountSent, 'amount')
    // json.parse(amountSent)
    // console.log(req, 'amount send')
    console.log(req.body, 'body')
    

    const options = {
      method: 'GET',
      url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
      params: {format: 'json', from: 'AUD', to: 'CAD', amount: '1'},
      headers: {
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}
module.exports = {
    convertCurrency
}

