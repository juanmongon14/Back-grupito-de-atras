const express = require("express");

const router = express.Router();

//importar el controlador para usuarios tipo comercio
const comercioController = require("../controller/comercioController");
const authComercioController = require ("../controller/authComercioController");

router.get('/', comercioController.getAllUsers);

router.post('/', comercioController.createUser);

router.put('/:id', comercioController.updateUser);

router.delete('/:id', comercioController.deleteUser);

router.post('/login', authComercioController.authenticateUser);

router.get('/:nit', comercioController.getOneUser);

module.exports = router;