import HombreInferiorService from '../services/hombre-inferior.service.js';
import { v4 as uuidv4 } from 'uuid';
const service = new HombreInferiorService();

const getMedidasHombreInferior = async (req, res, next) => {
  try {
    const medidas = await service.find();
    res.status(200).json({ medidasHombreParteInferior: medidas });
  } catch (error) {
    next(error);
  }
};

const getMedidaHombreInferior = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medida = await service.findOne(id);
    res.status(200).json({ medidaHombreParteInferior: medida });
  } catch (error) {
    next(error);
  }
};

const createMedidaHombreInferior = async (req, res, next) => {
  try {
    const data = req.body;
    const id = uuidv4();
    const newMedida = await service.create({ ...data, id });
    res.status(200).json({ message: 'Created medida', newMedida });
  } catch (error) {
    next(error);
  }
};

const updateMedidaHombreInferior = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const medidaUpdated = await service.update(id, changes);
    res.status(200).json({ message: 'Updated medida', medidaUpdated });
  } catch (error) {
    next(error);
  }
};

const deleteMedidaHombreInferior = async (req, res, next) => {
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
  getMedidasHombreInferior,
  getMedidaHombreInferior,
  createMedidaHombreInferior,
  deleteMedidaHombreInferior,
  updateMedidaHombreInferior,
};
