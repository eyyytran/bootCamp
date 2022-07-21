'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
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
            'Restaurants',
            [
                {
                    name: 'Vegreen',
                    address: '111 Duluth Drive',
                    category: 'vegan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Mochibees',
                    address: '112 Duluth Drive',
                    category: 'dessert',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Tancha',
                    address: '121 Blvd Drive',
                    category: 'boba',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Xing Fu Tang',
                    address: '1000 Satellite Blvd',
                    category: 'boba',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Pho Dai Loi',
                    address: '130 Pleasant Hill Rd',
                    category: 'vietnamese',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Crossing Bridge Noodle',
                    address: '141 Satellite Blvd',
                    category: 'chinese',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Restaurants', null, {})
    },
}
