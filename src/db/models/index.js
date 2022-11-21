import { User, UserSchema } from './users.models.cjs';
import { Cliente, ClientSchema } from './clientes.models.cjs';
import { MedidaHombre, MedidaHombreSchema } from './medidas-hombres.models.cjs';
import { MedidaMujer, MedidaMujerSchema } from './medidas-mujeres.models.cjs';
import { Task, TaskSchema } from './tasks.models.cjs';
import {
  MedidaMujerSuperior,
  MedidaMujerSuperiorSchema,
} from './medidas-mujeres-superior.models.cjs';

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Cliente.init(ClientSchema, Cliente.config(sequelize));
  MedidaHombre.init(MedidaHombreSchema, MedidaHombre.config(sequelize));
  MedidaMujer.init(MedidaMujerSchema, MedidaMujer.config(sequelize));
  MedidaMujerSuperior.init(
    MedidaMujerSuperiorSchema,
    MedidaMujerSuperior.config(sequelize)
  );
  Task.init(TaskSchema, Task.config(sequelize));

  Cliente.associate(sequelize.models);
  MedidaHombre.associate(sequelize.models);
  MedidaMujer.associate(sequelize.models);
  MedidaMujerSuperior.associate(sequelize.models);
}

export default setUpModels;
