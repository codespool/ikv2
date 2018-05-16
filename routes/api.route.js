const cloudinary = require('cloudinary').v2
const config = require('config')
const encoder = require('base64-arraybuffer')
const db = require('../models/')

if (typeof process.env.CLOUDINARY_URL === 'undefined') {
  cloudinary.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret
  })
}

const apiRoutes = [
  {
    method: 'GET',
    path: '/api/vrata/{id}',
    handler: apiHandler
  },
  {
    method: 'GET',
    path: '/api/vrata/',
    handler: apiHandler
  },
  {
    method: 'GET',
    path: '/api/materijali/{id}',
    handler: getSingleMaterijal
  },
  {
    method: 'DELETE',
    path: '/api/materijali/{id}',
    handler: removeMaterijal
  },
  {
    method: 'PUT',
    path: '/api/materijali/{id}',
    handler: updateMaterial,
    config: {
      payload: {
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  },
  {
    method: 'POST',
    path: '/api/materijali',
    handler: addMaterijal,
    config: {
      payload: {
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  },
  {
    method: 'GET',
    path: '/api/materijali',
    handler: getAllMaterijali
  },
  {
    method: 'GET',
    path: '/api/profili',
    handler: getAllProfili
  },
  {
    method: 'PUT',
    path: '/api/profili/{id}',
    handler: updateProfil,
    config: {
      payload: {
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  },
  {
    method: 'POST',
    path: '/api/profili',
    handler: addProfil,
    config: {
      payload: {
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/profili/{id}',
    handler: removeProfil
  },
  {
    method: 'GET',
    path: '/api/profili/{id}',
    handler: getSingleProfil
  },
  {
    method: 'GET',
    path: '/api/defaults',
    handler: getDefaults
  }
]

async function getAllMaterijali (request, reply) {
  const result = await db.materijal.findAll({
    attributes: [
      'id',
      'sifra',
      'debljina',
      'debljinaBrtve',
      'naziv',
      'tekstura',
      'vrsta',
      'vrstaMaterijala',
      'createdAt'
    ],
    order: [['createdAt', 'DESC']]
  })
  return reply(result)
}

async function updateMaterial (request, reply) {
  const materialData = request.payload

  if (materialData.image !== 'undefined') {
    const encoded = `data:image;base64,${encoder.encode(request.payload.image)}`
    const upload = await cloudinary.uploader.upload(encoded, {
      folder: 'iverali'
    })
    materialData.tekstura = upload.secure_url
  }

  const materialToUpdate = await db.materijal.findById(request.params.id)
  const result = await materialToUpdate.update(materialData)
  return reply(result)
}

async function getSingleMaterijal (request, reply) {
  const result = await db.materijal.findById(request.params.id)
  return reply(result)
}

async function removeMaterijal (request, reply) {
  const row = await db.materijal.findById(request.params.id)
  const result = await row.destroy()
  return reply(result)
}

async function addMaterijal (request, reply) {
  const materialData = request.payload
  const encoded = `data:image;base64,${encoder.encode(request.payload.image)}`
  const upload = await cloudinary.uploader.upload(encoded, {
    folder: 'iverali'
  })
  materialData.tekstura = upload.secure_url
  materialData.puniNaziv = materialData.naziv
  const newMaterijal = await db.materijal.create(materialData)
  return reply(newMaterijal)
}

function apiHandler (request, reply) {
  return reply(db.vrata.findAll())
}

async function getAllProfili (request, reply) {
  const result = await db.profil.findAll({
    attributes: [
      'id',
      'sifra',
      'naziv',
      'sirina',
      'gornjiHorizProfil',
      'gornjiHorizUtor',
      'donjiHorizProfil',
      'donjiHorizUtor',
      'pregradniProfil',
      'pregradniUtorGore',
      'pregradniUtorDolje',
      'minusVisina',
      'visinaGornjeVodilice',
      'visinaDonjeVodilice',
      'slika'
    ],
    order: [['createdAt', 'DESC']]
  })
  return reply(result)
}

async function updateProfil (request, reply) {
  const profilData = request.payload

  if (profilData.image !== 'undefined') {
    const encoded = `data:image;base64,${encoder.encode(request.payload.image)}`
    const upload = await cloudinary.uploader.upload(encoded, {
      folder: 'profili'
    })
    profilData.slika = upload.secure_url
  }

  const profilToUpdate = await db.profil.findById(request.params.id)
  const result = await profilToUpdate.update(profilData)
  return reply(result)
}

async function addProfil (request, reply) {

  try {
    const profilData = request.payload
    const encoded = `data:image;base64,${encoder.encode(request.payload.image)}`
    const upload = await cloudinary.uploader.upload(encoded, {
      folder: 'profili'
    })
    profilData.slika = upload.secure_url
    const newProfil = await db.profil.create(profilData)
    return reply(newProfil)
  } catch (e) {
    console.log(e)
  }
}

async function removeProfil (request, reply) {
  const row = await db.profil.findById(request.params.id)
  const result = await row.destroy()
  return reply(result)
}

async function getSingleProfil (request, reply) {
  const result = await db.profil.findById(request.params.id)
  return reply(result)
}

function getDefaults (request, reply) {
  return reply(db.defaults.findOne())
}

module.exports = apiRoutes
