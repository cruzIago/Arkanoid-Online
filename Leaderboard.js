var fondoLeaderboard;
var botonMenu;

Game.Leaderboard = function (game) {
    this.IntroducirNombre = null;
};

Game.Leaderboard.prototype={
    create: function (game) {
        fondoLeaderboard = this.add.sprite(0, 0, 'fondoLeaderboard');

        fondoLeaderboard.animations.add('girar', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, true);
        fondoLeaderboard.animations.play('girar');

        this.crearBoton(game, game.world.centerX-170,390,300,100, 
            function(){
            });
    }, 

    crearBoton: function(game, x, y, w, h, callback){
        botonMenu=game.add.button(x+70,y-15,'botonVolver');
        botonMenu.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Menu',true,false,true);
            }    
            boton2.scale.setTo(0.45,0.45);
    }
    
}