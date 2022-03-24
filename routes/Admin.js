//Edited by mostafa

var express = require("express");
var router = express.Router();

const {adminRegistration,adminLogin,adminData} = require('../controllers/Admins')

router.post("/login",adminRegistration);

router.post("/register",adminLogin);

router.post("/admin_data",adminData);  //must be authenticated 

module.exports=router;
