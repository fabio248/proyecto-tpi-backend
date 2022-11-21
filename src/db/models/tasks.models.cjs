const { Sequelize, DataTypes, Model } = require("sequelize");
const { CLIENTE_TABLE } = require("./clientes.models.cjs");

const TASK_TABLE = "tasks";

const TaskSchema = {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    primaryKey: true,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
  fechaEntrega: {
    type: DataTypes.DATE,
    field: "fecha_entrega",
    allowNull: false,
  },
  clienteId: {
    allowNull: false,
    type: DataTypes.UUID,
    field: "cliente_id",
    references: {
      model: CLIENTE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Task extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_TABLE,
      modelName: "Task",
      timestamps: false,
    };
  }
}

module.exports = { TASK_TABLE, Task, TaskSchema };
