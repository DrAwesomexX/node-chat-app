var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);

  var li = $('<li></li>');

  li.text(`User:${message.from} text:${message.text}`);
  
  $('#messages').append(li);
});


$('#message-form').on('submit',function(e){
    e.preventDefault();
    
    socket.emit('createMessage',{
        from:'jack',
        text:$('[name=message]').val()
    },function(){

    })
});