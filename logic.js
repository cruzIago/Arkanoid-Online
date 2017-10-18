var game= new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload,create:create,update:update});
var bloques; //Grupo de bloques para dibujar

//Funcion de precarga de los sprites y objetos
function preload(){
    game.load.image('Bloques', 'assets/Bloques.png');
    game.load.image('Ball', 'assets/Ball.png');
}

//Funcion de creacion de las variables a usar, grupos etc
function create(){


}

//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update(){


}