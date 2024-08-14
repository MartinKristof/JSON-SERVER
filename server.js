// server.js
const jsonServer = require('json-server')
const reset = require('json-server-reset')
const initJsonServerReset = require('json-server-reset/src/init-reset')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(reset)
server.use('', router)
const clear = ['posts']
server.use(initJsonServerReset({ db: router.db, clear }))
server.listen(process.env.PORT || 3020, () => {
  console.log('JSON Server is running')
})
