const app = require('./server/server')

app.use('/', require('./routers/joyasrouter'))

module.exports = app
