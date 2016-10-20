var socket = io();

var room = getQueryVariable('room');
var name = getQueryVariable('name');

console.log(room);
console.log(name);

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);

	$('#messageLog').append('<p>' + momentTimestamp.local().format('hh:mm a') + ': ' + message.text + '</p>');
});

$('#sendMessage').click(function () {
	var message = $('#message').val();
	socket.emit('message', {
		text: message
	});
	$('#message').val('');
});