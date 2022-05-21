const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exchangeSchema = new Schema({

    senderId:[{type: Schema.Types.ObjectId, ref: 'Client'}],
    receiverId:[{type: Schema.Types.ObjectId, ref: 'Client'}],

    convertedFrom: {
        type: String,
        required: true
    },

    convertedTo: {
        type: String,
        required: true
    },

    exchangeRate: {
        type: Number,
        
    },

    amountSent:{
        type: Number,
        min: 1,
        max: 100000,
        required: true

    }

},{
    timestamp: true
}
)

module.exports = mongoose.model('Exchange', exchangeSchema)