# LABORATORIO 1

## PROGRAMACION IV

### Guillermo Antonio Munguia Gonzales
### 61841340

Instrucciones:
1. Clonar proyecto.
2. Instalar dependencias:
            Npm Install
3. Ejecutar proyecto:
            Npm start

Cuestionario:

8. Si intentamos ejecutar nuestra aplicación utilizando “node app.js”, cual es el mensaje de error que nos devuelve, explicar porque sucede.

<R/ Aparece el error:>

                node:internal/modules/cjs/loader:959
                    throw err;
                    ^

                Error: Cannot find module 'express'

Esto se debe a que declaramos la dependencia "express" pero no la hemos instalado, por lo que la aplicacion detecta que no existe y no puede hacer uso de ella.

13. Como tarea convierte esta función normal en una función de tipo flecha.Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional. Es una prácticamoderna, te doy una pauta de cómodebe ser: () => { ESCRIBIR AQUÍ INSTRUCCIONES EN CODIGO }

<R/ La funcion flecha resultante es:>

                        app.listen(process.env.PORT, funcion = (port) => {                              
                            console.log("El puerto esta corriendo el puerto TCP: " + process.env.PORT) 
                        })


