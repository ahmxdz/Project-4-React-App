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

    amountSent:{
        type: Number,
        min: 1,
        required: true

    },

    convertedAmount:{
        type: Number

    }

},{
    timestamp: true
}
)

module.exports = mongoose.model('Exchange', exchangeSchema)