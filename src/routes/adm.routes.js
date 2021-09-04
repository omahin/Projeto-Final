const express = require('express')
const router = express.Router()
const controller = require('../controllers/admControllers')

router.post('/criar', controller.criarAdm)

router.get('/login', controller.login)

module.exports = router