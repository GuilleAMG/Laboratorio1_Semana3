const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', function(req, res){
    res.send('Hello World')
})

/*
app.listen(process.env.PORT, function(){
    console.log("El puerto esta corriendo el puerto TCP: " + process.env.PORT)
    }
) 
*/

app.listen(process.env.PORT, funcion = (port) => {                              
    console.log("El puerto esta corriendo el puerto TCP: " + process.env.PORT) 
})
