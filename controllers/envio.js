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

const Putenvio = (req = request, res = response) => {
    let lista = new ListadoEnvio()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'envios')
    res.send('Registro Actualizado')
}

const Deleteenvio = (req = request, res = response) => {
    let lista = new ListadoEnvio()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'envios')
    res.send('Registro Eliminado')
}

module.exports ={
    Getenvio,
    Postenvio,
    Putenvio,
    Deleteenvio
}