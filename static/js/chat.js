// user_id: id of the user
const user_id = JSON.parse(document.getElementById('json-username').textContent);

// message_username: message from the user
const messages_user = JSON.parse(document.getElementById('json-messages-username').textContent);

// Establishing a connection with the server
const socket = new WebSocket(
    'ws://' + window.location.host + '/ws/' + id + '/'
);

// Opening the connection
socket.onopen = function (error) { console.log("CONNECTION ESTABLISHED"); }

// Closing the connection
socket.onclose = function (error) { console.log("CONNECTION CLOSED"); }

// Error handling
socket.onerror = function (error) { console.log(e); }

// Receiving a message
socket.onmessage = function (message) { console.log(message); }