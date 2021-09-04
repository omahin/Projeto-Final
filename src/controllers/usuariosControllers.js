const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

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
    // console.log(usuariaEncontrada)
    if (!usuarioEncontrado) {
      return res.status(404).send({ message: 'Usuário não encontrado', email: `${req.body.email}`})
    }
    // console.log('SENHA DO BODY', req.body.senha)
    // console.log('SENHA DO BANCO', usuariaEncontrada.senha)

    const senhaValida = bcrypt.compareSync(req.body.senha, usuarioEncontrado.senha)
    // console.log(senhaValida)

    if (!senhaValida) {
      return res.status(401).send({message: "Login não autorizado"})
    }

    const token = jwt.sign({email: req.body.email}, SECRET)
    res.status(200).send({ messagem: "Login realizado com sucesso", token: token})
})
}

module.exports = { 
    criarUsuario, 
    login 
}