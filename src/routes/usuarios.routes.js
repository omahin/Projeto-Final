const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuariosControllers')

router.post('/criar', controller.criarUsuario)

router.get('/login', controller.login)

router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})


module.exports = router