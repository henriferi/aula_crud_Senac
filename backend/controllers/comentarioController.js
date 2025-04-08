const Comentario = require('../models/comentarioModel');

exports.getComentarios = (req, res) => {
  res.json(Comentario.getAll());
};

exports.criarComentario = (req, res) => {
  const { texto } = req.body;
  if (!texto) return res.status(400).json({ erro: 'Texto é obrigatório' });
  const novo = Comentario.create(texto);
  res.status(201).json(novo);
};

exports.editarComentario = (req, res) => {
  const { id } = req.params;
  const { texto } = req.body;
  const atualizado = Comentario.update(id, texto);
  if (atualizado) res.json(atualizado);
  else res.status(404).json({ erro: 'Comentário não encontrado' });
};

exports.deletarComentario = (req, res) => {
  const { id } = req.params;
  const deletado = Comentario.delete(id);
  if (deletado) res.status(204).send();
  else res.status(404).json({ erro: 'Comentário não encontrado' });
};
