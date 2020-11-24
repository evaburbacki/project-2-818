'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('destinations', [
      {
        destination_name: 'Sydney',
        description: 'SYD',
        photo_path: 'assets/images/sydney.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'New York',
        description: 'NYC',
        photo_path: 'assets/images/nyc.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'Bangkok',
        description: 'BKK',
        photo_path: 'assets/images/bangkok.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'London',
        description: 'LON',
        photo_path: 'assets/images/london.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination_name: 'Porto',
        description: 'POR',
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