const express = require('express');
// const helmet = require('helmet');
const projectRouter = require('./routers/project-router')
const server = express();

// server.use(helmet());
server.use(express.json());

// server.get('/', (req, res) => {
//     res.status(200).send(`server is up and running tim!`)
// })

server.use('/api/', projectRouter)
module.exports = server;