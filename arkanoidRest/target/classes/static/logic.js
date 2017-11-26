//Funcion de carga de puntuaciones.
function loadScores(callback) {
    $.ajax({
        url: 'http://localhost:8080/puntos'
    }).done(function (puntuacion) {
        console.log('Items loaded: ' + JSON.stringify(puntuacion));
        callback(puntuacion);
    })
}

//Función de creación de puntuaciones
function crearPuntos(puntuacion,callback){
    $.ajax({
        method:"POST",
        url:'http://localhost:8080/puntos',
        data:JSON.stringify(puntuacion),
        processData:false,
        headers:{
            "Content-Type":"application/json"
        }
    }).done(function(puntuacion){
        console.log("Puntos creados: "+JSON.stringify(puntuacion));
        callback(puntuacion);
    })
    
}

//Dummy para prueba en un HTML de los post y get
function showScores(puntuacion){
    $('#muestra').append('<div id="pnt-'+puntuacion.id+'">'+puntuacion.score+' - '+puntuacion.who+'</div>');
    
}

//Cambiarlo para adecuarse a Phaser
$(document).ready(function(){
    
   loadScores(function (puntos) {
        for (var i = 0; i < puntos.length; i++) {
            showScores(puntos[i]);
        }
    });
    var texto1=$('#puntuacion');
    var texto2=$('#nombre');
    
    $("#agregar").click(function(){
        
        var value=texto1.val();
        var value2=texto2.val();
        texto1.val('');
        texto2.val('');
       var puntuacion={
           score:value,
           who:value2
       }
       
        
       crearPuntos(puntuacion ,function(puntoConId){
          
          showScores(puntoConId); 
           
       });
        
    });
});