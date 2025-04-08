const express = require('express');
const router = express.Router();
const controller = require('../controllers/comentarioController');

router.get('/', controller.getComentarios);
router.post('/', controller.criarComentario);
router.put('/:id', controller.editarComentario);
router.delete('/:id', controller.deletarComentario);

module.exports = router;
