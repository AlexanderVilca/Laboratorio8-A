'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('laboratorios', [
      {
        CodLab: 1,
        razonSocial: "Pfizer",
        direccion: "Calle 123",
        telefono: "986458147",
        email: "pfizer@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('laboratorios', null, {});
  },
};

