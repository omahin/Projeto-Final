const mongoose = require('mongoose')

const terapeutaSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
    },
    numeroCrp: {
        type: String,
        required: true, 
    },
    especialidade: {
        type: String,
        required: true,
    },
    abordagem: {
        type: String,
        required: true
    },
    enderecoDeAtendimento: {
        type: String,
        required: true,
    },
    convenio: {
        type: String,
        required: true,
    },
    valorDaConsultaParticular: {
        type: String,
        required: true
    },
    horarioDisponivel: {
        type: String,
        required: true
    },
    presencialOuOnline: {
        type: String,
        required: true
    },
    telefoneParaContato: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    },
})

module.exports = mongoose.model('terapeuta', terapeutaSchema)