require('dotenv').config()
const path = require('path')
const express = require('express')
const ehb = require('express-handlebars')
const routes = require('./controllers')
const session = require('express-session')
const sequelize = require('./config/connection')
const exp = require('constants')
const { Server } = require('http')
const sequelizeStore = require('connect-session-sequelize')(session.Store)
const PORT = process.env.PORT || 3000

const server = express()

const hb = ehb.create()
server.engine('handlebars', hb.engine)
server.set('view engine', 'handlebars')

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, 'public')))

server.use(session({
    secret: 'alijile3ld15',
    resave: false,
    saveUninitialized: true,
    cookie: {},
    store: new sequelizeStore({
        db: sequelize
    })
}))

server.use(routes)

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`Server running on Port: ${PORT}. http://localhost:${PORT}`))
})

