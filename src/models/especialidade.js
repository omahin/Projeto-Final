const mongoose = require('mongoose')

const especialidadeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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