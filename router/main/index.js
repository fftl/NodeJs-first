var express = require('express')
var app = express() //express 불러오기
var router = express.Router();
var path = require('path')
var main = require('./main/main')
var email = require('./email/email')

//url routing
router.get('/', function(req, res){
    console.log("index js loaded")
    res.sendFile(path.join(__dirname, '../public/main.html'))
})

router.use('/main', main) // '/main'으로 들어오는 router을 사용하기 위해서는 main 을 사용하면 됩니다.
router.use('/email', email)

module.exports = router;