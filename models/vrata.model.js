'use strict'
const {createdAt, updatedAt, foreignKey} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const vrata = sequelize.define(
    'vrata',
    {
      svijetlaVisina: {
        field: 'svijetla_visina',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      svijetlaSirina: {
        field: 'svijetla_sirina',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      createdAt,
      updatedAt,
      profilId: foreignKey('profil_id'),
      profilBojaId: foreignKey('profil_boja_id'),
      rasporedKrilaId: foreignKey('raspored_krila_id')
    },
    {
      name: {
        singular: 'vrata',
        plural: 'vrata'
      },
      tableName: 'vrata'
    }
  )

  vrata.associate = function (models) {
    vrata.belongsTo(models.profil, {foreignKey: 'profil_id'})
    vrata.belongsTo(models.ral, {foreignKey: 'profil_boja_id'})
    vrata.belongsTo(models.rasporedKrila, {foreignKey: 'raspored_krila_id'})
  }
  return vrata
}
