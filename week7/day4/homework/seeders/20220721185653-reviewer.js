'use strict'

const { query } = require('express')

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
            'Reviewers',
            [
                {
                    name: 'Alex K',
                    email: 'alex@gmail.com',
                    karma: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Dang V',
                    email: 'dang@gmail.com',
                    karma: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Na C',
                    email: 'na@gmail.com',
                    karma: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Sally R',
                    email: 'sally@gmail.com',
                    karma: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Kofi K',
                    email: 'kofi@gmail.com',
                    karma: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Yolanda B',
                    email: 'yolanda@gmail.com',
                    karma: 1,
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
        await queryInterface.bulkDelete('Reviewers', null, {})
    },
}
