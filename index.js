const express = require('express')
const conectarDb = require('./config/db')

const app = express()

//conectamos a la db

conectarDb()

//Definimos ruta principal
app.get('/', (req, res)=>{
    res.send('que fue')
})

app.listen(4000, ()=> {
    console.log("Servidor corriendo en el 4000")
})