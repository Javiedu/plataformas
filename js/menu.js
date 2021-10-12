var mainState={

preload:function(){
    game.load.image('logo', 'assets/logo.png')
    game.load.image('fondo', 'assets/fondo1.png')
},	
	
create:function(){
    game.add.image(0, 0, 'fondo')
    game.add.image(650, -150, 'logo')
},

update:function(){
    
}
};

var game=new Phaser.Game(1290,750,Phaser.AUTO,'gameDIV');
game.state.add('main', mainState);
game.state.start('main');
