var express = require('express')
var app = express() //express 불러오기
var bodyParser = require('body-parser') //body-parser 불러오기
var router = require('./router/main/index')


app.listen(3000, function () {
	console.log("start! express server on port 3000");
});

//bodyParser 같은 패키지들은 app.js에서 선언을 해두면 router에 가서도 사용할 수 있습니다.
app.use(express.static('public'));
app.use(bodyParser.json()) //json 방식을 사용하고 싶다면,
app.use(bodyParser.urlencoded({ //클라이언트와 서버는 데이터를 전송할 때 인코딩을 거치기 때문에 인코딩을 처리 하기 위해 사용.
	extended: true
})) 
app.set('view engine', 'ejs') //ejs는 불러올필요 없음, view engine은 ejs를 사용할래 라는 의미

//router를 사용! /main/* 의 url은 아래 use를 통해 해당 js로 넘겨서 작동이됩니다.
app.use(router)


