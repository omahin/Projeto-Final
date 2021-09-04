const mongoose = require('mongoose')
const especialidade = require('../models/especialidade')
const Especialidade = require('../models/especialidade')

const todos = async(req, res) => {
    const especialidades = await Especialidade.find()
    res.json(especialidades)
}

const criarEspecialidade = async (req,res) => {
    const especialidade = new Especialidade({
        _id: new mongoose.Types.ObjectId(),
        especialidade: req.body.especialidade,
        criadoEm: req.body.criadoEm
    })
    const novaEspecialidade = await especialidade.save()
    //console.log("novaEspecialidade")
    res.status(201).json(novaEspecialidade)
    }

const verPorId = async (req, res) => {
    const especialidades = await Especialidade.find()
    const especialidadeId = req.params.id
    const filterEspecialidade = especialidades.filter(especialidade => especialidade.id == especialidadeId)
    res.status(201).json(filterEspecialidade)
}

module.exports = {
    todos,
    criarEspecialidade,
    verPorId   
}