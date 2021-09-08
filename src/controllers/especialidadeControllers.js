const mongoose = require('mongoose')
const especialidade = require('../models/especialidade')
const Especialidade = require('../models/especialidade')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const utils = require('../utils/authUtils')

const criarEspecialidade = async (req,res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token!'})
    }
    jwt.verify(token, SECRET, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
    const especialidade = new Especialidade({
        especialidade: req.body.especialidade,
        criadoEm: req.body.criadoEm
    })
    const novaEspecialidade = await especialidade.save()
    //console.log("novaEspecialidade")
    res.status(201).json(novaEspecialidade)
    })
} 

const todos = async(req, res) => {
    const especialidades = await Especialidade.find()
    res.json(especialidades)
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