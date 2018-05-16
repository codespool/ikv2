'use strict'
const {createdAt, updatedAt} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const ral = sequelize.define(
    'ral',
    {
      oznaka: {
        type: DataTypes.STRING,
        allowNull: false
      },
      boja: {
        type: DataTypes.STRING,
        allowNull: false
      },
      engNaziv: {
        field: 'eng_naziv',
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt,
      updatedAt
    },
    {
      name: {
        singular: 'ral',
        plural: 'rals'
      },
      tableName: 'ral'
    }
  )

  ral.associate = function (models) {
    ral.hasMany(models.profil, {foreignKey: 'default_boja_id'})
  }
  return ral
}
