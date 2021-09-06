const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuariosControllers')

router.post('/criar', controller.criarUsuario)

router.post('/login', controller.login)

module.exports = router