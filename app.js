var express = require('express')
var app = express()

app.listen(3000, function () {
	console.log("start! express server on port 3000");
});

app.use(express.static('public'));

app.get('/', function(req,res){
	// 경로접근의 '/' 기본경로에 해당 파일을 연결해준다!
	res.sendFile(__dirname+"/public/main.html"); //__dirname 으로 현재 루트 디렉토리를 명시할 수 있다.
})

app.get('/main', function(req,res){
	// 경로접근의 '/' 기본경로에 해당 파일을 연결해준다!
	res.sendFile(__dirname+"/public/main.html"); //__dirname 으로 현재 루트 디렉토리를 명시할 수 있다.
})