const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRETUSER = process.env.SECRETUSER

const criarUsuario = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 8)
  req.body.senha = senhaComHash

  const usuario = new Usuario(req.body)
  try {
    const novoUsuario = await usuario.save()
    res.status(201).json(novoUsuario)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

const login = (req, res) => {
  Usuario.findOne({ email: req.body.email }, (err, usuarioEncontrado) => {
    if (!usuarioEncontrado) {
      return res.status(404).send({ message: 'Usuário não encontrado', email: `${req.body.email}`})
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, usuarioEncontrado.senha)
    if (!senhaValida) {
      return res.status(401).send({message: "Login não autorizado, senha incorreta!"})
    }
    const token = jwt.sign({email: req.body.email}, SECRETUSER)
    res.status(200).send({ message: "Login realizado com sucesso", token: token})
  })
}

module.exports = { 
    criarUsuario, 
    login 
}