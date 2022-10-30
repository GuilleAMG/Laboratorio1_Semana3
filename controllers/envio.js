const {request, response} = require('expres')
const {ListadoEnvio} = require('../models/envio');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const Getenvio = (req = request, res = response) => {
    let lista = new ListadoEnvio()
    let datosJSON = leerDB('envio');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
    

const Postenvio = (req = request, res = response) => {
    let lista = new ListadoEnvio()
    let datosJSON = leerDB('envio');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr, 'envio')
    res.send('Registro Creado')
}

const Putenvio = (req = request, res = response) => 
    res.send('PUT EndPoint para Envios')

const Deleteenvio = (req = request, res = response) => 
    res.send('DELETE EndPoint para Envios')

module.exports ={
    Getenvio,
    Postenvio,
    Putenvio,
    Deleteenvio
}