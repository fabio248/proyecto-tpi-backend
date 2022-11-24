"use strict";

const { CLIENTE_TABLE } = require("../models/clientes.models.cjs");
const {
  MEDIDA_HOMBRE_INFERIOR_TABLE,
} = require("../models/medidas-hombre-inferior.models.cjs");
const {
  MEDIDA_HOMBRE_SUPERIOR_TABLE,
} = require("../models/medidas-hombres-superior.models.cjs");
const {
  MEDIDA_MUJER_INFERIOR_TABLE,
} = require("../models/medidas-mujeres-inferior.models.cjs");
const {
  MEDIDA_MUJER_SUPERIOR_TABLE,
} = require("../models/medidas-mujeres-superior.models.cjs");
const { TASK_TABLE } = require("../models/tasks.models.cjs");

const { DataTypes, Sequelize } = require("sequelize");

const { USER_TABLE } = require("../models/users.models.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "admin",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(CLIENTE_TABLE, {
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
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      secondName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      firstLastName: {
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
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(TASK_TABLE, {
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
    });
    await queryInterface.createTable(MEDIDA_HOMBRE_INFERIOR_TABLE, {
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
    });
    await queryInterface.createTable(MEDIDA_HOMBRE_SUPERIOR_TABLE, {
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
      talleEspada: {
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
      HombreACodo: {
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
    });
    await queryInterface.createTable(MEDIDA_MUJER_INFERIOR_TABLE, {
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
    });
    await queryInterface.createTable(MEDIDA_MUJER_SUPERIOR_TABLE, {
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
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(TASK_TABLE);
    await queryInterface.dropTable(MEDIDA_HOMBRE_INFERIOR_TABLE);
    await queryInterface.dropTable(MEDIDA_HOMBRE_SUPERIOR_TABLE);
    await queryInterface.dropTable(MEDIDA_MUJER_INFERIOR_TABLE);
    await queryInterface.dropTable(MEDIDA_MUJER_SUPERIOR_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
  },
};
