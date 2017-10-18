var game= new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload,create:create,update:update});
var bloques; //Grupo de bloques para dibujar
var bolas;   //Grupo para las bolas
var bola_1;  //Bola del Jugador 1
var bola_2;  //Bola del Jugador 2

//Funcion de precarga de los sprites y objetos
function preload(){
    game.load.image('Bola', 'assets/Bola.png');
}

//Funcion de creacion de las variables a usar, grupos etc
function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    //Creamos el grupo "balls" y activamos su física
    bolas = game.add.group();
    bolas.enableBody = true;
    
    //Creamos las bolas de los 2 jugadores
    bola_1 = bolas.create(0, game.world.height - 64, 'Bola');
    bola_1.scale.setTo(0.06, 0.06);
    bola_2 = bolas.create(50, game.world.height - 64, 'Bola');
    bola_2.scale.setTo(0.06, 0.06);
 

}

//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update(){


}