/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Team = require('./team.model');

exports.register = function(socket) {
  Team.schema.post('save', function (doc) {
    onSave(socket, doc, function(){

    });
  });
  Team.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('team:save', doc);
  console.log('socket registered onSave++++++++++++++++++++++++++++++++++===============');
}

function onRemove(socket, doc, cb) {
  socket.emit('team:remove', doc);
  console.log('socket registered onRemove---------------++++++++++++++++++++++++++++++++++===============');
}
