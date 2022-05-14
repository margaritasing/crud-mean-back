const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController')

//api/productos

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id',productoController.actualizarProducto);
router.get('/:id',productoController.obtenerProducto);
router.delete('/:id', productoController.borrarProducto)



module.exports = router