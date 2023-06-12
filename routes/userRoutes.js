const express = require("express");

const router = express.Router();

//importar el controlador para usuarios regulares
const userController = require("../controller/userController");
const authUserController = require ("../controller/authUserController");

router.get('/', userController.getAllUsers);

router.post('/create', userController.createUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

router.post('/login', authUserController.authenticateUser);

router.get('/:email', userController.getOneUser);

module.exports = router;