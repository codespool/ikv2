'use strict'
const {createdAt, updatedAt, foreignKey} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const narudzba = sequelize.define(
    'narudzba',
    {
      status: {
        type: DataTypes.ENUM('NARUCENO', 'ODOBRENO', 'PLACENO', 'ISPORUCENO'),
        defaultValue: 'NARUCENO',
        allowNull: false
      },
      createdAt,
      updatedAt,
      userId: foreignKey('user_id'),
      vrataId: foreignKey('vrata_id')
    },
    {
      name: {
        singular: 'narudzba',
        plural: 'narudzbe'
      },
      tableName: 'narudzba'
    }
  )

  narudzba.associate = function (models) {
    narudzba.belongsTo(models.user, { foreignKey: 'user_id' })
    narudzba.belongsTo(models.vrata, { foreignKey: 'vrata_id' })
  }
  return narudzba
}
