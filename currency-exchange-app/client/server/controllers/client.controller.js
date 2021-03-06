const Client = require('../models/client.model');

const index = async (req, res) => {
    const clients = await Client.find({});
    res.send({
        status: 200,
        data: clients
    })
        console.log(clients)
}

const createClient = async (req, res) => {
    try{
        console.log('hit this line')
        console.log(req.body);
        const client = new Client(req.body);
        await client.save();
            return res.json(client)
    }catch(err){
        throw err;
    }
}

const show = async (req, res, next) => {
    console.log(req.params.id)
    await Client.findById(req.params.id, function (err) {
        res.send('server for id is here')
    })

}

const deleteClient = async (req, res) => {
    await Client.deleteOne({_id: req.params.id})
    res.send({
        status: 200,
    })
}


module.exports = {
    createClient,
    index,
    deleteClient

}