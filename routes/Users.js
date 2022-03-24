//edited bu mostafa 
var express = require("express");
var router = express.Router();

const {usersRegistration,usersLogin,userData} = require('../controllers/Users')

router.post("/login",usersRegistration);

router.post("/register",usersLogin);

router.post("/user_data",userData);  //must be authenticated 



module.exports = router;
