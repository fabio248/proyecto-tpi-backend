const { Sequelize, DataTypes, Model } = require("sequelize");
const { CLIENTE_TABLE } = require("./clientes.models.cjs");

const MEDIDA_HOMBRE_INFERIOR_TABLE = "medidas_hombres_inferior";

const MedidaHombreInferiorSchema = {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    primaryKey: true,
  },
  largoPantalon: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "largo_pantalon",
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
  tiro: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  cadera: {
    allowNull: true,
    type: DataTypes.STRING,
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
      model: CLIENTE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class MedidaHombreInferior extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { as: "cliente" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEDIDA_HOMBRE_INFERIOR_TABLE,
      modelName: "MedidaHombreInferior",
      timestamps: false,
    };
  }
}

module.exports = {
  MedidaHombreInferiorSchema,
  MedidaHombreInferior,
  MEDIDA_HOMBRE_INFERIOR_TABLE,
};
