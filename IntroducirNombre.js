var fondoNegro;
var texto;
var botonNombre;
var puntuacion;
var nombre;

Game.IntroducirNombre = function (game) {
    this.Nivel=null;
    this.fondo = null;
    this.textoPuntuacion=null;
    this.bloques=null;
};

//Función de creación de puntuaciones
function crearPuntos(puntuacion,callback){
    $.ajax({
        method:"POST",
        url:'http://localhost:8080/puntos',
        data:JSON.stringify(puntuacion),
        processData:false,
        headers:{
            "Content-Type":"application/json"
        }
    }).done(function(puntuacion){
        console.log("Puntos creados: "+JSON.stringify(puntuacion));
        callback(puntuacion);
    })
    
}
Game.IntroducirNombre.prototype={
    init: function (puntos) {
       puntuacion=puntos;
    },
    create: function (game) {
        fondoNegro = this.add.sprite(0, 0, 'fondoNegro');
        

        nombre=prompt("Introduce el nombre");

        this.crearBoton(game, game.world.centerX-170,390,300,100, 
            function(){
            });
        
    },
    
    crearBoton: function(game, x, y, w, h, callback){
        botonNombre=game.add.button(x+70,y-15,'botonVolver');
        botonNombre.onInputUp.add(arriba,this); 
        function arriba(){
            var puntuacion={
                score:100,
                who:nombre
            }
            crearPuntos(puntuacion,function(){
                game.state.start('Leaderboard',true,false,true);
            });
            
            
            }    
            boton2.scale.setTo(0.45,0.45);
    }
 
}



