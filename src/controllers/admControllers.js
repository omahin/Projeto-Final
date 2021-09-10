const Adm = require('../models/adm')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_ADM = process.env.SECRET_ADM

const criarAdm = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 8)
  req.body.senha = senhaComHash

  const adm = new Adm(req.body)

  try {
    const novoAdm = await adm.save()
    res.status(201).json(novoAdm)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

const login = (req, res) => {
  Adm.findOne({ email: req.body.email }, (err, admEncontrado) => {
    if (!admEncontrado) {
      return res.status(404).send({ message: 'Administrador não encontrado', email: `${req.body.email}`})
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, admEncontrado.senha)
    if (!senhaValida) {
      return res.status(401).send({message: "Login não autorizado"})
    }

    const token = jwt.sign({email: req.body.email}, 'secret', SECRET_ADM)
    res.status(200).send({ messagem: "Login realizado com sucesso", token: token})
  })
}

module.exports = { 
    criarAdm, 
    login 
}