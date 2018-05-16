const adminRoute = [
  {
    method: 'GET',
    path: '/admin/{param*}',
    handler: {
      directory: {
        path: 'admin/build',
        index: ['index.html']
      }
    }
  }
]

module.exports = adminRoute
