const mongoose = require('mongoose')
const abordagem = require('../models/abordagem')
const Abordagem = require('../models/abordagem')

const criarAbordagem = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.status(403).send({message: 'Insira o token!'})
    }
    jwt.verify(token, SECRET, async(err) => {
        if (err) {
            return res.status(403).send({message: 'Token não válido!', err})
        }
    const abordagem = new Abordagem({
        // _id: new mongoose.Types.ObjectId(),
        abordagem: req.body.abordagem,
        descricao: req.body.descricao,
        criadoEm: req.body.criadoEm
    })
    const novaAbordagem = await abordagem.save()
    res.status(201).json(novaAbordagem)
    })
}

const todos = async (req, res) => {
    const abordagem = await Abordagem.find()
    res.status(201).json(abordagem)
}

const verPorId = async (req, res) => {
    const abordagems = await Abordagem.find()
    const abordagemId = req.params.id
    const filterAbordagem = abordagems.filter(abordagem => abordagem.id == abordagemId)
    res.status(201).json(filterAbordagem)
}

module.exports = {
    criarAbordagem,
    todos,
    verPorId,
}