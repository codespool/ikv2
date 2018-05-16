'use strict'
const { createdAt, updatedAt } = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const materijal = sequelize.define(
    'materijal',
    {
      sifra: {
        type: DataTypes.STRING,
        allowNull: false
      },
      naziv: {
        type: DataTypes.STRING,
        allowNull: false
      },
      puniNaziv: {
        field: 'puni_naziv',
        type: DataTypes.STRING,
        allowNull: false
      },
      tekstura: {
        type: DataTypes.STRING,
        allowNull: false
      },
      debljina: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      debljinaBrtve: {
        field: 'debljina_brtve',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      vrsta: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vrstaMaterijala: {
        field: 'vrsta_materijala',
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt,
      updatedAt
    },
    {
      name: {
        singular: 'materijal',
        plural: 'materijali'
      },
      tableName: 'materijal'
    }
  )

  materijal.associate = function (models) {
    materijal.hasMany(models.ispuna, { foreignKey: 'materijal_id' })
  }
  return materijal
}
