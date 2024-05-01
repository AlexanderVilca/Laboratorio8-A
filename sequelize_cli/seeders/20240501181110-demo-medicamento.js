'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('medicamentos', [
      {
        descripcionMed: "Medicine 1",
        fechaFabricacion: new Date(),
        fechaVencimiento: new Date(),
        stock: 100,
        precioVentaUni: 10.5,
        precioVentaPres: 100.0,
        CodTipoMed: 1,
        CodMarca: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('medicamentos', null, {});
  },
};

