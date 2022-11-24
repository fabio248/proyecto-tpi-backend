import TaskService from '../services/tasks.service.js';
import { v4 as uuidv4 } from 'uuid';
const service = new TaskService();

const getTasks = async (req, res, next) => {
  try {
    const tasks = await service.find();
    return res.json(tasks);
  } catch (error) {
    next(error);
  }
};
const getOneTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await service.findOne(id);
    return res.json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const id = uuidv4();
    const data = req.body;
    const newTask = await service.create({ id, ...data });
    return res.json({ message: 'Created task', user: newTask });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const changeUser = await service.update(id, changes);
    res.json({ message: 'Updated task', user: changeUser });
  } catch (error) {
    next(error);
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Deleted task', id });
  } catch (error) {
    next(error);
  }
};

export { getTasks, getOneTask, createTask, updateTask, deleteTask };
