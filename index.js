
const express = require("express");
const path = require('path');
const app = express();
const port = 5000;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/index.html'));
});

app.get('/index2',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/badges.html'));
});

app.get('/index3',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/blank-page.html'));
});

//app.get('/sobre',(req,res)=>{
  //  res.send("<h1>SOBRE</h1>");
//});

//app.get('/',(req,res)=>{
  //  res.send("<h1>SALVE</h1>");
//});

app.listen(port,()=>{
    console.log("Servidor rodando");
})