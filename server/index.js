var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path=require('path')

app.use(require('express').static(__dirname+'/public'))



io.on('connection', function(socket){
   
   
  
   socket.on('disconnect', function () {
     
   });
});
http.listen(3000, function(){
   console.log('listening on *:3000');
});