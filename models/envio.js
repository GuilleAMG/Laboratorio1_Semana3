const {v4:uuidv4} = require('uuid');

class Envio{
    constructor(codigo, fecha, tracking, origen, destino, emisor, destinatario){
        this.id = uuidv4,
        this.codigo = codigo,
        this.fecha = fecha,
        this.tracking = tracking,
        this.origen = origen,
        this.destino = destino,
        this.emisor = emisor,
        this.destinatario = destinatario
    }
}

class ListadoEnvio{
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
        datos.forEach(envio => {
            this._listado[envio.id] = envio;
        });
    }

    crearEnvio(datos){
        const envio = new Envio(
            datos.codigo,
            datos.fecha,
            datos.tracking,
            datos,origin,
            datos.destino,
            datos.emisor,
            datos.destinatario);
            this._listado[envio.id] = envio;
    }
}

module.exports = {
    ListadoEnvio
}