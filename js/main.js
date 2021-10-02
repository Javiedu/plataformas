var plataformas

var mainState={

preload:function(){
    game.load.image('fondo', 'assets/fondo1.png')
    game.load.image('jugador', 'assets/personaje.png')
    game.load.image('meta', 'assets/meta.png')
    game.load.image('plat_h2b', 'assets/80x40b.png')
    game.load.image('plat_h3b', 'assets/120x40b.png')
    game.load.image('plat_h5b', 'assets/200x40b.png')
    game.load.image('plat_h6b', 'assets/240x40b.png')
    game.load.image('plat_v2b', 'assets/40x80b.png')
    game.load.image('plat_v3b', 'assets/40x120b.png')
    game.load.image('plat_v8b', 'assets/40x320b.png')
    game.load.image('plat_h2r', 'assets/80x40r.png')
    game.load.image('plat_h3r', 'assets/120x40r.png')
    game.load.image('plat_v4r', 'assets/40x160r.png')
},	
	
create:function(){
    game.add.image(0, 0, 'fondo')

    this.plat_hor = game.add.group()
    this.plat_ver = game.add.group()
    this.plat_roj = game.add.group()


    this.plat_hor.create(240, 640, 'plat_h5b');
    this.plat_hor.create(560, 520, 'plat_h2b');
    this.plat_hor.create(720, 520, 'plat_h2b');
    this.plat_hor.create(880, 440, 'plat_h6b');
    this.plat_hor.create(680, 160, 'plat_h6b');
    this.plat_hor.create(320, 320, 'plat_h3b');

    this.plat_ver.create(560, 560, 'plat_v3b');
    this.plat_ver.create(880, 480, 'plat_v2b');
    this.plat_ver.create(1120, 160, 'plat_v8b');

    this.plat_roj.create(640, 520, 'plat_h2r');
    this.plat_roj.create(800, 520, 'plat_h2r');
    this.plat_roj.create(440, 320, 'plat_h3r');
    this.plat_roj.create(200, 320, 'plat_h3r');
    this.plat_roj.create(880, 200, 'plat_v4r');

    this.meta = game.add.sprite(360, 280, 'meta');
    this.jugador = game.add.sprite(257,526, 'jugador')



},

update:function(){
}	
};

var game=new Phaser.Game(1290,750,Phaser.AUTO,'gameDIV');
game.state.add('main', mainState);
game.state.start('main');
