const mongoose = require('mongoose')
const terapeuta = require('../models/terapeuta')
const Terapeuta = require('../models/terapeuta')

const SECRET = process.env.SECRET
//console.log(process.env)

const todos = async(req, res) => {
    const terapeutas = await Terapeuta.find()
    res.status(200).json(terapeutas)
}

const criarEntrada = async (req,res) => {
    const terapeuta = new Terapeuta({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        numeroCrp: req.body.numeroCrp,
        especialidade: req.body.especialidade,
        abordagem: req.body.abordagem,
        enderecoDeAtendimento: req.body.enderecoDeAtendimento,
        convenio: req.body.convenio,
        valorDaConsultaParticular: req.body.valorDaConsultaParticular,
        horarioDisponivel: req.body.horarioDisponivel,
        presencialOuOnline: req.body.presencialOuOnline,
        telefoneParaContato: req.body.telefoneParaContato,
        criadoEm: req.body.criadoEm,
        atualizadoEm: req.body.atualizadoEm,
    })

    //não é possível cadastrar novoterapeuta com qlq um dos parametros acima
    const terapeutaJaExiste = await Terapeuta.findOne({nome: req.body.nome})
    if (terapeutaJaExiste) {
    return res.status(409).json({error: 'Profissional já cadastrado, tente novamente!'})
    //tenta salvar o novo terapeuta, caso dê erro me retorne o erro.
    }try{
        const novoTerapeuta = await terapeuta.save()
        res.status(201).json(novoTerapeuta)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const getById = async (req, res) => {
    const terapeutas = await Terapeuta.find()
    const requireId = req.params.id
    const filterId = terapeutas.filter(terapeuta => terapeuta.id == requireId)
    res.status(201).json(filterId)
}

const atualizarTerapeuta = async (req, res) => {
    try {
        const terapeuta = await Terapeuta.findById(req.params.id)
        if(terapeuta == null){
        return res.status(404).json({message: "Terapeuta não localizado!"})
        }
        if (req.body.nome != null){
        terapeuta.nome = req.body.nome
        }
        if (req.body.numeroCrp != null){
        terapeuta.numeroCrp = req.body.numeroCrp
        }
        if (req.body.especialidade != null){
        terapeuta.especialidade = req.body.especialidade
        }
        if (req.body.abordagem != null){
        terapeuta.abordagem = req.body.abordagem
        }
        if (req.body.enderecoDeAtendimento != null){
        terapeuta.enderecoDeAtendimento = req.body.enderecoDeAtendimento
        }
        if (req.body.convenio != null){
        terapeuta.convenio = req.body.convenio
        }
        if (req.body.valorDaConsultaParticular != null){
        terapeuta.valorDaConsultaParticular = req.body.valorDaConsultaParticular
        }
        if (req.body.horarioDisponivel != null){
        terapeuta.horarioDisponivel = req.body.horarioDisponivel
        }
        if (req.body.presencialOuOnline != null){
        terapeuta.presencialOuOnline = req.body.presencialOuOnline
        }
        if (req.body.telefoneParaContato != null){
        terapeuta.telefoneParaContato = req.body.telefoneParaContato
        }
        const terapeutaAtualizado = await terapeuta.save()
        res.status(200).json(terapeutaAtualizado)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}  

const deletarTerapeuta = async (req, res) => {
    const requireId = req.params.id
        try {
            Terapeuta.deleteOne({ _id: requireId }, function(err){
                if(!err){
                    res.status(200).json({message: "Terapeuta apagado com sucesso!"})
                }else{
                    res.status(500).json({message: err.message})
                }
            })
        } catch{
            res.status(404).json({message: 'Não há dados para remover com o ID inserido'})
        }
    }

const getByEspecialidade = async (req, res) => {
    const { especialidade } = req.params
    Terapeuta.find({ especialidade : especialidade })
        .then((list)=> {
            if(!list.length > 0) return res.status(404).send({"message": "Especialidade não encontrada, tente novamente!"})
        return res.status(200).send(list)
    })
}

const getByAbordagem = async (req,res) => {
    const { abordagem } = req.params
    Terapeuta.find({ abordagem : abordagem })
        .then((list)=> { 
            if(!list.length > 0) return res.status(404).json({"message": "Abordagem não encontrada, tente novamente!"})
        return res.status(200).send(list)
    })
}

const getByConvenio = async (req,res) => {
    const { convenio } = req.params
    Terapeuta.find({ convenio : convenio })
        .then((list)=> { 
            if(!list.length > 0) return res.status(404).json({"message": "Convênio não encontrado, tente novamente!"})
        return res.status(200).send(list)
    })
} 

module.exports = {
    todos,
    criarEntrada,
    getById,
    getByEspecialidade,
    atualizarTerapeuta,
    deletarTerapeuta,
    getByAbordagem,
    getByConvenio
}