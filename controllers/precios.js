const {request, response} = require('expres')

const Getprecios = (req = request, res = response) => 
    res.send('GET EndPoint para Precios')

const Postprecios = (req = request, res = response) => 
    res.send('POST EndPoint para Precios')

const Putprecios = (req = request, res = response) => 
    res.send('PUT EndPoint para Precios')

const Deleteprecios = (req = request, res = response) => 
    res.send('DELETE EndPoint para Precios')

module.exports ={
    Getprecios,
    Postprecios,
    Putprecios,
    Deleteprecios
}