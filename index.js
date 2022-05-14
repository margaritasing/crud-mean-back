const express = require('express')

const app = express()

//Definimos ruta principal

app.listen(4000, ()=> {
    console.log("Servidor corriendo en el 4000")
})