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
                    firstName: 'John',
                    lastName: 'Do',
                    email: 'john@email.com',
                    password: '1223',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'John',
                    lastName: 'Do',
                    email: 'john@email.com',
                    password: '1223',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Jane',
                    lastName: 'Do',
                    email: 'jane@email.com',
                    password: '1234',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Jack',
                    lastName: 'Do',
                    email: 'jack@email.com',
                    password: '1221',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Joss',
                    lastName: 'Do',
                    email: 'joss@email.com',
                    password: '1112',
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
        await queryInterface.bulkDelete('Users', null, {})
    },
}
