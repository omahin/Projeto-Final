const mongoose = require('mongoose')
const abordagem = require('../models/abordagem')
const Abordagem = require('../models/abordagem')
const jwt = require('jsonwebtoken')
const SECRET_ADM = process.env.SECRET_ADM

const criarAbordagem = async (req, res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
    const abordagem = new Abordagem({
        abordagem: req.body.abordagem,
        descricao: req.body.descricao,
        criadoEm: req.body.criadoEm
    })
    const abordagemJaExiste = await Abordagem.findOne({abordagem: req.body.abordagem})
    if (abordagemJaExiste) {
        return res.status(409).json({error: "Abordagem já cadastrada!"})
        }try{
        const novaAbordagem = await abordagem.save()
        res.status(201).json(novaAbordagem)
        }catch(err){
        res.status(400).json({message: err.message})
        }
    })
}

const todos = async (req, res) => {
    const authHeader = req.get('Authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token para autorizar!'})
    }
    jwt.verify(token, SECRET_ADM, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
        const abordagem = await Abordagem.find()
        res.status(201).json(abordagem)
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
        const abordagems = await Abordagem.find()
        const abordagemId = req.params.id
        const filterAbordagem = abordagems.filter(abordagem => abordagem.id == abordagemId)
        res.status(201).json(filterAbordagem)
    })
}

module.exports = {
    criarAbordagem,
    todos,
    verPorId
}