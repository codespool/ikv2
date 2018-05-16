'use strict'
const { createdAt, updatedAt, foreignKey } = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const krilo = sequelize.define(
    'krilo',
    {
      visina: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      sirina: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: false
      },
      pozicija: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      updatedAt,
      createdAt,
      rasporedIspunaId: foreignKey('raspored_ispuna_id'),
      vrataId: foreignKey('vrata_id')
    },
    {
      name: {
        singular: 'krilo',
        plural: 'krila'
      },
      tableName: 'krilo'
    }
  )

  krilo.associate = function (models) {
    krilo.belongsTo(models.rasporedIspuna, { foreignKey: 'raspored_ispuna_id' })
    krilo.belongsTo(models.vrata, { foreignKey: 'vrata_id' })
    krilo.belongsToMany(models.rasporedKrila, {
      foreignKey: 'krilo_id',
      through: 'rasporedKrilaMtm',
      otherKey: 'raspored_krila_id'
    })
  }
  return krilo
}
