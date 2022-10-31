const {v4:uuidv4} = require('uuid');

class detalleEnvios{
    constructor(id, idEnvio, idPaquetes){
        this.id = uuidv4,
        this.idEnvio = idEnvio,
        this.idPaquetesidPaquetes = idPaquetes
    }
}

class ListadodetalleEnvios{
    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareasFromArray(datos = []){
        datos.forEach(detalle => {
            this._listado[detalle.id] = detalle;
        });
    }

    creardetalleEnvios(datos){
        const detalle = new Detalle(
            datos.id,
            datos.idEnvio,
            datos.idPaquetes);
            this._listado[detalle.id] = detalle;
    }
}

module.exports = {
    ListadodetalleEnvios
}