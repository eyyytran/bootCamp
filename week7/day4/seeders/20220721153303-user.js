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
        //Schema columns are : id, firstName, lastName, email, createdAt, updatedAt
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    firstName: 'Jon',
                    lastName: 'Do',
                    email: 'john@email.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Jane',
                    lastName: 'Do',
                    email: 'jane@email.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Alaina',
                    lastName: 'Do',
                    email: 'alaina@email.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Fred',
                    lastName: 'Do',
                    email: 'fred@email.com',
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
