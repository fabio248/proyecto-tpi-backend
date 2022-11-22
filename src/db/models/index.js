import { User, UserSchema } from './users.models.cjs';
import { Cliente, ClientSchema } from './clientes.models.cjs';
import {
  MedidaHombreSuperior,
  MedidaHombreSuperiorSchema,
} from './medidas-hombres-superior.models.cjs';
import {
  MedidaHombreInferior,
  MedidaHombreInferiorSchema,
} from './medidas-hombre-inferior.models.cjs';
import {
  MedidaMujerInferior,
  MedidaMujerInferiorSchema,
} from './medidas-mujeres-inferior.models.cjs';
import { Task, TaskSchema } from './tasks.models.cjs';
import {
  MedidaMujerSuperior,
  MedidaMujerSuperiorSchema,
} from './medidas-mujeres-superior.models.cjs';

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Cliente.init(ClientSchema, Cliente.config(sequelize));
  MedidaHombreSuperior.init(
    MedidaHombreSuperiorSchema,
    MedidaHombreSuperior.config(sequelize)
  );
  MedidaHombreInferior.init(
    MedidaHombreInferiorSchema,
    MedidaHombreInferior.config(sequelize)
  );
  MedidaMujerInferior.init(
    MedidaMujerInferiorSchema,
    MedidaMujerInferior.config(sequelize)
  );
  MedidaMujerSuperior.init(
    MedidaMujerSuperiorSchema,
    MedidaMujerSuperior.config(sequelize)
  );
  Task.init(TaskSchema, Task.config(sequelize));

  Cliente.associate(sequelize.models);
  MedidaMujerSuperior.associate(sequelize.models);
  MedidaMujerInferior.associate(sequelize.models);
  MedidaHombreInferior.associate(sequelize.models);
  MedidaHombreSuperior.associate(sequelize.models);
  Task.associate(sequelize.models);
}

export default setUpModels;
