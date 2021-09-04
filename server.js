const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv-safe').config()

const db = require('./src/data/database')
db.connect()

app.use(cors())

app.use(express.json())

const terapeutaRouter = require('./src/routes/terapeuta.routes')
app.use('/terapeuta', terapeutaRouter)

const especialidadeRouter = require('./src/routes/especialidade.routes')
app.use('/especialidade', especialidadeRouter)

const abordagemRouter = require('./src/routes/abordagem.routes')
app.use('/abordagem', abordagemRouter)

const convenioRouter = require('./src/routes/convenio.routes')
app.use('/convenio', convenioRouter)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log('Servidor rodando na porta 3333'))
