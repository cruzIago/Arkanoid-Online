Game.Salas = function (game) {
    this.Menu = null;
};

var botonLocal;
var botonCrearSala;
var pantallaSalas;
var conexionSalas;
var barra;
Game.Salas.prototype = {
    init: function () {
        conexionSalas = new WebSocket('ws://localhost:8080/demo');
    },
    create: function (game) {

        pantallaSalas = game.add.sprite(0, 0, 'pantallaSalas');

        //botón para acceder al juego (1J)
        this.crearbotonLocal(game, game.world.centerX + 190, 750, 300, 100,
            function () {
            });

        //botón para acceder al juego (2J)
        this.crearBotonCrearSala(game, game.world.centerX - 370, 750, 300, 100,
            function () {   //callback: último parámetro
            });

        this.mensajeRecibido(game,function () {

        });

    },

    //Jugar a Arkanoid en modo 1 JUGADOR
    crearbotonLocal: function (game, x, y, w, h, callback) {
        botonLocal = game.add.button(x , y, 'botonLocal');
        botonLocal.onInputUp.add(arriba, this);
        function arriba() {
            game.state.start('Nivel', true, false, false, 1);
            conexionSalas.close();
        }
        botonLocal.scale.setTo(1, 1);
        // botonLocal.height=h/2; 
    },

    //Jugar a Arkanoid en modo 2 JUGADORES
    crearBotonCrearSala: function (game, x, y, w, h, callback) {
        botonCrearSala = game.add.button(x, y, 'botonCrearSala');
        botonCrearSala.onInputUp.add(arriba, this);
        function arriba() {
            var mensaje = {
                sala: new Date().getTime() + "s"
            }
            conexionSalas.send(JSON.stringify(mensaje));
            game.state.start('Nivel', true, false, true, 1);
            conexionSalas.close();
        }
        botonCrearSala.scale.setTo(1, 1);
    },

    mensajeRecibido: function (game) {
        conexionSalas.onmessage = function (msg) {
            var sal=JSON.parse(msg.data);
            barra=game.add.button(30,150,'botonSala');
            game.add.text(40,165,sal.sala);
            barra.onInputUp.add(entrar,this);
            function entrar(){
                game.state.start('Nivel',true,false,true,2);
                conexionSalas.close();
            }
        }

    }

}