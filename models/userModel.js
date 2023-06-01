const mongoose = require("mongoose");

const Uri = "";

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({

    name: {type:String, required:true},
    email: {type:String, required:true},
    phone: {type:String, required:true},
    documentId: {type:String,required:true},
    password: {type:String, required:true}
}, {collection: 'usuarios'});

module.exports = mongoose.model('User', userSchema);