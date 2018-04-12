const mongoose = require('mongoose')
mongoose.Promise = global.Promise // parse da API de Promises para a API do node

module.exports = mongoose.connect('mongodb://localhost/todo')

