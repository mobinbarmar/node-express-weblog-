const express = require('express');

const userController = require('../controllers/user.controller');


const router = express.Router()



//* Login Page
router.get('/login', userController.login)

//* register Page
router.get('/register', userController.register)

//* register Handle
router.post('/register', userController.createUser)

module.exports = router