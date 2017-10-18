var game= new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload,create:create,update:update});
var bloques; //Grupo de bloques para dibujar

//Funcion de precarga de los sprites y objetos
function preload(){
    
    game.load.image('Ball', 'assets/Ball.png');
    game.load.spritesheet('bloques', 'assets/Bloques.png', 32, 8);
}

//Funcion de creacion de las variables a usar, grupos etc
function create(){

exBlock = game.add.sprite(32, game.world.height - 150, 'bloques');
game.add.sprite(0, 0, 'Ball');
}

//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update(){


}