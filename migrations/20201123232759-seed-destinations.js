'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('destinations', [
      {
        destination_name: 'Lisbon',
        location: {"latitude": "38.78131", "longitude": "-9.13592"},
        photo_path: 'assets/images/lisbon.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'Lyon',
        location: { "latitude": "45.72639", "longitude": "5.09083" },
        photo_path: 'assets/images/lyon.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'Marseille',
        location: { "latitude": "43.435559999999995", "longitude": "5.21361" },
        photo_path: 'assets/images/marseille.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'Dakar',
        location: { "latitude": "14.739707999999998", "longitude": "-17.490225" },
        photo_path: 'assets/images/dakar.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'Porto',
        location: { "latitude": "41.248055", "longitude": "-8.681389" },
        photo_path: 'assets/images/porto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}, { location: { type: new Sequelize.JSONB() } });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('destinations', null, {});
  }
};