'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
     "Categories",  
     [
      {
        name: "Ciencias",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "politica",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Deportes",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Video-juegos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ],
     {}
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Categories", null, {});
  }
};
