const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exchangeSchema = new Schema({

    senderId:[{type: Schema.Types.ObjectId, ref: 'Client'}],
    receiverId:[{type: Schema.Types.ObjectId, ref: 'Client'}],

    convertedFrom: {
        type: Number,
        min: 1,
        max: 100000,
        required: true
    },

    convertedTo: {
        type: Number,
        min: 1,
        max: 100000,
        required: true
    },

    exchangeRate: {

    },

    amountSent:{
        type: Number,
        min: 1,
        max: 100000,
        required: true

    }

})

module.exports = mongoose.model('Exchange', exchangeSchema)