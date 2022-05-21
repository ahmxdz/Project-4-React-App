const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    firstName: {
        type: 'string',
        required: true
    },

    lastName: {
        type: 'string',
        required: true
    },

    email: {
        type: 'string',
        required: true
    },
    
},{
    timestamp: true
})

module.exports = mongoose.model('Client', clientSchema)