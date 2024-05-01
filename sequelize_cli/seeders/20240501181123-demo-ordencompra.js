'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ordencompras', [
      {
        NroOrdenC: 1,
        fechaEmision: new Date(),
        Situacion: "Pendiente",
        Total: 100.0,
        CodLab: 1,
        NrofacturaProv: "789451",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ordencompras', null, {});
  },
};

