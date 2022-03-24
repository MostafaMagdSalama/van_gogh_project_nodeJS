var express = require("express");
var router	= express.Router();
router.post('/add', );

router.post('/update', function (req, res) {
	//handle register requests
});

router.get('/', function (req, res) {
	//get all users
	// var Users = {};
	// res.status(200).send(Users);
});

router.get('/:userId', function (req, res) {
	//check if current user login if yes then returns current user details
});

module.exports = router;