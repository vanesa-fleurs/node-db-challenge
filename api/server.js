const express = require('express')
const server = express()
server.use(express.json())

const projects = require('./routes/projects.js')
server.use('/api/projects', projects)

const tasks = require('./routes/tasks.js')
server.use('/api/tasks', tasks)

server.get('/', (req, res) => {
    res.send(`
      <h2>Node DB Sprint.</h>
    `);
});
module.exports = server;