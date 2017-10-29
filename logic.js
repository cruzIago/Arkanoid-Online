var game = new Phaser.Game(800, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var bloques;    //Grupo de bloques para dibujar
var bloque;     //Cada bloque que se dibuja
var bolas;      //Grupo para las bolas
var bola_1;     //Bola del Jugador 1
var bola_2;     //Bola del Jugador 2
var palas;      //Grupo para las palas
var pala_1;     //Barra del Jugador 1
var pala_2;    //Barra del Jugador 2
var controles;  //Controles para mover la barra del jugador
var vel = 150;        //Velocidad de las palas
var colisionBolasPalas;
var colisionBolasBloques;
var colisionPUPalas;
var bInit= true;
var powerups;
var timer;
var textoPuntuacion;
var puntuacion = 0;
var bolasperdidas = 0;


//Funcion de precarga de los sprites y objetos
function preload(){
    game.load.image('Bola1', 'assets/BolaAzul.png');
    game.load.image('Bola2', 'assets/BolaRoja.png');
    game.load.image('Pala1', 'assets/Pala3.png');
    game.load.image('Pala2', 'assets/Pala3.png');
    game.load.image('PalaG1', 'assets/Pala4.png');
    game.load.image('PalaG2', 'assets/Pala5.png');
    game.load.image('PalaP1', 'assets/Pala2.png');
    game.load.image('PalaP2', 'assets/Pala1.png');
    game.load.image('PalaP3', 'assets/Pala0.png');
    game.load.spritesheet('Bloques', 'assets/Bloques.png', 32, 8);
    game.load.spritesheet('PowerUps', 'assets/powerups.png', 22, 15 );
}

//Funcion de creacion de las variables a usar, grupos etc
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
    controles = game.input.keyboard.createCursorKeys();

    //bloques
    bloques=game.add.group();
    bloques.enableBody=true;
    bloques.physicsBodyType=Phaser.Physics.ARCADE;
    
    for (var i=0;i<4;i++){
        for(var j=0;j<10;j++){
            //j*n e i*n es la separacion entre sprites, mientras que los primeros
            //valores son la separacion con el lienzo desde (0,0)
            bloque=bloques.create(70+(j*66),45+(i*46),'Bloques',0+14*i);
            bloque.body.bounce.set(1);
            bloque.body.immovable=true;
            bloque.scale.setTo(1.9,2.5);
        }
    }
    
    

    //PowerUps
    powerups=game.add.group();
    powerups.enableBody = true;
    powerups.scale.setTo(1.8,1.8);
    powerups.physicsBodyType=Phaser.Physics.ARCADE;

    //Grupo "palas"
    palas = game.add.group();
    palas.enableBody = true;
    
    //palas.scale.setTo(0.5,0.5);
    
    //Creamos las palas de los 2 jugadores
    pala_1 = palas.create(game.world.centerX, game.world.height-128, 'Pala1');
    pala_1.anchor.setTo(0.5,0.5);
    pala_1.scale.setTo(0.3,0.3);
    pala_1.body.collideWorldBounds=true;
    pala_1.body.immovable = true;

    pala_2 = palas.create(game.world.centerX, game.world.height - 16, 'Pala2');
    pala_2.anchor.setTo(0.5,0.5);
    pala_2.scale.setTo(0.3,0.3);
    pala_2.body.collideWorldBounds=true;
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
    bola_2.body.collideWorldBounds = true; 
    bola_2.body.bounce.set(1);
    bola_2.checkWorldBounds=true;
    bola_2.body.collideWorldBounds=true;
    bola_2.body.bounce.set(1);

    //Creamos un temporizador
    timer = game.time.create(false);

    //Evento para cuando la bola se pierda
    bola_1.events.onOutOfBounds.add(matarj1, this);
    bola_2.events.onOutOfBounds.add(matarj2, this);


    //Añadimos el resultado a mostrar, compartido por ambos jugadores
    textoPuntuacion=game.add.text(16,16,"puntos: 0",{ font: "18px Calibri", fill: "#ffffff", align: "left" });
}


//Función de actualización de los sistemas de juego (movimientos, fisicas, etc)
function update(){

    //Movimiento Jugador 1
    pala_1.body.velocity.x=0;
    
    if(controles.left.isDown){
        pala_1.body.velocity.x=-vel;
    }
    else if(controles.right.isDown){
        pala_1.body.velocity.x=vel;

    }else if(controles.up.isDown){
        lanzarBola();
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
        lanzarBola();
    }
    if(bInit){
        bola_1.x=pala_1.x;
        bola_2.x=pala_2.x;
        bola_1.y=pala_1.y-36;
        bola_2.y=pala_2.y-38;

    }else{
        //Colisión entre la barra y el grupo bolas
        game.physics.arcade.collide(bolas, palas,palaRebote,null,this);
        game.physics.arcade.collide(bolas,bloques,bloqueRompe,null,this);
        colisionPUPalas = game.physics.arcade.collide(powerups,palas,activarPU,null,this);
        
    }
    
    //Movimiento Jugador 2
    pala_2.body.velocity.x=0;

    
    if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
        pala_2.body.velocity.x=-vel;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
        pala_2.body.velocity.x=vel;
    } 
    
    
}
function palaRebote(bola,pala){
    var dif;

    if(bola.x>pala.x){
        dif=bola.x-pala.x;
        bola.body.velocity.x=(6*dif);

    }else if(bola.x<pala.x){
        dif=pala.x-bola.x;
        bola.body.velocity.x=(-6*dif);
    }
}

function bloqueRompe(bola,bloque){
    bloque.kill();
    goPU(bloque.x,bloque.y);
    
    puntuacion +=10;
    textoPuntuacion.text='puntos: '+puntuacion;
    if (puntuacion==400){   //Si no quedan bloques se para el juego y has ganado
        vel = 0;
        bola_1.body.velocity.x = 0;
        bola_1.body.velocity.y = 0;

        bola_2.body.velocity.x = 0;
        bola_2.body.velocity.y = 0;

        //FALTA AÑADIR UN TEXTO DE HAS GANADO Y SALIR DE LA PARTIDA A LOS 2 SEGUNDOS
    }

}

//Función que lanza un power up con una probabilidad de 30%
function goPU(x,y){
    //Hay una probabilidad de 10% de que salga
    var push = Math.floor((Math.random() * 10) + 1);
    if (push<6){
        powerup = powerups.create(x, y, 'PowerUps');
        powerup.body.gravity.y = 70;
        var p = Math.floor((Math.random() * 4) + 1);
        powerup.tipo = p;
        p*=7;
        powerup.animations.add('girar',[p,p+1,p+2,p+3,p+4,p+5,p+6], 10, true);
        powerup.animations.play('girar');
        //powerup.onOutOfBounds.add(powerup.kill(), this);

    }
}
function activarPU(powerup,palas){
    switch(powerup.tipo) {
        case 1:
            vel += 50;
            timer.add(20000, contadorVel, this);
            timer.start();
            break;
        case 2:
            vel -= 50;
            timer.add(20000, contadorVel, this);
            timer.start();
            break;
        case 3:
            var p = Math.floor((Math.random() * 3) + 1);
            palas.loadTexture('PalaP'+p+'');
            break;
        case 4:
            vel += 100;
            var g = Math.floor((Math.random() * 2) + 1);
            palas.loadTexture('PalaG'+g+'');
            break;
        
    }
    powerup.kill();
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
function contadorVel(){
    vel = 150;
}
function matarj1() {
    pala_1.kill();
    bolasperdidas+=1;
    if (bolasperdidas==2){  //Cuando se han perdido las 2 bolas se acaba la partida
        gameover();
    }
}
function matarj2() {
    pala_2.kill();
    bolasperdidas+=1;
    if (bolasperdidas==2){  //Cuando se han perdido las 2 bolas se acaba la partida
        gameover();
    }
}


function gameover(){
    vel = 0;
    //FALTA TEXTO DE HAS PERDIDO Y SALIR DE LA PARTIDA
}