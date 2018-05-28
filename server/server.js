const path =require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;


var app = express();
var server = http.createServer(app);

var io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('New user connected');

    // socket.emit('newEmail',{
    //     from:'manav@example.com',
    //     text:'hey',
    //     createAt:444
    // });

    // socket.on('createEmail',(newEmail)=>{
    //       console.log('email created',newEmail);
    // });

    socket.emit('newMessage',{
         from:'manav',
         text:'hi want to see you',
         completedAt:444
    });

    socket.on('createMessage',(createMessage)=>{
        console.log('message created',createMessage);
    });

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });
});



app.use(express.static(publicPath));

server.listen(port,()=>{
    console.log(`server starting at port ${port}`);
})