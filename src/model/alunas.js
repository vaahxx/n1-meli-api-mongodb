const mongoose = require('../app');

const AlunasSchema = new mongoose.Schema({
    nome: {type: String},
    dateOfBirth: {type: Date},
    nasceuEmSp: {type: Boolean},
    livros: [{
        titulo: String,
        leu: Boolean,
    }]
});