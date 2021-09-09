const mongoose = require('mongoose')
const convenio = require('../models/convenio')
const Convenio = require('../models/convenio')
const jwt = require('jsonwebtoken')
const SECRETADM = process.env.SECRETADM

const criarConvenio = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token!'})
    }
    jwt.verify(token, SECRETADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
    const convenio = new Convenio({
        convenio: req.body.convenio,
        criadoEm: req.body.criadoEm
    })
    const novoConvenio = await convenio.save()
    res.status(201).json(novoConvenio)
    })
}

const todos = async (req,res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token!'})
    }
    jwt.verify(token, SECRETADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
        const convenio = await Convenio.find()
        res.status(201).json(convenio)
    })
}

const verPorId = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token!'})
    }
    jwt.verify(token, SECRETADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
        const convenios = await Convenio.find()
        const convenioId = req.params.id
        const filterConvenio = convenios.filter(convenio=>convenio.id == convenioId)
        res.status(201).json(filterConvenio)
    })
}

module.exports = {
    criarConvenio,
    todos,
    verPorId
}
