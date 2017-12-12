Game.Preloader = function (game){
   
};

Game.Preloader.prototype = {
    //Funcion de precarga de los sprites y objetos
    preload:function(){
        this.titulo=this.add.sprite (this.world.centerX,this.world.CenterY, 'titulo');
        
        
          //BOTONES
        this.load.image('botonLeaderboard','assets/LEADERBOARD.png');
        this.load.image('siguiente','assets/siguiente.png');
        this.load.image('botonStart','assets/START.png');
        //this.load.image('botonJugar','assets/asdf.png');
        //this.load.image('botonJugar','assets/asdf.png');
        this.load.image('botonSala','assets/botonSala.png');
        this.load.image('enter','assets/ENTER.png');
        this.load.image('botonVolver', 'assets/volver.png');
        this.load.image('botonLocal', 'assets/local.png');
        this.load.image('botonCrearSala', 'assets/crearSala.png');

          //FONDOS
        this.load.image('pantallaTitulo', 'assets/BACKGROUND.png');
        this.load.image('fondo', 'assets/background_ingame.png');
        this.load.image('fondoNegro', 'assets/fondoNegro.jpg');
        this.load.image('pantallaSalas', 'assets/mapaMulti.png');
        this.load.image('fondoLeaderboard', 'assets/leaderboard.gif');
        this.load.spritesheet('fondoLeaderboard', 'assets/leaderboard_background.png', 800, 800);
        this.load.image('esperando','assets/esperando.png');
          //BOLAS
        this.load.image('Bola1', 'assets/BolaAzul.png');
        this.load.image('Bola2', 'assets/BolaRoja.png');

          //PALAS
        this.load.image('Pala1', 'assets/Pala3.png');
        this.load.image('Pala2', 'assets/Pala3.png');
        this.load.image('PalaG1', 'assets/Pala4.png');
        this.load.image('PalaG2', 'assets/Pala5.png');
        this.load.image('PalaP1', 'assets/Pala2.png');
        this.load.image('PalaP2', 'assets/Pala1.png');
        this.load.image('PalaP3', 'assets/Pala0.png');

          //BLOQUES
        this.load.spritesheet('Bloques', 'assets/Bloques.png', 32, 8);

          //POWERUPS
        this.load.spritesheet('PowerUps', 'assets/powerups.png', 22, 15 );
       
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        
    },
    
    create:function(){
        this.state.start('Menu');
    },


}