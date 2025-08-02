import express from "express";
import validateTask from '../middleware/validateTask.js';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.get('/stream', streamTasks);
router.post('/', validateTask, addTask);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;