import { v4 as uuidv4 } from 'uuid';
import ClientService from '../services/client.service.js';
const service = new ClientService();

const getClient = async (req, res, next) => {
  try {
    const users = await service.find();
    return res.json(users);
  } catch (error) {
    next(error);
  }
};
const getOneClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    return res.json(user);
  } catch (error) {
    next(error);
  }
};

const createClient = async (req, res, next) => {
  try {
    const id = uuidv4();
    const data = req.body;
    const newUser = await service.create({ ...data, id });
    return res.json({ message: 'Created client', user: newUser });
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const changeUser = await service.update(id, changes);
    res.json({ message: 'Updated client', user: changeUser });
  } catch (error) {
    next(error);
  }
};
const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Deleted client', id });
  } catch (error) {
    next(error);
  }
};
export { getClient, createClient, updateClient, deleteClient, getOneClient };
