var socket = io();

var room = getQueryVariable('room');
var name = getQueryVariable('name') || 'Anonymous';

$('h1.room-title').text(room);

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	var $messages = $('#messageLog');
	var $message = $('<li class="list-group-item"></li>');

	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('hh:mm a') + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');

	$messages.append($message);
});

$('#sendMessage').click(function () {
	var message = $('#message').val();
	socket.emit('message', {
		name: name,
		text: message
	});
	$('#message').val('');
});