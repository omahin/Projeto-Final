const express = require('express')
const router = express.Router()
const controller = require('../controllers/convenioControllers')

router.post('/criar', controller.criarConvenio)

router.get('/todos', controller.todos)

router.get('/:id', controller.verPorId)

module.exports = router