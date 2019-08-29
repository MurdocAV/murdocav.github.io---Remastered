const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server


// TODO: Add a back-end SQL database accessed via knex or equivilent