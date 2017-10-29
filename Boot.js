var Game = {};

Game.Boot = function (game){
    
};

Game.Boot.prototype = {
    init:function(){
        this.input.maxPinters = 1;
        this.stage.disableVisibilityChange = true;

    },

    preload:function(){
        
    },

    create: function(){
        this.state.start('Preloader');
    }
}