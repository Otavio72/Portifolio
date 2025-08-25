
const express = require("express");
const path = require('path');
const app = express();
const port = 5000;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/index.html'));
});

app.get('/ACS',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/ACS.html'));
});

app.get('/GFP',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/GFP.html'));
});

app.get('/IMP',(req,res)=>{
    res.sendFile(path.join(__dirname, '/static/html/app/IMP.html'));
});


app.listen(port,()=>{
    console.log("Servidor rodando");
})