const express = require('express')
const socketio = require('socket.io')
const app = express()

const SERVER_PORT = 8081


const server = app.listen(SERVER_PORT, () => {
    console.log(`Chat server running at http://localhost:${SERVER_PORT}`)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/group_chat.html')
})

const io = socketio(server)

io.on('connection', (socket) => {
    console.log(`New Socket: ${socket.id}`)


    socket.on("disconnect", () => {
        console.log(`User disconnected from socket: ${socket.id}`)
    })

    socket.on("message", (data) => {
        console.log(`Message from: ${socket.id}: \n${data}`)
    })

    socket.on("chat_message", (data) => {
        data.clientId = socket.id
        console.log(JSON.stringify(data))
        io.emit('chat_message'. data) // io, instead of socket, will broadcast to everyone on the server
        
    })


})