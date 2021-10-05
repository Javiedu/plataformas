var suelo;
var tiempo = 0;
var temp = true
var t_barrera = false;
var cambio = 38;
var ganado = false;



var mainState={

preload:function(){
    game.load.image('fondo', 'assets/fondo1.png')
    game.load.image('jugador', 'assets/40x40b.png')
    game.load.image('meta', 'assets/meta.png')
    game.load.image('b_lateral', 'assets/borde_lateral.png')
    game.load.image('b_inferior', 'assets/borde_inferior.png')
    game.load.image('barrera_v', 'assets/barrera_v.png')
    game.load.image('barrera_h', 'assets/barrera_h.png')
    game.load.image('plat_h2b', 'assets/80x40b.png')
    game.load.image('plat_h3b', 'assets/120x40b.png')
    game.load.image('plat_h5b', 'assets/200x40b.png')
    game.load.image('plat_h6b', 'assets/240x40b.png')
    game.load.image('plat_v2b', 'assets/40x80b.png')
    game.load.image('plat_v3b', 'assets/40x120b.png')
    game.load.image('plat_v7b', 'assets/40x280b.png')
    game.load.image('plat_h2r', 'assets/80x40r.png')
    game.load.image('plat_h3r', 'assets/120x40r.png')
    game.load.image('plat_v4r', 'assets/40x160r.png')
    game.load.image('plat_h2t', 'assets/80x40t.png')
    game.load.image('plat_c', 'assets/40x40b.png')
    //game.load.image('plat_h3t', 'assets/120x40t.png')
},	
	
create:function(){
    this.game.world.setBounds(0, 0, 1290, 750);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.image(0, 0, 'fondo')

    this.plat_hor = game.add.group()
    this.plat_ver = game.add.group()
    this.plat_roj = game.add.group()
    this.plat_temp = game.add.group()
    this.barreras = game.add.group()
    this.barreras_temp = game.add.group()
    this.bordes = game.add.group()


    this.plat_hor.create(240, 640, 'plat_h5b');
    this.plat_hor.create(560, 520, 'plat_h2b');
    this.plat_hor.create(720, 520, 'plat_h2b');
    this.plat_hor.create(880, 440, 'plat_h6b');
    this.plat_hor.create(680, 160, 'plat_h6b');
    this.plat_hor.create(370, 320, 'plat_h3b');
    //this.plat_hor.create(1120, 160, 'plat_c');

    this.plat_ver.create(560, 560, 'plat_v3b');
    this.plat_ver.create(880, 480, 'plat_v2b');
    this.plat_ver.create(1120, 200, 'plat_v7b');

    this.plat_roj.create(640, 520, 'plat_h2r');
    this.plat_roj.create(800, 520, 'plat_h2r');
    this.plat_roj.create(490, 320, 'plat_h3r');
    this.plat_roj.create(250, 320, 'plat_h3r');
    this.plat_roj.create(880, 200, 'plat_v4r');
    this.plat_roj.create(1080, 160, 'plat_h2r');

    this.plat_temp.create(1040, 360, 'plat_h2t')
    this.plat_temp.create(920, 240, 'plat_h2t')

    this.barreras.create(920, 160, 'barrera_v')
    //this.barreras.create(1115, 160, 'barrera_v')
    //this.barreras.create(1115, 200, 'barrera_v')
    this.barreras.create(875, 440, 'barrera_v')
    this.barreras.create(555, 520, 'barrera_v')
    this.barreras.create(440, 640, 'barrera_v')
    this.barreras.create(235, 640, 'barrera_v')
    

    this.barreras.create(450, 360, 'barrera_h')
    this.barreras.create(410, 360, 'barrera_h')
    this.barreras.create(370, 360, 'barrera_h')

    this.barreras_temp.create(1000, 240, 'barrera_v')
    this.barreras_temp.create(1035, 360, 'barrera_v')

    this.barreras_temp.create(1040, 400, 'barrera_h')
    this.barreras_temp.create(1080, 400, 'barrera_h')
    this.barreras_temp.create(920, 280, 'barrera_h')
    this.barreras_temp.create(960, 280, 'barrera_h')

    this.bordes.create(0, 0, 'b_lateral')
    this.bordes.create(1280, 0, 'b_lateral')
    this.bordes.create(0, 740, 'b_inferior')

    //this.plat_temp.create(1000, 160, 'plat_h3t')

    this.meta = game.add.sprite(410, 280, 'meta');
    this.jugador = game.add.sprite(240, 600, 'jugador')

    /* Fisicas Jugador */
    this.jugador.enableBody = true;
    this.game.physics.arcade.enable(this.jugador)
    this.jugador.body.collideWorldBounds = false;
    this.jugador.body.gravity.y = 2000;

    this.game.physics.arcade.enable(this.plat_hor)
    this.plat_hor.setAll('enableBody', true)
    this.plat_hor.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.plat_ver)
    this.plat_ver.setAll('enableBody', true)
    this.plat_ver.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.plat_roj)
    this.plat_roj.setAll('enableBody', true)
    this.plat_roj.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.plat_temp)
    this.plat_temp.setAll('enableBody', true)
    this.plat_temp.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.barreras)
    this.barreras.setAll('enableBody', true)
    this.barreras.setAll('body.immovable', true)
    this.barreras.setAll('alpha', 0);

    this.game.physics.arcade.enable(this.barreras_temp)
    this.barreras_temp.setAll('enableBody', true)
    this.barreras_temp.setAll('body.immovable', true)
    this.barreras_temp.setAll('alpha', 0);

    this.game.physics.arcade.enable(this.bordes)
    this.bordes.setAll('enableBody', true)
    this.bordes.setAll('body.immovable', true)
    this.bordes.setAll('alpha', 0);

    this.game.physics.arcade.enable(this.meta)
    this.metaenableBody = true;
    this.meta.body.immovable = true;
},

update:function(){
    suelo = false;
    t_barrera = false;
    tiempo += 1;
    if(tiempo == 76){ tiempo = 0 }

    if( tiempo == 0 ){ temp = true }
    if( tiempo == cambio && temp == true ){ 
        temp = false;
        cambio = Math.floor((Math.random() * (40 - 25)) + 25);
    }

    this.game.physics.arcade.collide(this.jugador, this.plat_roj, function(jugador, plat_roj){
        jugador.body.x = 240
        jugador.body.y = 600
        jugador.body.velocity.x = 0
        jugador.body.velocity.y = 0
        tiempo = 0;
    })

    this.game.physics.arcade.collide(this.jugador, this.plat_hor, function(jugador) {
        suelo = true
    })
    this.game.physics.arcade.collide(this.jugador, this.plat_ver)
    
    if(temp == true){
        this.plat_temp.setAll('alpha', 1);
        this.game.physics.arcade.collide(this.jugador, this.plat_temp, function(){
        suelo = true
        })
    } else {
        this.plat_temp.setAll('alpha', 0);
    }

    this.game.physics.arcade.overlap(this.jugador, this.barreras, function(){
        t_barrera = true
    })

    if(temp == true){
        this.game.physics.arcade.overlap(this.jugador, this.barreras_temp, function(){
        t_barrera = true
        })
    }

    if( ganado == false ){
        this.game.physics.arcade.overlap(this.jugador, this.meta, function(){
            game.add.text(100, 50, 'Has ganado');
            ganado = true
        })
    }

    this.game.physics.arcade.overlap(this.jugador, this.bordes, function(jugador){
        jugador.body.x = 240
        jugador.body.y = 600
        jugador.body.velocity.x = 0
        jugador.body.velocity.y = 0
        tiempo = 0;
    })
        
    if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && suelo == true && t_barrera == false){
        this.jugador.body.velocity.x = -400;
        this.jugador.body.velocity.y = -800;
    } else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && suelo == true && t_barrera == false){
        this.jugador.body.velocity.x = 400;
        this.jugador.body.velocity.y = -800;
    } else if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !suelo == true){
        this.jugador.body.velocity.x = -200;
    } else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !suelo == true){
        this.jugador.body.velocity.x = 200;
    } else if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT) && suelo == true){
        this.jugador.body.velocity.x = -400;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && suelo == true){
        this.jugador.body.velocity.x = 400;
    } else if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && suelo == true && t_barrera == false){
        this.jugador.body.velocity.y = -800;
    } else if(suelo == true){
        this.jugador.body.velocity.x = 0;
    }
}	
};

var game=new Phaser.Game(1290,750,Phaser.AUTO,'gameDIV');
game.state.add('main', mainState);
game.state.start('main');
