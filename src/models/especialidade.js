const mongoose = require('mongoose')

const especialidadeSchema = new mongoose.Schema({
    especialidade: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date  
    }
})

module.exports = mongoose.model('especialidade', especialidadeSchema)