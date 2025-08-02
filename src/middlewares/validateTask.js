module.exports = (req, res, next) => {
  const { title } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Campo "title" é obrigatório e deve ser uma string' });
  }
  next();
};