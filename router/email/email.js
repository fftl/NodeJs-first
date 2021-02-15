var express = require('express')
var app = express() //express 불러오기
var router = express.Router();
var path = require('path')
var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'nodejs'
})

connection.connect()

//post방식!
router.post('/form', function (req, res) {
	//get : req.param('email');
	console.log(req.body)

	// console.log(req.body.email)
	// res.send("<h1>welcome" + req.body.email + "</h1>")
	// res.send("post resposne")

	res.render('email.ejs', {
		'email': req.body.email
	}) //ejs 사용법 email.ejs 파일안의 <%= email %> 부분에 email 에 해당하는 값을 넣어줘!
})

router.post('/ajax', function (req, res) {
	/**
	 * step1
	 */
	// console.log(req.body.email); //여기서의 console.log 는 서버에 찍힙니다.
	// //check validation about input value => select db
	// var responseData = {
	// 	'result': 'ok',
	// 	'email': req.body.email
	// };

	/**
	 * step2
	 */

	var email = req.body.email;
	var responseData = {};
	var query = connection.query('select name from nodejs.user where email="' + email + '"', function (err, rows) {
		if (err) throw err;
		if (rows[0]) {
			responseData.result = "ok";
			responseData.name = rows[0].name;
		} else {
			responseData.result = "none";
			responseData.name = "";
		}
		res.json(responseData);
		//이 function 안에서 작동해야 responseData가 있는 데이터 입니다.
	})
})

module.exports = router;