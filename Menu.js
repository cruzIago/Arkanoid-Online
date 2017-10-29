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

    update:function(game){
        if(game.input.activePointer.isDown){
            if(game.input.x > 500){ // Se comprueban las coordenadas del click
                // Esta tocando o haciendo click en el borde derecho de la pantalla
            }
        }
        
        // Pulsar una sola vez
        game.input.onUp.add(function(){
            // Se ha presionado y levantado el dedo o el botón del ratón
        });
        
    },

    

    crearBoton1: function(game, x, y, w, h, callback){
        boton1=game.add.button(x,y,'boton1J');
        
        boton1.width=w;
        boton1.height=h;

    },
    crearBoton2: function(game, x, y, w, h, callback){
        boton1=game.add.button(x,y,'boton2J');
        
        boton1.width=w;
        boton1.height=h;
    },
}