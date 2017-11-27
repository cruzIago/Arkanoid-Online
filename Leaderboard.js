var fondoLeaderboard;
var botonMenu;
var puntuaciones;

Game.Leaderboard = function (game) {
    this.IntroducirNombre = null;
};

<<<<<<< HEAD
function loadScores (callback) {
    $ajax({
        url: 'http://localhost:8080/puntos',
        headers:{
            "Acces-Control-Allow-Origin":"true",
            "Content-Type":"application/json"
        }
    }).done(function (puntuacion){
        console.log('Items loaded: ' +JSON.stringify(puntuacion));
=======

function loadScores(callback){
    $.ajax({
        url: 'http://localhost:8080/puntos',
        headers:{
            "Access-Control-Allow-Origin":"true",
            "Content-Type":"application/json"
        }
    }).done(function (puntuacion) {
        console.log('Items loaded: ' + JSON.stringify(puntuacion));
>>>>>>> 9d0b0f160b97df3a2c49c507206d93bbb476d135
        callback(puntuacion);
    })
}

Game.Leaderboard.prototype={
    create: function (game) {
        fondoLeaderboard = this.add.sprite(0, 0, 'fondoLeaderboard');

        fondoLeaderboard.animations.add('girar', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, true);
        fondoLeaderboard.animations.play('girar');
<<<<<<< HEAD

        loadScores (function(puntuacion){
            for(var i=0; i<puntuacion.length; i++){
                game.add.text(200, 270+i*57
                , puntuacion [i].score+"---"+puntuacion[i].who,
                {boundsAlignH:"center",boundsAlignV:"middle"});
            }
        });

        this.crearBoton(game, game.world.centerX-140,750,300,100, 
=======
        
        loadScores(function(puntuacion){
            for(var i=0;i<puntuacion.length;i++){
            //puntuaciones[0]=puntuacion[0].score+", "+puntuacion[0].who;}
            game.add.text(200,270+i*57
                ,puntuacion[i].score+"---"+puntuacion[i].who,
                {boundsAlignH:"center",boundsAlignV:"middle"}).addColor('#ffffff',0);
        }
    });
        
        //game.add.text(game.world.centerX,game.world.centerY,""+puntuaciones,{boundsAlignH:"center",boundsAlignV:"middle"});
        this.crearBoton(game, 600,700,300,100, 
>>>>>>> 9d0b0f160b97df3a2c49c507206d93bbb476d135
            function(){
            });
    }, 

    crearBoton: function(game, x, y, w, h, callback){
        botonMenu=game.add.button(x,y,'botonVolver');
        botonMenu.onInputUp.add(arriba,this); 

        function arriba(){
            game.state.start('Menu',true,false,true);
            }    
            boton2.scale.setTo(0.45,0.45);
    }
    
}