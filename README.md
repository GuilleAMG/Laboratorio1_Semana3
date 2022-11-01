# LABORATORIO 1

## PROGRAMACION IV
## Guillermo Antonio Munguia Gonzales
## 61841340

### Instrucciones:
1. Clonar proyecto.
2. Instalar dependencias:
            `Npm install`
3. Ejecutar proyecto:
            `Npm start`

#### Diagrama de Clases

!["Diagrama de Clases"](https://app.genmymodel.com/api/projects/_9ZJmEFgAEe2ck8ytUMEi6A/diagrams/_9ZJmE1gAEe2ck8ytUMEi6A/svg)

Cuestionario:

8. Si intentamos ejecutar nuestra aplicación utilizando “node app.js”, cual es el mensaje de error que nos devuelve, explicar porque sucede.

<R/ Aparece el error:>

                node:internal/modules/cjs/loader:959
                    throw err;
                    ^

                Error: Cannot find module 'express'

Esto se debe a que declaramos la dependencia "express" pero no la hemos instalado, por lo que la aplicacion detecta que no existe y no puede 
hacer uso de ella.

13. Como tarea convierte esta función normal en una función de tipo flecha.Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional. Es una prácticamoderna, te doy una pauta de cómodebe ser: `() => { ESCRIBIR AQUÍ INSTRUCCIONES EN CODIGO }`

<R/ La funcion flecha resultante es:>
                                    
                        app.listen(process.env.PORT, funcion = (port) => {                              
                            console.log("El puerto esta corriendo el puerto TCP: " + process.env.PORT) 
                        })

17. Tenemos una versión estable de un servidor HTTP por lo tanto vamos a realizar nuestro primer commit en Git de nuestra aplicación, ejecutar los siguientes comanos:
                    
`a. Git add .`
`b. Git status, cual es el resultado de git status?`

<R/ Nos muestra los archivos que se agregaron al repositorio, sin embargo las carpetas vacias fueron ignoradas.>
                            
            On branch master
                No commits yet

            Changes to be committed:
                (use "git rm --cached <file>..." to unstage)
                    new file:   .env
                    new file:   .gitignore
                    new file:   README.md
                    new file:   app.js
                    new file:   package-lock.json
                    new file:   package.json
                     
`c. Git commit -m “Servidor básico HTTP utilizando express”`
`d. Git log, cual es el resultado de git log?`

<R/ El resultado del Git log es:>

                commit ee5d521f8cd8045de006412296fc46af846ce4f6 (HEAD -> master)
                Author: GuilleAMG <guillermoamunguiag@gmail.com>
                Date:   Sat Oct 29 19:49:53 2022 -0600

                    Servidor basico HTTP utilizando express
                       
21. Dos cosas nuevas que vamos a ver en nuestro código. This y module.exports

`a. Que es this?`

<R/ La palabra clave "this" hace referencia a la instancia actual de la clase y también se usa como modificador del primer parámetro de un método de extensión.>

`b. Que es module.exports?`

<R/ Los "módulos" en JavaScript, se utilizan para poder exportar funciones o grupos de funciones así como objetos, constantes y variables de un archivo .js otro. De modo que deberás usar la palabra reservada "exports" para lograrlo; los módulos serán funcionales bajo un ambiente de trabajo del lado del servidor con NodeJS.>

