'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Restaurants extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Restaurants.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            reviewScore: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Restaurants',
        }
    )
    return Restaurants
}
