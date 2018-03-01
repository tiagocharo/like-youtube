const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4001
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', socket => {
  console.log('New client connected')
  
  socket.on('new like', (like) => {
    console.log('new like: ', like)
    io.sockets.emit('new like', like)
  })
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  
})

server.listen(port, () => console.log(`Listening on port ${port}`))
