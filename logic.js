var game= new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload,create:create,update:update});
var bloques;    //Grupo de bloques para dibujar
var bolas;      //Grupo para las bolas
var bola_1;     //Bola del Jugador 1
var bola_2;     //Bola del Jugador 2
var pala_1;     //Barra del Jugador 1
var pala2_2;    //Barra del Jugador 2
var controles;  //Controles para mover la barra del jugador
var colisionBolasPalas;
var colisionBolasBloques;
var bInit;

//Funcion de precarga de los sprites y objetos
function preload(){
    game.load.image('Bola', 'assets/Bola.png');
    game.load.spritesheet('Bloques', 'assets/Bloques.png', 32, 8);
}

//Funcion de creacion de las variables a usar, grupos etc
function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    controles=game.input.keyboard.createCursorKeys();

    //Grupo "bloques"
    bloques = game.add.sprite(32, game.world.height - 150, 'Bloques');
    bloques.scale.setTo(2, 2);
    bloques.frame= 0;

    //Grupo "palas"
    palas = game.add.group();
    palas.enableBody = true;

    //Grupo "bolas"
    bolas = game.add.group();
    bolas.enableBody = true;
   
    //Creamos las palas de los 2 jugadores
    pala_1 = palas.create(0, game.world.height - 64, 'Pala3');
    pala_1.body.immovable = true;
    pala_2 = palas.create(0, game.world.height - 64, 'Pala3');
    pala_2.body.immovable = true;
    
     //Creamos las bolas de los 2 jugadores
    bola_1 = bolas.create(pala_1.x, pala_1.y-15, 'Bola');
    bola_1.scale.setTo(0.06, 0.06);
    bola_2 = bolas.create(pala_2.x, pala_2.y-15, 'Bola');
    bola_2.scale.setTo(0.06, 0.06);

    //Colisión entre la barra y el grupo bolas
    colisionBolasPalas = game.physics.arcade.collide(bolas, palas);

}

//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update(){
    //bloques.x=game.input.x;
    /*
        //Movimiento Jugador 1
    pala_1.body.velocity.x=0;
    
    if(controles.left.isDown){
        pala_1.body.velocity.x=-100;
    }
    else if(controles.right.isDown){
        pala_1.body.velocity.x=100;
    }
        //Movimiento Jugador 2
    pala_2.body.velocity.x=0;
    
    if(controles.a.isDown){
        pala_2.body.velocity.x=-100;
    }
    else if(controles.d.isDown){
        pala_2.body.velocity.x=100;
    }
    
    */
    if (colisionBolasPalas)
    {
        bolas.body.velocity.y = -velocity.y;
    }
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