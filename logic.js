var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var bloques;    //Grupo de bloques para dibujar
var bloque;     //Cada bloque que se dibuja
var bolas;      //Grupo para las bolas
var bola_1;     //Bola del Jugador 1
var bola_2;     //Bola del Jugador 2
var barra_1;    //Barra del Jugador 1
var barra_2;    //Barra del Jugador 2
var controles; //Controles para mover la barra del jugador

//Funcion de precarga de los sprites y objetos
function preload() {
    game.load.image('Bola', 'assets/Bola.png');
    game.load.spritesheet('Bloques', 'assets/Bloques.png', 32, 8);
}

//Funcion de creacion de las variables a usar, grupos etc
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    controles = game.input.keyboard.createCursorKeys();

    //bloques
    bloques=game.add.group();
    var i;
    var j;
    for ( i = 0; i < 3; i++) {
        for ( j = 0; j < 10; j++) {
            bloque=bloques.create(i+16,j+16,'Bloques');
            bloques.scale.setTo(2, 2);
            bloques.frame = 0;
        }
    }


    //Creamos el grupo "balls" y activamos su física
    bolas = game.add.group();
    bolas.enableBody = true;


    //Creamos las bolas de los 2 jugadores
    bola_1 = bolas.create(game.world.width - 256, 26, 'Bola');
    bola_1.scale.setTo(0.06, 0.06);
    bola_1.body.gravity.y = 100;
    bola_2 = bolas.create(50, game.world.height - 64, 'Bola');
    bola_2.scale.setTo(0.06, 0.06);


}

//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update() {

    bola_1.body.velocity.x = 0;

    if (controles.left.isDown) {
        bola_1.body.velocity.x = -100;
    }
    else if (controles.right.isDown) {
        bola_1.body.velocity.x = 100;
    }

}