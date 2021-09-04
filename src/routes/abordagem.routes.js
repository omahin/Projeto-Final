const express = require('express')
const router = express.Router()
const controller = require('../controllers/abordagemControllers')

router.post('/criar', controller.criarAbordagem)

router.get('/todos', controller.todos)

router.get('/:id', controller.verPorId)

module.exports = router