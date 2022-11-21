const { Sequelize, DataTypes, Model } = require("sequelize");

const CLIENTE_TABLE = "clientes";

const ClientSchema = {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    primaryKey: true,
  },
  email: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fistName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  secondName: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  fistLastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  secondLastName: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  thirdLastName: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Cliente extends Model {
  static associate(models) {
    this.hasOne(models.MedidaMujer, {
      as: "medidaMujer",
      foreignKey: "clienteId",
    });
    this.hasOne(models.MedidaHombre, {
      as: "medidaHombre",
      foreignKey: "clienteId",
    });
    // this.hasMany(models.Task, { as: "trabajo", foreignKey: "clienteId" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: "Cliente",
      timestamps: false,
    };
  }
}

module.exports = { CLIENTE_TABLE, Cliente, ClientSchema };
