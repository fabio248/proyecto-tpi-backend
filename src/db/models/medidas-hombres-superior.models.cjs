const { Sequelize, DataTypes, Model } = require("sequelize");
const { CLIENTE_TABLE } = require("./clientes.models.cjs");

const MEDIDA_HOMBRE_SUPERIOR_TABLE = "medidas_hombres_superior";

const MedidaHombreSuperiorSchema = {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    primaryKey: true,
  },
  hombro: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  largoCamisa: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "largo_camisa",
  },
  anchoCuello: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "ancho_cuello",
  },
  talleFrente: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "talle_frente",
  },
  frentePecho: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "frente_pecho",
  },
  talleEspalda: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "talle_espalda",
  },
  bocaManga: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "boca_manga",
  },
  sisaCamisa: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "sisa_camisa",
  },
  primerBoton: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "primer_boton",
  },
  largoManga: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "largo_manga",
  },
  hombroACodo: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "hombro_a_codo",
  },
  anchoBrazo: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "ancho_brazo",
  },
  cintura: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  cadera: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  espalda: {
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

class MedidaHombreSuperior extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { as: "cliente" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEDIDA_HOMBRE_SUPERIOR_TABLE,
      modelName: "MedidaHombreSuperior",
      timestamps: false,
    };
  }
}

module.exports = {
  MedidaHombreSuperiorSchema,
  MedidaHombreSuperior,
  MEDIDA_HOMBRE_SUPERIOR_TABLE,
};
