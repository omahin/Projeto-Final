const mongoose = require('mongoose')

const convenioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    convenio: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date  
    }
})

module.exports = mongoose.model('convenio', convenioSchema)