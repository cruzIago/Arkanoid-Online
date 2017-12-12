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
        this.crearbotonStart(game, game.world.centerX-170,500,300,100, 
            function() {   //callback: último parámetro
                /////
        });  
         
         //botón de leaderboard
         this.crearBotonLeaderboard(game, game.world.centerX+130,680,300,100, 
         function() {   //callback: último parámetro
             /////
         });
    },
    
    
    crearbotonStart: function(game, x, y, w, h, callback){
        botonStart=game.add.button(x+100,y,'botonStart');
        botonStart.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Salas',true,false);
            }    
            botonStart.scale.setTo(1.25,1.25);
       // boton1.height=h/2; 
          
    },
    
     crearBotonLeaderboard: function(game, x, y, w, h, callback){
        botonLeaderboard=game.add.button(x,y-15,'botonLeaderboard');
        botonLeaderboard.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Leaderboard',true,false,true);
            }    
            //botonLeaderboard.scale.setTo(0.65,0.65);
    }
    
}







