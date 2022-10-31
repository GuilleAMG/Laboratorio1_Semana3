const {request, response} = require('expres')
const {ListadoPrecios} = require('../models/precios');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const Getprecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const Postprecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPrecios(req.body)
    guardarDB(lista.listadoArr, 'precios')
    res.send('Registro Creado')
}

const Putprecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'precios')
    res.send('Registro Actualizado')
}

const Deleteprecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'precios')
    res.send('Registro Eliminado')
}

module.exports ={
    Getprecios,
    Postprecios,
    Putprecios,
    Deleteprecios
}