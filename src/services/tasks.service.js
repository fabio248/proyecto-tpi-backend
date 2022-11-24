import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const { models } = sequelize;

class TaskService {
  constructor() {}

  async find() {
    const tasks = await models.Task.findAll();
    return tasks;
  }

  async findOne(id) {
    const task = await models.Task.findByPk(id, { include: 'cliente' });
    if (!task) throw boom.notFound('Task not found');
    return task;
  }

  async create(data) {
    const task = await models.Task.create(data);
    return task;
  }
  async update(id, changes) {
    const task = await this.findOne(id);
    const rta = await task.update(changes);
    return rta;
  }
  async delete(id) {
    const task = await this.findOne(id);
    await task.destroy();
    return id;
  }
}

export default TaskService;
