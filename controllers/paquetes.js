const {request, response} = require('expres')

const Getpaquetes = (req = request, res = response) => 
    res.send('GET EndPoint para Paquetes')

const Postpaquetes = (req = request, res = response) => 
    res.send('POST EndPoint para Paquetes')

const Putpaquetes = (req = request, res = response) => 
    res.send('PUT EndPoint para Paquetes')

const Deletepaquetes = (req = request, res = response) => 
    res.send('DELETE EndPoint para Paquetes')

module.exports ={
    Getpaquetes,
    Postpaquetes,
    Putpaquetes,
    Deletepaquetes
}