const express = require('express');
const server = express();

server.use(express.json());

let customers = [
    { id: 1, name: "Miguel", site: "http://localhost.com.br"},
    { id: 2, name: "Google", site: "http://google.com"},
    { id: 3, name: "UOL", site: "http://uol.com.br"},
];
server.get("/customers", (req,res)=>{
    return res.json(customers);
})

server.get("/customers/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 400;
    return res.status(status).json(customer)
})
server.listen(8080)