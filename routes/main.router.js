const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola, soy la pagina principal de la tienda :D');
});



module.exports = router;
