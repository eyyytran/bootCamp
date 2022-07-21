'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Reviews', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            reviewerId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Reviewers',
                    key: 'id',
                    as: 'reviewerId',
                },
            },
            stars: {
                type: Sequelize.INTEGER,
                validate: { min: 1, max: 10 },
            },
            title: {
                type: Sequelize.STRING,
            },
            review: {
                type: Sequelize.STRING,
            },
            restaurantId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Restaurants',
                    key: 'id',
                    as: 'restaurantId',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Reviews')
    },
}
