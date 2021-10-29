const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comparaisonSchema = new Schema({
    _id: {
        type: Number, // Il faut programmer le autoincrement
        required: true,
        unique: false, // a mettre en true
        default: 1

    },
    id_User: {
        type: Number,
        required: true,
        unique: false,
        default: 1
        
    },
    PseudoUser: {
        type: String,
        required: true,
        unique: false,
        default: "1"

    },
    Titre: {
        type: String,
        required: false,
        unique: false,
        default: "Je suis un titre"

    },

    Date: {
        type: Date,
        required: true,
        unique: false,
        default: "01:01/1002"

    },
    Contenue1: {
        type: String,
        required: true,
        unique: false,
        default: "1"

    },
    Contenue2: {
        type: String,
        required: true,
        unique: false,
        default: "s"

    },
    Description: {
        type: String,
        required: true,
        unique: false,
        default: "1"

    },
},{
    timestamps: true
});

var comparaisonSchemaE = mongoose.model('Comparaison', comparaisonSchema);

module.exports = comparaisonSchemaE;