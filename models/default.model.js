'use strict'
const {createdAt, updatedAt} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const defaults = sequelize.define(
    'defaults',
    {
      minSvijetlaSirina: {
        field: 'min_svijetla_sirina',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxSvijetlaSirina: {
        field: 'max_svijetla_sirina',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      minSvijetlaVisina: {
        field: 'min_svijetla_visina',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxSvijetlaVisina: {
        field: 'max_svijetla_visina',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      minSirinaKrila: {
        field: 'min_sirina_krila',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxSirinaKrila: {
        field: 'max_sirina_krila',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      minVisinaIspune: {
        field: 'min_visina_ispune',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt,
      updatedAt
    },
    {
      name: {
        singular: 'default',
        plural: 'defaults'
      },
      tableName: 'defaults'
    }
  )
  return defaults
}
