'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.belongsTo(models.User, {
                foreignKey: 'id',
                as: 'user',
            })

            Order.belongsTo(models.Longboard, {
                foreignKey: 'id',
                as: 'longboard',
            })
        }
    }
    Order.init(
        {
            userId: DataTypes.STRING,
            longboardId: DataTypes.STRING,
            price: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Order',
        }
    )
    return Order
}
