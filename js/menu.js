var mainState={

preload:function(){
    game.load.image('logo', 'assets/logo.png')
    game.load.image('fondo', 'assets/fondo1.png')
    game.load.image('n1', 'assets/n1.png')
    game.load.image('n2', 'assets/n2.png')
},	
	
create:function(){
    game.add.image(0, 0, 'fondo')
    game.add.image(650, -150, 'logo')
    this.botonUno = game.add.sprite(100, 570, 'n1')
    this.botonDos = game.add.sprite(100, 650, 'n2')
    
    this.botonUno.setInteractive()
    this.botonDos.setInteractive()

    this.botonUno.inputEnabled = true;
    this.botonDos.inputEnabled = true;

    this.botonUno.events.onInputDown.add(function(){console.log('Boton 1')}, this);
    this.botonDos.events.onInputDown.add(function(){console.log('Boton 2')}, this);

},

update:function(){
    
}
};

var game=new Phaser.Game(1290,750,Phaser.AUTO,'gameDIV');
game.state.add('main', mainState);
game.state.start('main');
