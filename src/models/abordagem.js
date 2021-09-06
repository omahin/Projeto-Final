const mongoose = require('mongoose')

const abordagemSchema = new mongoose.Schema({
    abordagem: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date  
    }
})

module.exports = mongoose.model('abordagem', abordagemSchema)