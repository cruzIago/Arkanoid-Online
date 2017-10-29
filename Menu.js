Game.Menu=function(game){
    
};

var button;
var pantallaTitulo;
var boton1;
var boton2; 

Game.Menu.prototype={
    create: function (game) {
        pantallaTitulo = game.add.sprite(0,100,'pantallaTitulo');
        this.crearBoton1(game, game.world.centerX-170,390,300,100, 
         function(){
         });
       
        this.crearBoton2(game, game.world.centerX-170,550,300,100, 
         function() {   //callback: último parámetro
             /////
         });

       
    },
    
    crearBoton1: function(game, x, y, w, h, callback){
        boton1=game.add.button(x+150,y,'boton1J');
        boton1.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Nivel',true,false,false);
            }    
        boton1.width=w/2;
        boton1.height=h/2; 
          
    },
    crearBoton2: function(game, x, y, w, h, callback){
        boton2=game.add.button(x+150,y,'boton2J');
        boton2.onInputUp.add(arriba,this); 
        function arriba(){
            game.state.start('Nivel',true,false,true);
            }    
        boton2.width=w/2;
        boton2.height=h/2;
    }
    
}







