var fs=require('fs');
var request=require('request');
var express = require('express');

//change this line
var BASE_URL='ENTER BASE URL HERE- URL without params';

var transformHtml=function(html, callback){
	//Add code to get the data you want
	//from the page
	var start=html.search('"track-details">')+16;
	var end=html.search('Decode')-2;
	html=html.slice(start,end);
	html=html.replace(/[Ââ€]/,'');
	console.log(html);
	//Optional- add styles from CSS file
	fs.readFile('./style.css',function(err,data){
		callback('<style>'+data+'</style>'+html);
	});
};

var getData=function(parameter,callback){
	var url=BASE_URL+flightNum;
	request(url,function(err,respose,body){
		transformHtml(body,callback);
	});
};

var app = express();

app.get('/:parameter', function (req, res) {
	res.type('.html');
	var parameter=req.params.parameter;
	getData(parameter,function(html){
		res.send(html);
	});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
});