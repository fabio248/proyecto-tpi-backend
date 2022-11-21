import { v4 as uuidv4 } from 'uuid';
import UserService from '../services/users.service.js';

const service = new UserService();

const getUsers = async (req, res) => {
  const users = await service.find();
  return res.status(200).json(users);
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const createUser = async (req, res, next) => {
  try {
    const id = uuidv4();
    const data = req.body;
    const newUser = await service.create({ ...data, id });
    return res.status(201).json({ message: 'Created user', newUser });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const updateUser = await service.update(id, changes);
    return res.status(200).json({ message: 'Updated user', updateUser });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Deleted user', id });
  } catch (error) {
    next(error);
  }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
