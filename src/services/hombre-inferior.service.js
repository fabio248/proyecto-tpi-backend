import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';
const { models } = sequelize;

class MujerInferiorService {
  constructor() {}

  async find() {
    const medidas = await models.MedidaHombreInferior.findAll();
    return medidas;
  }

  async findOne(id) {
    const medida = await models.MedidaHombreInferior.findByPk(id, {
      include: ['cliente'],
    });
    if (!medida) throw boom.notFound('Medida not found');
    return medida;
  }

  async create(data) {
    const medida = await models.MedidaHombreInferior.create(data);
    return medida;
  }
  async update(id, changes) {
    const medida = await this.findOne(id);
    const rta = await medida.update(changes);
    return rta;
  }
  async delete(id) {
    const medida = await this.findOne(id);
    await medida.destroy();
    return id;
  }
}

export default MujerInferiorService;
