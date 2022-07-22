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
            'Longboards',
            [
                {
                    name: 'Long1',
                    brand: 'Brand1',
                    length: '16 inches',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Long2',
                    brand: 'Brand1',
                    length: '18 inches',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Long3',
                    brand: 'Brand2',
                    length: '16 inches',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Long4',
                    brand: 'Brand4',
                    length: '21 inches',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Long6',
                    brand: 'Brand2',
                    length: '20 inches',
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
        await queryInterface.bulkDelete('Longboards', null, {})
    },
}
