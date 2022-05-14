const express = require('express');
const router = express.Router();

//api/productos

router.post('/', () => {
    console.log('creando producto')
})


module.exports = router