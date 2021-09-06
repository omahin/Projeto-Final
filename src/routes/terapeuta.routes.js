const express = require('express')
const router = express.Router()
const controller = require('../controllers/terapeutaControllers')

//listar todos os terapeutas cadastrados
router.get('/todos', controller.todos)

//listar terapeutas por especialidades
router.get('/:especialidade', controller.getByEspecialidade)

//listar terapeutas por abordagens
router.get('/abordagem/:abordagem', controller.getByAbordagem)

router.get('/convenio/:convenio', controller.getByConvenio)

//listar terapeutas por ID
router.get('/id/:id', controller.getById)

//criar uma entrada de terapeuta
router.post('/criar', controller.criarEntrada)

//Alterar dados já cadastrados anteriomente e retorna atualizado
router.patch('/:id', controller.atualizarTerapeuta)

//Deletar dados por ID específico
router.delete('/:id', controller.deletarTerapeuta)

module.exports = router