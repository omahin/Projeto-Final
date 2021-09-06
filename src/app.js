const express = require('express')
const cors = require('cors')
const db = require('./data/database')

db.connect()

const app = express()

app.use(cors())
app.use(express.json())

const terapeutaRouter = require('./routes/terapeuta.routes')
app.use('/terapeuta', terapeutaRouter)

const especialidadeRouter = require('./routes/especialidade.routes')
app.use('/especialidade', especialidadeRouter)

const abordagemRouter = require('./routes/abordagem.routes')
app.use('/abordagem', abordagemRouter)

const convenioRouter = require('./routes/convenio.routes')
app.use('/convenio', convenioRouter)

const usuarioRouter = require('./routes/usuarios.routes')
app.use('/usuario', usuarioRouter)

const admRouter = require('./routes/adm.routes')
app.use('/adm', admRouter)

module.exports = app