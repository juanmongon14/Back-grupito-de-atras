const mongoose = require("mongoose");

const Uri = "mongodb+srv://admin:@cluster0.7d1paao.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const comercioSchema = new mongoose.Schema({

    name: {type:String, required:true},
    nameEmpresa: {type:String, required:true},
    phone: {type:String, required:true},
    nit: {type:String,required:true},
    password: {type:String, required:true}
}, {collection: 'comercios'});

module.exports = mongoose.model('Comercio', comercioSchema);