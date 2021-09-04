const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date  
    }
})

module.exports = mongoose.model('usuario', usuarioSchema)