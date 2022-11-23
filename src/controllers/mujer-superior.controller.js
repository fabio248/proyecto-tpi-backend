import MujerSuperiorService from '../services/mujer-superior.service.js';
import { v4 as uuidv4 } from 'uuid';
const service = new MujerSuperiorService();

const getMedidasMujeresSuperior = async (req, res, next) => {
  try {
    const medidas = await service.find();
    res.status(200).json({ medidasMujerParteSuperior: medidas });
  } catch (error) {
    next(error);
  }
};

const getMedidaMujerSuperior = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medida = await service.findOne(id);
    res.status(200).json({ medidasMujerParteSuperior: medida });
  } catch (error) {
    next(error);
  }
};

const createMedidaMujerSuperior = async (req, res, next) => {
  try {
    const data = req.body;
    const id = uuidv4();
    const newMedida = await service.create({ ...data, id });
    res.status(200).json({ message: 'Created medida', newMedida });
  } catch (error) {
    next(error);
  }
};

const updateMedidaMujerSuperior = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const medidaUpdated = await service.update(id, changes);
    res.status(200).json({ message: 'Updated medida', medidaUpdated });
  } catch (error) {
    next(error);
  }
};

const deleteMedidaMujerSuperior = async (req, res, next) => {
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
  getMedidasMujeresSuperior,
  getMedidaMujerSuperior,
  createMedidaMujerSuperior,
  deleteMedidaMujerSuperior,
  updateMedidaMujerSuperior,
};
