import { Server } from 'socket.io'

const io = new Server(3000)

io.on('connection', (socket) => {
  // Enviar uma mensagem para o cliente
  socket.emit('hello', 'world')

  // recebe uma mensagem do cliente
  socket.on('howdy', (arg) => {
    console.log(arg)
  })
})