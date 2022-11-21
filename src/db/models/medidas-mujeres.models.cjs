const { Sequelize, DataTypes, Model } = require("sequelize");
const { CLIENTE_TABLE } = require("./clientes.models.cjs");

const MEDIDA_MUJER_TABLE = "medidas_mujeres";

const MedidaMujerSchema = {
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
    field: "cliente_id",
    type: DataTypes.UUID,
    references: {
      model: CLIENTE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class MedidaMujer extends Model {
  static associate(models) {
    this.hasOne(models.MedidaMujerSuperior, {
      as: "medidasParteSuperior",
      foreignKey: "medidaMujerId",
    });
    this.belongsTo(models.Cliente, { as: "cliente" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEDIDA_MUJER_TABLE,
      modelName: "MedidaMujer",
      timestamps: false,
    };
  }
}

module.exports = {
  MedidaMujerSchema,
  MedidaMujer,
  MEDIDA_MUJER_TABLE,
};
