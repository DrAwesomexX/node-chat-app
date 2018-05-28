var socket = io();

socket.on('connect',function (){
     console.log('connected to ther server');

    //  socket.emit('createEmail',{
    //      to:'riya@example.com',
    //      text:'hey'
    //  });
    socket.emit('createMessage',{
       to:'shreya',
        text:'hello'
    })
 });

 socket.on('disconnect',function(){
     console.log('disconnected from server');
})

// socket.on('newEmail',function (grab){
//  console.log('new email created',grab);
// }) 


socket.on('newMessage',function(newMessage){
     console.log('new message created',newMessage);
});