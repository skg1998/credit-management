const express = require('express');
const router = express.Router();
const userController = require('../controller/users');

//get all user 
router.get('/',userController.getAllUsers);

//get user by id 
router.get('/:uid',userController.getUserById);

//put user into database
router.post('/createUser',userController.putUserIntoDatabase);

module.exports = router;