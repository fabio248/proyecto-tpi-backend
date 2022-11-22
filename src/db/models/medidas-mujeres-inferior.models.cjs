const { Sequelize, DataTypes, Model } = require("sequelize");
const { CLIENTE_TABLE } = require("./clientes.models.cjs");

const MEDIDA_MUJER_INFERIOR_TABLE = "medidas_mujeres_inferior";

const MedidaMujerInferiorSchema = {
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
  largoPantalon: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "largo_pantalon",
  },
  tiro: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  cadera: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  anchoRodilla: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "ancho_rodilla",
  },
  anchoTobillo: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "ancho_tobillo",
  },
  cinturaARodilla: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "cintura_a_rodilla",
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

class MedidaMujerInferior extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { as: "cliente" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEDIDA_MUJER_INFERIOR_TABLE,
      modelName: "MedidaMujerInferior",
      timestamps: false,
    };
  }
}

module.exports = {
  MedidaMujerInferiorSchema,
  MedidaMujerInferior,
  MEDIDA_MUJER_INFERIOR_TABLE,
};
