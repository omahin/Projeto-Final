require('dotenv').config()
require('dotenv-safe').config()
const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/procura-psi'

const connect = () => {mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('Database conectada com sucesso!')})

    .catch((error)=>{console.log("Algo deu errado")
        console.error(error)
    })
}

module.exports = { connect }