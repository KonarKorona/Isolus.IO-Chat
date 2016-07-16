var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
    res.sendfile('chat.html');
});
io.on('start', function(socket){
    io.emit('chat message', "***** Server Reset! *****");
});
io.on('connection', function(socket){
    console.log("A Stranger Connected!");
    io.emit('chat message', "***** A Wild Stranger Appears! *****");
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3001, function(){
    console.log("This is a dev server");
    console.log("listening on *:3001");
});