$(document).ready(function () {

    var connection = new WebSocket('ws://localhost:8080/demo');
    connection.onerror = function (e) {
        console.log("WS error: " + e);
    }
    connection.onmessage = function (msg) {
        console.log("WS message: " + msg.data);
        /**
         * JSON.parse(msg.data) transforma el mensaje a un "objeto" y podemos operar con esos valores
         * lo mejor es enviar y recibir objetos tal que message contenga message.nombre y message.valor
         * Como un ejemplo podriamos enviar el valor de si hay 1 o 2 jugadores:
         * if(message.nombre=="jugadores"){
         *  if(message.valor=="1"){
         *      Empezar el nivel para 1 jugador
         *  }else if(message.valor=="2"){
         *      Empezar el nivel para 2 jugadores
         *  }
         * }
         * 
         */
        
        var message = JSON.parse(msg.data);
        
        $('#chat').val($('#chat').val() + "\n" + message.nombre + ":  " + message.valor);
    }
    connection.onclose = function () {
        console.log("Closing socket");
    }
    $(document).keypress(function (e) {
        if (e.which == 13) {

            var msg = {
                nombre: $('#name').val(),
                valor: $('#message').val()
            }

            $('#message').val("");
            $('#chat').val($('#chat').val() + "\n" + msg.nombre + ": " + msg.valor);
            connection.send(JSON.stringify(msg));
        }
    });

    $('#send-btn').click(function () {
        var msg = {
            nombre: $('#name').val(),
            valor: $('#message').val()
        }
     
        $('#chat').val($('#chat').val() + "\n" + msg.nombre + ": " + msg.valor);
        connection.send(JSON.stringify(msg));
    });





});