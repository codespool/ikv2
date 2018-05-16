'use strict'
const {createdAt, updatedAt, foreignKey} = require('./commonFields')

module.exports = function (sequelize, DataTypes) {
  const profil = sequelize.define(
    'profil',
    {
      sifra: {
        type: DataTypes.STRING,
        allowNull: false
      },
      naziv: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sirina: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gornjiHorizProfil: {
        field: 'gornji_horiz_profil',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      gornjiHorizUtor: {
        field: 'gornji_horiz_utor',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      donjiHorizProfil: {
        field: 'donji_horiz_profil',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      donjiHorizUtor: {
        field: 'donji_horiz_utor',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      pregradniProfil: {
        field: 'pregradni_profil',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      pregradniUtorGore: {
        field: 'pregradni_utor_gore',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      pregradniUtorDolje: {
        field: 'pregradni_utor_dolje',
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      minusVisina: {
        field: 'minus_visina',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      visinaGornjeVodilice: {
        field: 'visina_gornje_vodilice',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      visinaDonjeVodilice: {
        field: 'visina_donje_vodilice',
        type: DataTypes.INTEGER,
        allowNull: false
      },
      slika: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt,
      updatedAt,
      defaultBojaId: {
        field: 'default_boja_id',
        type: DataTypes.INTEGER,
        defaultValue: 48
      }
    },
    {
      name: {
        singular: 'profil',
        plural: 'profili'
      },
      tableName: 'profil'
    }
  )

  profil.associate = function (models) {
    profil.belongsTo(models.ral, { foreignKey: 'default_boja_id' })
  }
  return profil
}
