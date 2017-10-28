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
    bloques.physicsBodyType=Phaser.Physics.ARCADE;
    bloques.enableBody=true;
    for (var i=0;i<4;i++){
        for(var j=0;j<10;j++){
            //j*n e i*n es la separacion entre sprites, mientras que los primeros
            //valores son la separacion con el lienzo desde (0,0)
            bloque=bloques.create(30+(j*36),25+(i*16),'Bloques',0+14*i);
            bloque.body.bounce.set(1);
            bloque.body.immovable=true;
        }
    }
    
    

    //PowerUps
    powerups=game.add.group();
    powerups.scale.setTo(1.8,1.8);

    //Grupo "palas"
    palas = game.add.group();
    palas.enableBody = true;
    //palas.scale.setTo(0.5,0.5);
    
    //Creamos las palas de los 2 jugadores
    pala_1 = palas.create(game.world.centerX, game.world.height-128, 'Pala1');
    pala_1.anchor.setTo(0.5,0.5);
    pala_1.scale.setTo(0.5,0.5);
    pala_1.body.immovable = true;

    pala_2 = palas.create(game.world.centerX, game.world.height - 16, 'Pala2');
    pala_2.anchor.setTo(0.5,0.5);
    pala_2.scale.setTo(0.5,0.5);
    pala_2.body.immovable = true;
    
    //Creamos el grupo "balls" y activamos su física
    bolas = game.add.group();
    game.physics.arcade.enable(bolas);
    bolas.enableBody = true;
    

    //Creamos las bolas de los 2 jugadores
    bola_1 = bolas.create(pala_1.x ,pala_1.y-36, 'Bola1');
    bola_1.anchor.setTo(0.5,0.5);
    bola_1.scale.setTo(0.06, 0.06);
    bola_1.checkWorldBounds=true;
    bola_1.body.collideWorldBounds=true;
    bola_1.body.bounce.set(1);

    bola_2 = bolas.create(pala_2.x, pala_2.y - 38, 'Bola2');
    bola_2.anchor.setTo(0.5,0.5);
    bola_2.scale.setTo(0.06, 0.06);
    bola_2.checkWorldBounds=true;
    bola_2.body.collideWorldBounds=true;
    bola_2.body.bounce.set(1);


}


//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update(){
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

    if(bInit){
        bola_1.x=pala_1.x;
        bola_2.x=pala_2.x;
        bola_1.y=pala_1.y-36;
        bola_2.y=pala_2.y-38;

    }else{
        //Colisión entre la barra y el grupo bolas
        colisionBolasPalas = game.physics.arcade.collide(bolas, palas);
        game.physics.arcade.collide(bolas,bloques,bloqueRompe,null,this);
        
    }


    
    /*
    if (colisionBolasPalas)
    {
        bolas.body.velocity.y = -velocity.y;
    }*/
}

function bloqueRompe(bola,bloque){
    bloque.kill();

}

function lanzarBola () {

    if (bInit)
    {
        bInit = false;
        
        bola_1.body.velocity.x = 90;
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