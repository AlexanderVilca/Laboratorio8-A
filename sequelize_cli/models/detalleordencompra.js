'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleOrdenCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetalleOrdenCompra.init({
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    CodMedicamento: DataTypes.INTEGER,
    NroOrdenC: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetalleOrdenCompra',
  });
  return DetalleOrdenCompra;
};