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
    await Exchange.findById(req.params.id, function() {
        res.send(req.params.id)
    })

}
const createExchange = async (req, res) => {
    try{
        console.log('hit this line')
        console.log(req.body);
        const exchange = new Exchange(req.body);
        await exchange.save();
            return res.json(exchange)
    }catch(err){
        throw err;
    }
}

module.exports = {
    show,
    index,
    createExchange,
}