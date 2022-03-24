//Edited by mostafa
var express = require("express");
var router	= express.Router();

const {checkout,adminVerify} = require('../controllers/Orders')

router.get('/checkout',checkout);

router.get('/adminVerify',adminVerify);

module.exports = router;