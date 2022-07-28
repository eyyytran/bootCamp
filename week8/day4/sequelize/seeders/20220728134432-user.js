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
            'Users',
            [
                {
                    username: 'john.doe',
                    password: '12345',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: 'sally.ride',
                    password: 'astronaut',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: 'dave.chang',
                    password: 'momofuku',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: 'gong_yoo',
                    password: 'busan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: 'hien.nie',
                    password: 'model',
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
    },
}
