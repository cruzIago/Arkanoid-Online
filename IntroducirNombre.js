var fondoNegro;
var texto;
var botonNombre;
var letra1;
var letra2;
var letra3;
var texto;
var t;
var ultimaTecla = new Phaser.Keyboard (Game);
var ahora=false;

Game.IntroducirNombre = function (game) {
    this.Nivel=null;
    this.fondo = null;
    this.textoPuntuacion=null;
    this.bloques=null;
};

Game.IntroducirNombre.prototype={
    create: function (game) {
        fondoNegro = this.add.sprite(0, 0, 'fondoNegro');
        
        ultimaTecla= this.input.keyboard.enabled=true;

        t = game.add.text(16, 16, " ", {fontSize: '32px', fill: '#000', color: 'white'});

        this.crearBoton(game, game.world.centerX-170,600,300,100, 
            function(){
 
        });
        
    },

    update: function(game){
        ultimaTecla=this.input.keyboard.lastChar;
        //ultimaTecla.toString();

        this.actualizarTecla(game,ultimaTecla,
            function(){
        });
    },
    
    actualizarTecla: function(game, teclaAct, callback){
        ahora==true;
        if (ahora!=false){
            t.text= " "+teclaAct;
        }
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