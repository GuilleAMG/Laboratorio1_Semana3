const express = require('express')

class server{
    constructor(){
            this.app = express()
            this.app.use(cors());
            this.app.use(express.json())
            this.app.use(express.static('public'));
            this.routes();
        }

    routes(){
        this.app.use('/precios', require('/../routes/precios'))
        this.app.use('/detalleEnvios', require('/../routes/detalleEnvios'))
        this.app.use('/envio', require('/../routes/envio'))
        this.app.use('/paquetes', require('/../routes/paquetes'))
        this.app.use('/seguimiento', require('/../routes/seguimiento'))
    }

    listen(){
        this.app.listen(process.env.PORT, () =>
        console.log("El puerto esta corriendo el puerto TCP: " + process.env.PORT))
    }
}

module.exports = server