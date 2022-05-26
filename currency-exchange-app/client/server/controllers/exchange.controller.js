const Client = require('../models/client.model');
const Exchange = require('../models/exchange.model');

const index = async (req, res) => {
    const exchange = await Exchange.find({});
    res.send({
        status: 200,
        exchangeData: exchange
    })
        console.log(exchange)
}

const show = async (req, res, next) => {
    console.log(req.params.id)
    await Client.findById(req.params.id, function (err) {
        res.send('server for id is here')
    })

}


module.exports = {
    show,
    index
}