var fondoNegro;
var texto;
var botonNombre;
var puntosRe;
var nombre;
var texto;
var flechaDer;
var count;
var style = { font: "28px Press Start 2P", fill: "#fff", tabs: [150, 150, 200] };
var textoEntero;
var text;
var styleText;
var t;

Game.IntroducirNombre = function (game) {
    this.Nivel = null;
    this.fondo = null;
    this.textoPuntuacion = null;
    this.bloques = null;
};

//Función para crear una puntuacion
function crearPuntos(puntuacion, callback) {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8080/puntuacion',
        data: JSON.stringify(puntuacion),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (puntuacion) {
        console.log("Puntos creados: " + JSON.stringify(puntuacion));
        callback(puntuacion);
    })

}
Game.IntroducirNombre.prototype = {
    init: function (puntos) {
        puntosRe = puntos;
        texto=[3];
        count=0;
    },
    create: function (game) {
        fondoNegro = this.add.sprite(0, 0, 'fondoNegro');
        flechaDer=this.input.keyboard.createCursorKeys();

        text = "Introduce tus iniciales",
        styleText = { font: "65px Arial", fill: "#ff0044", align: "center" },
        t = game.add.text(game.world.centerX-300, 100, text, styleText),

        //Coge las fuentes de google
        WebFontConfig = {
            active: function () { this.time.events.add(Phaser.Timer.SECOND, createText, this); },

            google: {
                families: ['Press Start 2P']
            },

      
        };

        count = 0;
        for (var i = 0; i < 3; i++) {
            texto[i] = this.add.text(this.world.centerX-40 + i * 40, this.world.centerY, "_", style);
        }

        //texto.anchor.setTo(0.5, 0.5);
        //nombre=prompt("Introduce el nombre");

        this.crearBoton(game, 600, 600, 300, 100,
            function () {
            });

    },

    update: function () {
        flechaDer.right.onDown.add(cuentaS,this);
        flechaDer.left.onDown.add(cuentaR,this);
        if(count>=3){
            count=0;
        }
        if(count<0){
            count=2;
        }
        this.input.keyboard.addCallbacks(this, null, null, updateText);
        //Phaser.Keyboard.ENTER.onDown.add(enviar,this);

    },
    
    crearBoton: function (game, x, y, w, h, callback) {
        botonNombre = game.add.button(x, y, 'enter');
        botonNombre.onInputUp.add(arriba, this);
        function arriba() {
            textoEntero=texto[0].text+texto[1].text+texto[2].text;
            var puntuacion = {
                score: puntosRe,
                who: textoEntero
            }
            crearPuntos(puntuacion, function () {
                game.state.start('Leaderboard', true, false, true);
            });


        }
        boton2.scale.setTo(0.45, 0.45);
    }

}

function cuentaS(){
    count++;
}
function cuentaR(){
    count--;
}
function enviar(){

    textoEntero=texto[0].text+texto[1].text+texto[2].text;
    var puntuacion = {
        score: puntosRe,
        who: textoEntero
    }
    crearPuntos(puntuacion, function () {
        game.state.start('Leaderboard', true, false, true);
    });

}
function updateText(char){   
    
    var code = (char.keyCode ? char.keyCode : char.which);
    

       texto[count].setText(char);
       
        
    
    }



