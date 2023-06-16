const comercioModel = require("../models/comercioModel");
const bcrypt = require("bcryptjs");

exports.getAllUsers = (req, res) => {
    comercioModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error:err.message}));
};

exports.createUser =  (req, res) => {
    const {name, nameEmpresa , phone, nit, password} = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash){
        if(err){
            res.status(500).json({error:err.message});
        }
        else{
            const newComercioUser = new comercioModel({
                name,
                nameEmpresa,
                phone,
                nit,
                password:hash
            });

            newComercioUser
            .save()
            .then(() => res.status(201).json({success:"created"}))
            .catch(err => res.status(500).json({error:err.message}));
        }
    });
}

exports.updateUser = (req, res) => {
    const {id}= req.params;
    const {name,nameEmpresa,phone,nit,password} = req.body;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, function(err, hash){
        if(err){
            res.status(500).json({error:err.message});
        }
        else {
            comercioModel.findByIdAndUpdate( id , { name, nameEmpresa, phone, nit, password:hash } , {new:true})
            .then(user => {
                if(!user)throw new Error(`user with ID ${id} not found`);
                res.status(200).json({user});
            })
            .catch(err => res.status(404).json({error:err.message}));
        }
    });
}

exports.deleteUser = (req, res) => {
    const {id}= req.params;
    comercioModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"User deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
}

exports.getOneUser = (req, res) => {
    const {nit}= req.params;
    comercioModel.findOne({nit})
    .then(user => res.json(user))
    .catch(err => res.status(404).json({error:err.message}));
}