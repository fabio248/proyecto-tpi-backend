const { Sequelize, DataTypes, Model } = require("sequelize");
const { MEDIDA_MUJER_TABLE } = require("./medidas-mujeres.models.cjs");

const MEDIDA_MUJER_SUPERIOR_TABLE = "medidas_mujeres_superior";

const MedidaMujerSuperiorSchema = {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    primaryKey: true,
  },
  largoBlusa: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "largo_blusa",
  },
  escote: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  hombro: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  talle: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  busto: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  sisa: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  espalda: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  primerBoton: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "primer_boton",
  },
  cintura: {
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
  medidaMujerId: {
    allowNull: false,
    field: "medida_mujer_id",
    type: DataTypes.UUID,
    references: {
      model: MEDIDA_MUJER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class MedidaMujerSuperior extends Model {
  static associate(models) {
    this.belongsTo(models.MedidaMujer, { as: "medidaMujer" });
  }
  static config(sequelize) {
    return {
      sequelize,
      nameTable: MEDIDA_MUJER_SUPERIOR_TABLE,
      modelName: "MedidaMujerSuperior",
      timestamp: false,
    };
  }
}

module.exports = {
  MedidaMujerSuperiorSchema,
  MedidaMujerSuperior,
  MEDIDA_MUJER_SUPERIOR_TABLE,
};
