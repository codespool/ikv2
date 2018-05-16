const config = require('config')

module.exports = {
  development: {
    username: config.get('db.username'),
    password: config.get('db.password'),
    database: config.get('db.database'),
    host: config.get('db.opts.host'),
    port: config.get('db.opts.port'),
    dialect: config.get('db.opts.dialect')
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
}
