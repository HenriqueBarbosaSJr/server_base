const express = require('express');


const app = express();

app.get('/',function(req, res){
    res.status(200).send('servidor rodando !!!');
});

app.listen(process.env.PORT || 3333, ()=>{
    console.log('Servidor rodando na porta 3333');
});