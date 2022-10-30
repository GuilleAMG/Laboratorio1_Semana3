const {request, response} = require('expres')

const Getseguimiento = (req = request, res = response) => 
    res.send('GET EndPoint para Seguimiento')

const Postseguimiento = (req = request, res = response) => 
    res.send('POST EndPoint para Seguimiento')

const Putseguimiento = (req = request, res = response) => 
    res.send('PUT EndPoint para Seguimiento')

const Deleteseguimiento = (req = request, res = response) => 
    res.send('DELETE EndPoint para Seguimiento')

module.exports ={
    Getseguimiento,
    Postseguimiento,
    Putseguimiento,
    Deleteseguimiento
}