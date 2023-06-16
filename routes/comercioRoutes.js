const express = require("express");

const router = express.Router();

//importar el controlador para usuarios tipo comercio
const comercioController = require("../controller/comercioController");
const authComercioController = require ("../controller/authComercioController");

// const {verifyTokenComercio} = require("../middleware/verifyTokenComercio");

router.get('/', comercioController.getAllUsers);

router.post('/create', comercioController.createUser);

router.put('/update/:id', comercioController.updateUser);

router.delete('/delete/:id', comercioController.deleteUser);

router.post('/login', authComercioController.authenticateUser);

router.get('/:nit', comercioController.getOneUser);

module.exports = router;