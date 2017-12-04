$(document).ready(function () {

    var connection = new WebSocket('ws://10.0.70.57:8080/demo');
    connection.onerror = function (e) {
        console.log("WS error: " + e);
    }
    connection.onmessage = function (msg) {
        console.log("WS message: " + msg.data);
        var message = JSON.parse(msg.data)
        $('#chat').val($('#chat').val() + "\n" + message.nombre + ": " + message.cuerpo);
    }
    connection.onclose = function () {
        console.log("Closing socket");
    }
    $(document).keypress(function (e) {
        if (e.which == 13) {
            
            var msg = {
                nombre: $('#name').val(),
                cuerpo: $('#message').val()
            }
            
            $('#message').val("");
            $('#chat').val($('#chat').val() + "\n" + msg.nombre + ": " + msg.cuerpo);
            connection.send(JSON.stringify(msg));
        }
    });

    $('#send-btn').click(function () {
        var msg = {
            nombre: $('#name').val(),
            cuerpo: $('#message').val()
        }
        $('#chat').val($('#chat').val() + "\n" + msg.nombre + ": " + msg.cuerpo);
        connection.send(JSON.stringify(msg));
    });

});