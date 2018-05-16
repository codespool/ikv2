'use strict'
const {createdAt, updatedAt} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const rasporedKrila = sequelize.define(
    'rasporedKrila',
    {
      brojKrila: {
        field: 'broj_krila',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      brojVodilica: {
        field: 'broj_vodilica',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      raspored: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
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
        singular: 'rasporedKrila',
        plural: 'rasporediKrila'
      },
      tableName: 'rasporedKrila'
    }
  )

  rasporedKrila.associate = function (models) {
    rasporedKrila.hasMany(models.vrata, {foreignKey: 'raspored_krila_id'})
    rasporedKrila.belongsToMany(models.krilo, {
      foreignKey: 'raspored_krila_id',
      through: 'rasporedKrilaMtm',
      otherKey: 'krilo_id'
    })
  }
  return rasporedKrila
}
