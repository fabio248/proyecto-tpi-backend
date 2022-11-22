import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const { models } = sequelize;

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({ ...data, password: hash });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    users.forEach((user) => delete user.dataValues.password);
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) throw boom.notFound('User not found');
    delete user.dataValues.password;
    return user;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email },
    });
    return user;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    const updateUser = await user.update(changes);
    delete updateUser.dataValues.password;
    return updateUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

export default UserService;
