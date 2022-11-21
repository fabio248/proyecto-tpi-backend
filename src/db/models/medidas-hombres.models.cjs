const { Sequelize, DataTypes, Model } = require("sequelize");
const { CLIENT_TABLE } = require("./clientes.models.cjs");

const MEDIDA_HOMBRE_TABLE = "medidas_hombres";

const MedidaHombreSchema = {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
  clienteId: {
    allowNull: true,
    type: DataTypes.UUID,
    field: "cliente_id",
    references: {
      model: CLIENT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class MedidaHombre extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { as: "cliente" });
  }
  static config(sequelize) {
    return {
      sequelize,
      nameTable: MEDIDA_HOMBRE_TABLE,
      modelName: "MedidaHombre",
      timestamp: false,
    };
  }
}

module.exports = {
  MedidaHombreSchema,
  MedidaHombre,
  MEDIDA_HOMBRE_TABLE,
};
