const {v4:uuidv4} = require('uuid');

class Paquetes{
    constructor(id, descripcion, peso, volumen, clasificacion){
        this.id = uuidv4,
        this.descripcion = descripcion,
        this.peso = peso,
        this. volumen = volumen,
        this.clasificacion = clasificacion
    }
}

class ListadoPaquetes{
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
        datos.forEach(paquete => {
            this._listado[paquete.id] = paquete;
        });
    }

    crearPaquete(datos){
        const paquete = new Paquete(
            datos.id,
            datos.descripcion,
            datos.peso,
            datos,volumen,
            datos.clasificacion);
            this._listado[paquete.id] = paquete;
    }
}

module.exports = {
    ListadoPaquetes
}



