var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var bloques;    //Grupo de bloques para dibujar
var bloque;     //Cada bloque que se dibuja
var bolas;      //Grupo para las bolas
var bola_1;     //Bola del Jugador 1
var bola_2;     //Bola del Jugador 2
var palas;      //Grupo para las palas
var pala_1;     //Barra del Jugador 1
var pala_2;    //Barra del Jugador 2
var controles;  //Controles para mover la barra del jugador
var colisionBolasPalas;
var colisionBolasBloques;
var bInit= true;

//Funcion de precarga de los sprites y objetos
function preload(){
    game.load.image('Bola1', 'assets/BolaAzul.png');
    game.load.image('Bola2', 'assets/BolaRoja.png');
    game.load.image('Pala1', 'assets/Pala3.png');
    game.load.image('Pala2', 'assets/Pala3.png');
    game.load.spritesheet('Bloques', 'assets/Bloques.png', 32, 8);
    game.load.spritesheet('PowerUps', 'assets/powerups.png', 22, 11);
}

//Funcion de creacion de las variables a usar, grupos etc
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    controles = game.input.keyboard.createCursorKeys();


    //bloques
    bloques=game.add.group();
    bloques.scale.setTo(1.8,1.8);
    bloques.createMultiple(12,'Bloques',[0,14,28,42],true);
    bloques.align(12,-1,35,14);   
    //Creamos el grid de bloques tal que align(sprites por fila,veces que repite (-1 los sprites que se declaren), separacion en x, separacion en y)
    bloques.x=16;
    bloques.y=24;

    //PowerUps
    powerups=game.add.group();
    powerups.scale.setTo(1.8,1.8);
    

    //Creamos el grupo "balls" y activamos su física
    bolas = game.add.group();
    game.physics.arcade.enable(bolas);
    bolas.enableBody = true;

    //Creamos las bolas de los 2 jugadores
    bola_1 = bolas.create(50, 26, 'Bola1');
    bola_1.scale.setTo(0.06, 0.06);
    bola_1.body.gravity.y = 100;

    bola_2 = bolas.create(50, game.world.height - 64, 'Bola2');
    bola_2.scale.setTo(0.06, 0.06);

    //Grupo "palas"
    palas = game.add.group();
    palas.enableBody = true;

    //Creamos las palas de los 2 jugadores
    pala_1 = palas.create(0, game.world.height - 64, 'Pala1');
    pala_1.body.immovable = true;
    pala_2 = palas.create(100, game.world.height - 64, 'Pala2');
    pala_2.body.immovable = true;


}

//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update(){
    
    //Colisión entre la barra y el grupo bolas
    colisionBolasPalas = game.physics.arcade.collide(bolas, palas);

    if(bInit){
        bola_1.body.x=pala_1.x;
        bola_2.body.x=pala_2.x;

    }

        //Movimiento Jugador 1
    pala_1.body.velocity.x=0;
    
    if(controles.left.isDown){
        pala_1.body.velocity.x=-100;
    }
    else if(controles.right.isDown){
        pala_1.body.velocity.x=100;

    }else if(controles.up.isDown){
        lanzarBola();
    }
        //Movimiento Jugador 2
    pala_2.body.velocity.x=0;

    
    if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
        pala_2.body.velocity.x=-100;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
        pala_2.body.velocity.x=100;
    }else if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
        lanzarBola();
    }
    
    /*
    if (colisionBolasPalas)
    {
        bolas.body.velocity.y = -velocity.y;
    }*/
}

function lanzarBola () {

    if (bInit)
    {
        bInit = false;
        
        bola_1.body.velocity.x = -90;
        bola_1.body.velocity.y = -250;

        bola_2.body.velocity.x = 90;
        bola_2.body.velocity.y = -250;
        
    }

}

function goPU(x,y){
    //Hay una probabilidad de 10% de que salga
    var push = Math.floor((Math.random() * 10) + 1);
    if (push<2){
        powerup = powerups.create(x, y, 'PowerUps');
        powerup.body.gravity.y = 70;
        powerup.animations.add('girar',[0,1,2,3,4,5,6], 10, true);
        //powerup.onOutOfBounds.add(powerup.kill(), this);

    }

}