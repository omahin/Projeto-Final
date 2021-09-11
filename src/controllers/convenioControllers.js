const mongoose = require('mongoose')
const convenio = require('../models/convenio')
const Convenio = require('../models/convenio')
const jwt = require('jsonwebtoken')
const SECRET_ADM = process.env.SECRET_ADM

const criarConvenio = async (req, res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
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
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
        const convenio = await Convenio.find()
        res.status(201).json(convenio)
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
        const convenios = await Convenio.find()
        const convenioId = req.params.id
        const filterConvenio = convenios.filter(convenio=>convenio.id == convenioId)
        res.status(201).json(filterConvenio)
    })
}

const deletarConvenio = async (req, res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
    const requireId = req.params.id
        try {
            Convenio.deleteOne({ _id: requireId }, function(err){
                if(!err){
                    res.status(200).json({message: "Convênio apagado com sucesso!"})
                }else{
                    res.status(500).json({message: err.message})
                }
            })
        } catch{
            res.status(404).json({message: 'Não há dados para remover com o ID inserido'})
        }
    })
}

module.exports = {
    criarConvenio,
    todos,
    verPorId,
    deletarConvenio
}
