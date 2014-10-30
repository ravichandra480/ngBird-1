var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
router.post('/autharize', function (req, res) {
	console.log(req.body.name);
});
app.listen(81);
