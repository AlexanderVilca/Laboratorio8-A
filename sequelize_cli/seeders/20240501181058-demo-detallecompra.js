'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detalleordencompras', [
      {
        cantidad: 10,
        precio: 10.5,
        CodMedicamento: 1,
        NroOrdenC: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detalleordencompras', null, {});
  },
};
