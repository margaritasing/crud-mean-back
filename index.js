const express = require('express')
const conectarDb = require('./config/db')
const cors = require("cors")

const app = express();

//middleware
app.use(express.json());


//conectamos a la db
conectarDb();
app.use(cors());

//rutas
app.use('/api/productos', require('./routes/producto'));



app.listen(4000, ()=> {
    console.log("Servidor corriendo en el 4000");
})