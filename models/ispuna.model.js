'use strict'
const { createdAt, updatedAt, foreignKey } = require('./commonFields')
module.exports = function (sequelize, DataTypes) {
  const ispuna = sequelize.define(
    'ispuna',
    {
      visina: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      sirina: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: false
      },
      orjentacija: {
        type: DataTypes.ENUM('H', 'V'),
        defaultValue: 'H',
        allowNull: false
      },
      createdAt,
      updatedAt,
      materijalId: foreignKey('materijal_id'),
      kriloId: foreignKey('krilo_id')
    },
    {
      name: {
        singular: 'ispuna',
        plural: 'ispune'
      },
      tableName: 'ispuna'
    }
  )

  ispuna.associate = function (models) {
    ispuna.belongsTo(models.materijal, { foreignKey: 'materijal_id' })
    ispuna.belongsTo(models.krilo, { foreignKey: 'krilo_id' })
    ispuna.belongsToMany(models.rasporedIspuna, {
      foreignKey: 'ispuna_id',
      through: 'rasporedIspunaMtm',
      otherKey: 'raspored_ispuna_id'
    })
  }
  return ispuna
}
