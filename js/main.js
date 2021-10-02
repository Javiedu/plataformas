var plataformas

var mainState={

preload:function(){
},	
	
create:function(){
},

update:function(){
}	
};

var game=new Phaser.Game(800,300,Phaser.AUTO,'gameDIV');
game.state.add('main', mainState);
game.state.start('main');
