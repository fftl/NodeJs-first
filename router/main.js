var express = require('express')
var app = express() //express 불러오기
var router = express.Router();
var path = require('path')

router.get('/', function(req, res){
    console.log("main js loaded")
    res.sendFile(path.join(__dirname, '../public/main.html'))
})

module.exports = router; //이 라우터를 다른 곳에서 사용할 수 있습니다.