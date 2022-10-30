const {request, response} = require('expres')

const GetdetalleEnvios = (req = request, res = response) => 
    res.send('GET EndPoint para Detalle Envios')

const PostdetalleEnvios = (req = request, res = response) => 
    res.send('POST EndPoint para Detalle Envios')

const PutdetalleEnvios = (req = request, res = response) => 
    res.send('PUT EndPoint para Detalle Envios')

const DeletedetalleEnvios = (req = request, res = response) => 
    res.send('DELETE EndPoint para Detalle Envios')


module.exports ={
    GetdetalleEnvios,
    PostdetalleEnvios,
    PutdetalleEnvios,
    DeletedetalleEnvios
}