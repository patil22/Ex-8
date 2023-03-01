const io = require('socket.io')(8000)

const users = {};

io.on('connection',socket =>{   
    socket.on('new-user-joined',name =>{
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',message =>{
        socket.broadcast.emit('recieve',{message:message , name : users[socket.id]})
    });
})






// var http = require("http");

// // creating the server and setting the headers
// // and port number setting
// http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end("we are displaying the data at web Gauravvvv patil......");
// }).listen(8081);

// // display a logger statement
// console.log(`server is listening at http://localhost:8081`);