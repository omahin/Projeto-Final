const express = require('express')
const router = express.Router()
const controller = require('../controllers/especialidadeControllers')

router.post('/criar', controller.criarEspecialidade)

router.get('/todos', controller.todos)

router.get('/:id', controller.verPorId)

module.exports = router