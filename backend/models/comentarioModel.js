let comentarios = [];
let idCounter = 1;

module.exports = {
  getAll: () => comentarios,

  create: (texto) => {
    const novo = { id: idCounter++, texto };
    comentarios.push(novo);
    return novo;
  },

  update: (id, texto) => {
    const comentario = comentarios.find(c => c.id == id);
    if (comentario) {
      comentario.texto = texto;
      return comentario;
    }
    return null;
  },

  delete: (id) => {
    const exists = comentarios.some(c => c.id == id);
    comentarios = comentarios.filter(c => c.id != id);
    return exists;
  }
};
