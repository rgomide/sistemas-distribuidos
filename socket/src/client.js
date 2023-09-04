import { io } from 'socket.io-client'

const socket = io('ws://localhost:3000')

// recebe uma mensagem do servidor
socket.on('hello', (arg) => {
  console.log(arg)
})

// envia uma mensagem para o servidor
socket.emit('howdy', 'stranger')