var botonLocal;
var botonCrearSala;
var pantallaSalas

Game.Salas= function (game) {
    this.Menu = null;
};

Game.Salas.prototype={
    create: function (game) {
        pantallaSalas = game.add.sprite(0,0,'pantallaSalas');

        //botón para acceder al juego (1J)
        this.crearbotonLocal(game, game.world.centerX-170,390,300,100, 
            function(){
            });
       
        //botón para acceder al juego (2J)
        this.crearBotonCrearSala(game, game.world.centerX-170,550,300,100, 
            function() {   //callback: último parámetro
            });
    },

    //Jugar a Arkanoid en modo 1 JUGADOR
    crearbotonLocal: function(game, x, y, w, h, callback){
        botonLocal=game.add.button(x+70,y,'botonLocal');
        botonLocal.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Nivel',true,false,false);
        }    
        botonLocal.scale.setTo(0.45,0.45);
        // botonLocal.height=h/2; 
    },

    //Jugar a Arkanoid en modo 2 JUGADORES
    crearBotonCrearSala: function(game, x, y, w, h, callback){
        botonCrearSala=game.add.button(x+70,y-15,'botonCrearSala');
        botonCrearSala.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Nivel',true,false,true);
        }    
        botonCrearSala.scale.setTo(0.45,0.45);
    },
}