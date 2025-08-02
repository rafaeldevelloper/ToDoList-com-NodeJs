import { readTasks, writeTasks } from '../utils/fsUtils';
import fs from 'fs';
import path from 'path';

const getTasks = async (req, res, next) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

const streamTasks = (req, res) => {
  const filePath = path.join(__dirname, '../tasks.json');
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
};

const addTask = async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const newTask = { id: Date.now(), ...req.body };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const index = tasks.findIndex(t => t.id == req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Tarefa não encontrada' });
    tasks[index] = { ...tasks[index], ...req.body };
    await writeTasks(tasks);
    res.json(tasks[index]);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const filtered = tasks.filter(t => t.id != req.params.id);
    await writeTasks(filtered);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTasks,
  streamTasks,
  addTask,
  updateTask,
  deleteTask
};