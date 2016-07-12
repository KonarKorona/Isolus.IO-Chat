var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var get_ip = require('ipware')().get_ip;

// Broken

app.get('/', function(req,res){
    res.sendfile('chat.html');
});

io.on('connection', function(socket){
    console.log("Connection Made");
    var user = ipfo;
    io.emit('chat message', "***** A wild stranger appears! *****");
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log("listening on *:3000");
});