'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Reviews extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Reviews.belongsTo(models.Reviewers, {
                foreignKey: 'reviewerId',
                onDelete: 'CASCADE',
            })
            Reviews.belongsTo(models.Restaurants, {
                foreignKey: 'restaurantId',
                onDelete: 'CASCADE',
            })
        }
    }
    Reviews.init(
        {
            reviewerId: DataTypes.INTEGER,
            stars: DataTypes.INTEGER,
            title: DataTypes.STRING,
            review: DataTypes.STRING,
            restaurantId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Reviews',
        }
    )
    return Reviews
}
