const mongoose = require('mongoose')
const especialidade = require('../models/especialidade')
const Especialidade = require('../models/especialidade')
const jwt = require('jsonwebtoken')
const SECRET_ADM = process.env.SECRET_ADM

const criarEspecialidade = async (req,res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
    const especialidade = new Especialidade({
        especialidade: req.body.especialidade,
        criadoEm: req.body.criadoEm
    })
    const novaEspecialidade = await especialidade.save()
    res.status(201).json(novaEspecialidade)
    })
} 

const todos = async(req, res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
    const especialidades = await Especialidade.find()
    res.status(201).json(especialidades)
    })
}

const verPorId = async (req, res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
        const especialidades = await Especialidade.find()
        const especialidadeId = req.params.id
        const filterEspecialidade = especialidades.filter(especialidade => especialidade.id == especialidadeId)
        res.status(201).json(filterEspecialidade)
    })
}

module.exports = {
    todos,
    criarEspecialidade,
    verPorId   
}