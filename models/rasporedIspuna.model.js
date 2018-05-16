'use strict'
const {createdAt, updatedAt} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const rasporedIspuna = sequelize.define(
    'rasporedIspuna',
    {
      brojIspuna: {
        field: 'broj_ispuna',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      visineIspuna: {
        field: 'broj_vodilica',
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: false
      },
      tip: {
        type: DataTypes.ENUM('ZADANI', 'PROIZVOLJNI'),
        allowNull: false
      },
      createdAt,
      updatedAt
    },
    {
      name: {
        singular: 'rasporedIspuna',
        plural: 'rasporediIspuna'
      },
      tableName: 'rasporedIspuna'
    }
  )

  rasporedIspuna.associate = function (models) {
    rasporedIspuna.hasMany(models.krilo, {foreignKey: 'raspored_id'})
    rasporedIspuna.belongsToMany(models.ispuna, {
      foreignKey: 'raspored_ispuna_id',
      through: 'rasporedIspunaMtm',
      otherKey: 'ispuna_id'
    })
  }
  return rasporedIspuna
}
