const express =require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).send(`server is up and running tim!`)
})

module.exports = server;