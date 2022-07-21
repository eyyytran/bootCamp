'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Reviewers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Reviewers.hasMany(models.Reviews, {
                foreignKey: 'reviewerId',
            })
        }
    }
    Reviewers.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            karma: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Reviewers',
        }
    )
    return Reviewers
}
