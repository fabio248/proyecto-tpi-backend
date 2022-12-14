const { DataTypes, Model } = require("sequelize");
const { CLIENTE_TABLE } = require("./clientes.models.cjs");

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
  manga: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  costado: {
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

class MedidaMujerSuperior extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { as: "cliente" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEDIDA_MUJER_SUPERIOR_TABLE,
      modelName: "MedidaMujerSuperior",
      timestamps: false,
    };
  }
}

module.exports = {
  MedidaMujerSuperiorSchema,
  MedidaMujerSuperior,
  MEDIDA_MUJER_SUPERIOR_TABLE,
};
