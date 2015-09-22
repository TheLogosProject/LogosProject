/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thing = require('./thing.model');

exports.register = function(socket) {
  thing.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  thing.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });

}


// exports.respond = function(socket) {
//   setInterval(function() {
//   if(countdown > 0) {
//   countdown--;
//   }
//   socket.emit('timer', { countdown: countdown });
// }, 1000);

//   socket.on('connection', function (socket) {
//     socket.on('reset', function (data) {
//       countdown = 10;
//       socket.emit('timer', { countdown: countdown });
//     });
// });

// }

function onSave(socket, doc, cb) {
  socket.emit('thing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thing:remove', doc);
}

// function onTime(socket, doc, cb) {
//   socket.emit('thing:start', doc);
// }

// var countdown = 10;

// setInterval( , 1000);
// function timer (socket, doc, cb) {
//   countdown--;
//   socket.emit('timer', { countdown: countdown }, doc);
// }

// socket.on('connection', function (socket) {
//   socket.on('reset', function (data) {
//     countdown = 1000;
//     socket.emit('timer', { countdown: countdown });
//   });
// });
