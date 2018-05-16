const assetsRoute = [
  {
    method: 'GET',
    path: '/assets/images/{param*}',
    handler: {
      directory: {
        path: 'assets/images/'
      }
    }
  }
]

module.exports = assetsRoute
