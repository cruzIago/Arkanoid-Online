var fondoNegro;
var texto;
var botonNombre;

Game.IntroducirNombre = function (game) {
    this.Nivel=null;
    this.fondo = null;
    this.textoPuntuacion=null;
    this.bloques=null;
};

Game.IntroducirNombre.prototype={
    create: function (game) {
        fondoNegro = this.add.sprite(0, 0, 'fondoNegro');
        
        this.crearBoton(game, game.world.centerX-170,390,300,100, 
            function(){
            });
        
    },
    
    crearBoton: function(game, x, y, w, h, callback){
        botonNombre=game.add.button(x+70,y-15,'botonVolver');
        botonNombre.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Leaderboard',true,false,true);
            }    
            boton2.scale.setTo(0.45,0.45);
    }
}