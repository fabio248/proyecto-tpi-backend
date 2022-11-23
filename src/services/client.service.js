import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const { models } = sequelize;

class ClientService {
  constructor() {}

  async find() {
    const users = await models.Cliente.findAll();
    return users;
  }

  async findOne(id) {
    const client = await models.Cliente.findByPk(id, {
      include: [
        'medidaParteSuperiorHombre',
        'medidaParteInferiorHombre',
        'medidasParteSuperiorMujer',
        'medidasParteInferiorMujer',
      ],
    });
    if (!client) throw boom.notFound('Client not found');
    return client;
  }

  async create(data) {
    const client = await models.Cliente.create(data, {
      include: [
        'medidaParteSuperiorHombre',
        'medidaParteInferiorHombre',
        'medidasParteSuperiorMujer',
        'medidasParteInferiorMujer',
      ],
    });
    return client;
  }
  async update(id, changes) {
    const client = await this.findOne(id);
    const rta = await client.update(changes);
    return rta;
  }
  async delete(id) {
    const client = await this.findOne(id);
    await client.destroy();
    return id;
  }
}

export default ClientService;
