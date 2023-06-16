const mongoose = require("mongoose");

const comercioSchema = new mongoose.Schema({

    name: {type:String, required:true},
    nameEmpresa: {type:String, required:true},
    phone: {type:String, required:true},
    nit: {type:String,required:true},
    password: {type:String, required:true}
}, {collection: 'comercios'});

module.exports = mongoose.model('Comercio', comercioSchema);