# 📝 Todo Node API

Uma API RESTful simples para gerenciamento de tarefas, criada com **Node.js** e **Express**. Ideal para aprendizado de conceitos como rotas, middlewares, filesystem (`fs`), `async/await`, Promises, validação e streams.

---

## 🚀 Funcionalidades

- 🔍 Listar tarefas (`GET /tasks`)
- 📥 Criar nova tarefa (`POST /tasks`)
- 📝 Atualizar tarefa (`PUT /tasks/:id`)
- ❌ Deletar tarefa (`DELETE /tasks/:id`)
- 🔄 Leitura via stream (`GET /tasks/stream`)
- 🧪 Middleware de validação de entrada
- 📜 Logs automáticos das requisições
- 📁 Dados persistidos em um arquivo JSON (`tasks.json`)

---

## 📦 Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [fs (filesystem)](https://nodejs.org/api/fs.html)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- `async/await`, Promises, callbacks, streams

---

## 🛠️ Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/todo-node-api.git
cd todo-node-api

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
