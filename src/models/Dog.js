const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // ID *
  //   Nombre *
  //   Altura *
  //   Peso *
  //   Años de vida
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_max: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    weight_max: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
   

  },
  
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};