var socket = io();

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
	$('#messageLog').append('<p>' + message.text + '</p>');
});

$('#sendMessage').click(function () {
	var message = $('#message').val();
	socket.emit('message', {
		text: message
	});
	$('#message').val('');
});