const {request, response} = require('expres')
const {ListadoSeguimiento} = require('../models/seguimiento');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const Getseguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const Postseguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimiento(req.body)
    guardarDB(lista.listadoArr, 'seguimiento')
    res.send('Registro Creado')
}

const Putseguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'seguimiento')
    res.send('Registro Actualizado')
}

const Deleteseguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'seguimiento')
    res.send('Registro Eliminado')
}

module.exports ={
    Getseguimiento,
    Postseguimiento,
    Putseguimiento,
    Deleteseguimiento
}