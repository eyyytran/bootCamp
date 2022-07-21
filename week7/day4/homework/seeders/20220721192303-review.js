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
        await queryInterface.bulkInsert('Reviews', [
            {
                reviewerId: 1,
                stars: 7,
                title: 'Chinese Vegan? A New Trend',
                review: "It's good stuff bro.",
                restaurantId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                reviewerId: 3,
                stars: 6,
                title: 'Y Mochi Donuts',
                review: "Here's a review of mochi donuts",
                restaurantId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                reviewerId: 4,
                stars: 4,
                title: 'Tancha Sucks',
                review: 'The boba was hard',
                restaurantId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                reviewerId: 5,
                stars: 9,
                title: 'New York Style Boba',
                review: 'Loved the brown sugar boba',
                restaurantId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                reviewerId: 6,
                stars: 3,
                title: 'What the Pho!',
                review: 'My food never came',
                restaurantId: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Reviews', null, {})
    },
}
