Game.Menu=function(game){
    
};

var button;
var pantallaTitulo;
var botonLeaderboard;
var botonJugar;

Game.Menu.prototype={
    create: function (game) {
        pantallaTitulo = game.add.sprite(0,0,'pantallaTitulo');
       
         //botón START
        this.crearbotonStart(game, game.world.centerX-170,550,300,100, 
            function() {   //callback: último parámetro
                /////
        });  
         
         //botón de leaderboard
         this.crearBotonLeaderboard(game, 550,600,300,100, 
         function() {   //callback: último parámetro
             /////
         });
    },
    
    
    crearbotonStart: function(game, x, y, w, h, callback){
        botonStart=game.add.button(x+70,y,'botonStart');
        botonStart.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Salas');
            }    
            botonStart.scale.setTo(0.45,0.45);
       // boton1.height=h/2; 
          
    },
    
     crearBotonLeaderboard: function(game, x, y, w, h, callback){
        botonLeaderboard=game.add.button(x+70,y-15,'botonLeaderboard');
        botonLeaderboard.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Leaderboard',true,false,true);
            }    
            botonLeaderboard.scale.setTo(0.65,0.65);
    }
    
}







