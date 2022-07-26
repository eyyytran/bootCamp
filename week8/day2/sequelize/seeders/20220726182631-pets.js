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
            'Pets',
            [
                {
                    name: 'Benji',
                    species: 'Bearded Dragon',
                    age: 2,
                    weight: '4',
                    health: 'Well',
                    unitOfWeight: 'lb',
                    owner: 'Amanda',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Stevie',
                    species: 'Cat',
                    age: 1,
                    weight: '11',
                    health: 'Well',
                    unitOfWeight: 'lb',
                    owner: 'Andrea',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'David',
                    species: 'Cat',
                    age: 1,
                    weight: '10',
                    health: 'Well',
                    unitOfWeight: 'lb',
                    owner: 'Andrea',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Toby',
                    species: 'Dog',
                    age: 4,
                    weight: '10',
                    health: 'Well',
                    unitOfWeight: 'lb',
                    owner: 'Steve',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Caleb',
                    species: 'Dog',
                    age: 2,
                    weight: '98',
                    health: 'Well',
                    unitOfWeight: 'lb',
                    owner: 'Kelsie',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Aimi',
                    species: 'Cat',
                    age: 1,
                    weight: '8',
                    health: 'Deceased',
                    unitOfWeight: 'lb',
                    owner: 'Ryan',
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
