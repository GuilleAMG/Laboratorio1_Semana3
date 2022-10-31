const {request, response} = require('expres')
const {ListadoPaquetes} = require('../models/paquetes');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const Getpaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
    
const Postpaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPaquete(req.body)
    guardarDB(lista.listadoArr, 'paquetes')
    res.send('Registro Creado')
}

const Putpaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'paquetes')
    res.send('Registro Actualizado')
}

const Deletepaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'paquetes')
    res.send('Registro Eliminado')
}

module.exports ={
    Getpaquetes,
    Postpaquetes,
    Putpaquetes,
    Deletepaquetes
}