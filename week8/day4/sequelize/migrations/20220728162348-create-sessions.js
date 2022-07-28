'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Sessions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            sid: {
                type: Sequelize.INTEGER,
            },
            expires: {
                type: Sequelize.DATE,
            },
            data: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable('Sessions')
    },
}
