const Adm = require('../models/adm')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRETADM = process.env.SECRETADM


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
  Adm.findOne({ cpf: req.body.cpf }, (err, admEncontrado) => {
    // console.log(usuariaEncontrada)
    if (!admEncontrado) {
      return res.status(404).send({ message: 'Administrador não encontrado', cpf: `${req.body.cpf}`})
    }
    // console.log('SENHA DO BODY', req.body.senha)
    // console.log('SENHA DO BANCO', usuariaEncontrada.senha)

    const senhaValida = bcrypt.compareSync(req.body.senha, admEncontrado.senha)
    // console.log(senhaValida)

    if (!senhaValida) {
      return res.status(401).send({message: "Login não autorizado"})
    }

    const token = jwt.sign({cpf: req.body.cpf}, SECRETADM)
    res.status(200).send({ messagem: "Login realizado com sucesso", token: token})
})

}

module.exports = { 
    criarAdm, 
    login 
}