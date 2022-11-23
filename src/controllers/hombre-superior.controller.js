import HombreSuperiorService from '../services/hombre-superior.service.js';
import { v4 as uuidv4 } from 'uuid';
const service = new HombreSuperiorService();

const getMedidasHombreSuperior = async (req, res, next) => {
  try {
    const medidas = await service.find();
    res.status(200).json({ medidasHombreParteSuperior: medidas });
  } catch (error) {
    next(error);
  }
};

const getMedidaHombreSuperior = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medida = await service.findOne(id);
    res.status(200).json({ medidasHombreParteSuperior: medida });
  } catch (error) {
    next(error);
  }
};

const createMedidaHombreSuperior = async (req, res, next) => {
  try {
    const data = req.body;
    const id = uuidv4();
    const newMedida = await service.create({ ...data, id });
    res.status(200).json({ message: 'Created medida', newMedida });
  } catch (error) {
    next(error);
  }
};

const updateMedidaHombreSuperior = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const medidaUpdated = await service.update(id, changes);
    res.status(200).json({ message: 'Updated medida', medidaUpdated });
  } catch (error) {
    next(error);
  }
};

const deleteMedidaHombreSuperior = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medida = await service.findOne(id);
    await medida.destroy();
    res.status(200).json({ message: 'Deleted Medida', id });
  } catch (error) {
    next(error);
  }
};

export {
  getMedidasHombreSuperior,
  getMedidaHombreSuperior,
  createMedidaHombreSuperior,
  deleteMedidaHombreSuperior,
  updateMedidaHombreSuperior,
};
