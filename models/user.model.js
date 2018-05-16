'use strict'
const {createdAt, updatedAt} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define(
    'user',
    {
      ime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tip: {
        type: DataTypes.ENUM('ADMIN', 'TRGOVAC', 'KUPAC'),
        defaultValue: 'KUPAC',
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt,
      updatedAt
    },
    {
      name: {
        singular: 'user',
        plural: 'users'
      },
      tableName: 'user'
    }
  )

  user.associate = function (models) {
    user.hasMany(models.narudzba, { foreignKey: 'user_id' })
  }
  return user
}
