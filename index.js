const Hapi = require('hapi')
const routes = require('./routes/index.route')
const server = new Hapi.Server()

server.connection({
  port: ~~process.env.PORT || 5000
})

let goodOptions = {
  reporters: {
    console: [
      {
        module: 'good-console',
        args: [{ log: '*', response: '*' }]
      },
      'stdout'
    ]
  }
}

server.register(
  [
    {
      register: require('good'),
      options: goodOptions
    },
    {
      register: require('inert')
    }
  ],
  err => {
    if (err) {
      throw new Error('Could not register the server!')
    }
  }
)

server.route(routes)

server.start(() => console.log(`Started at: ${server.info.uri}`))
