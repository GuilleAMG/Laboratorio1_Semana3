const {request, response} = require('expres')
const {ListadodetalleEnvios} = require('../models/detalleEnvios');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetdetalleEnvios = (req = request, res = response) => {
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostdetalleEnvios = (req = request, res = response) => {
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearDetalles(req.body)
    guardarDB(lista.listadoArr, 'detalleEnvios')
    res.send('Registro Creado')
}

const PutdetalleEnvios = (req = request, res = response) => {
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'detalleEnvios')
    res.send('Registro Actualizado')
}

const DeletedetalleEnvios = (req = request, res = response) => {
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'detalleEnvios')
    res.send('Registro Eliminado')
}

module.exports ={
    GetdetalleEnvios,
    PostdetalleEnvios,
    PutdetalleEnvios,
    DeletedetalleEnvios
}