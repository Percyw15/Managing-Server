const express = require('express');
const server = express();

// Query params
// http://localhost:8080/hello?nome=Miguel&idade=19
// Query params = ?nome=Miguel&idade=19
server.get('/hello',(req,res)=>{
    const {nome,idade} = req.query;
    return res.json({
        title:'Hello World',
        message: `Ola ${nome}, tudo certo?`,
        idade: idade,
    });
});

// Routes Params
// htpp://localhost:8080/hello/Miguel
// Route Params = /hello/:nome
server.get('/hello/:nome/:idade',(req,res)=>{
    const {nome,idade} = req.params;
    
    return res.json({
        title:'Hello World',
        message: `Ola ${nome}, tudo certo?`,
        idade: idade
    });
});

server.listen(8080);

