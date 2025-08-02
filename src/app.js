import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';
import logger from './middleware/logger.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});