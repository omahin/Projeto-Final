const mongoose = require('mongoose')
const convenio = require('../models/convenio')
const Convenio = require('../models/convenio')

const criarConvenio = async (req, res) => {
    const convenio = new Convenio({
        _id: new mongoose.Types.ObjectId(),
        convenio: req.body.convenio,
        criadoEm: req.body.criadoEm
    })
    const novoConvenio = await convenio.save()
    res.status(201).json(novoConvenio)
}

const todos = async (req,res) => {
    const convenio = await Convenio.find()
    res.status(201).json(convenio)
}

const verPorId = async (req, res) => {
    const convenios = await Convenio.find()
    const convenioId = req.params.id
    const filterConvenio = convenios.filter(convenio=>convenio.id == convenioId)
    res.status(201).json(filterConvenio)
}

module.exports = {
    criarConvenio,
    todos,
    verPorId
}
