const Client = require('../models/client.model');

const createClient = async (req, res) => {
    try{
        console.log(req.body);
        const client = new Client(req.body);
        await client.save();
            return res.json(client)
    }catch(err){
        throw err;
    }
}


module.exports = {
    createClient

}