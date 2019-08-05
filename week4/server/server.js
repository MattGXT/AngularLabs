'use strict'
var express = require('express');
var app = express();
const path = require("path");
const User = require('./user.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var http = require('http').Server(app,path);
app.use(express.static(__dirname + "/www"));
var sessionstorage = require('sessionstorage');

let server = http.listen(3000, function (){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on:" + host + " Port:" + port);
})

app.get('/',function(req,res){
    res.sendFile(__dirname +'/www/index.html');
});

app.post('/api/auth', function(req,res){
    if(!req.body){
        return res.sendStatus(400)
    }
    let answer = new User();
    const result = answer.check(req.body.email,req.body.pwd);
    res.send(result);
})