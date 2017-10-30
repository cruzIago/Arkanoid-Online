Game.Menu=function(game){
    
};

var button;
var pantallaTitulo;
var boton1;
var boton2; 

Game.Menu.prototype={
    create: function (game) {
        pantallaTitulo = game.add.sprite(0,0,'pantallaTitulo');
        this.crearBoton1(game, game.world.centerX-170,390,300,100, 
         function(){
         });
       
        this.crearBoton2(game, game.world.centerX-170,550,300,100, 
         function() {   //callback: último parámetro
             /////
         });

       
    },
    
    crearBoton1: function(game, x, y, w, h, callback){
        boton1=game.add.button(x+70,y,'boton1J');
        boton1.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Nivel',true,false,false);
            }    
        boton1.scale.setTo(0.45,0.45);
       // boton1.height=h/2; 
          
    },
    crearBoton2: function(game, x, y, w, h, callback){
        boton2=game.add.button(x+70,y-15,'boton2J');
        boton2.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Nivel',true,false,true);
            }    
            boton2.scale.setTo(0.45,0.45);
    }
    
}







