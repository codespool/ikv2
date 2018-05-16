const apiRoutes = require('./api.route')
const assetsRoute = require('./assets.route')
const adminRoute = require('./admin.route')

const indexRoute = [
  {
    method: 'GET',
    path: '/app/{param*}',
    handler: {
      directory: {
        path: 'frontend/build/',
        index: ['index.html']
      }
    }
  }
]

module.exports = indexRoute.concat(apiRoutes, assetsRoute, adminRoute)
