var suelo;
var tiempo = 0;
var temp = true
var t_barrera = false;
var cambio = 38;
var ganado = false;
var intentos = 0;

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
    game.load.image('plat_h4b', 'assets/160x40b.png')
    game.load.image('plat_h5b', 'assets/200x40b.png')
    game.load.image('plat_h6b', 'assets/240x40b.png')
    game.load.image('plat_h11b', 'assets/440x40b.png')
    game.load.image('plat_h12b', 'assets/480x40b.png')
    game.load.image('plat_v2b', 'assets/40x80b.png')
    game.load.image('plat_v3b', 'assets/40x120b.png')
    game.load.image('plat_v4b', 'assets/40x160b.png')
    game.load.image('plat_v7b', 'assets/40x280b.png')
    game.load.image('plat_h2r', 'assets/80x40r.png')
    game.load.image('plat_h3r', 'assets/120x40r.png')
    game.load.image('plat_h4r', 'assets/160x40r.png')
    game.load.image('plat_h5r', 'assets/200x40r.png')
    game.load.image('plat_v4r', 'assets/40x160r.png')
    game.load.image('plat_v5r', 'assets/40x200r.png')
    game.load.image('plat_v9r', 'assets/40x360r.png')
    game.load.image('plat_v12r', 'assets/40x480r.png')
    game.load.image('plat_h2t', 'assets/80x40t.png')
    game.load.image('plat_ct', 'assets/40x40t.png')
    game.load.image('plat_c', 'assets/40x40b.png')
    //game.load.image('plat_h3t', 'assets/120x40t.png')
    game.load.image('plat_h7a', 'assets/280x40a.png')
    game.load.image('plat_h5a', 'assets/200x40a.png')
    game.load.image('plat_ca', 'assets/40x40a.png')
},	
	
create:function(){
    this.game.world.setBounds(0, 0, 1290, 750);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.image(0, 0, 'fondo')

    this.plat_hor = game.add.group()
    this.plat_ver = game.add.group()
    this.plat_roj = game.add.group()
    this.plat_azul = game.add.group()
    this.plat_temp = game.add.group()
    this.barreras = game.add.group()
    this.barreras_temp = game.add.group()
    this.bordes = game.add.group()


    this.plat_hor.create(960, 640, 'plat_h5b')
    this.plat_hor.create(920, 40, 'plat_h2b')
    this.plat_hor.create(800, 160, 'plat_h4b')
    this.plat_hor.create(680, 40, 'plat_h4b')
    this.plat_hor.create(560, 160, 'plat_h4b')
    this.plat_hor.create(400, 160, 'plat_h2b')
    this.plat_hor.create(120, 40, 'plat_h12b')
    this.plat_hor.create(40, 640, 'plat_h11b')
    this.plat_hor.create(680, 560, 'plat_h5b')

    this.plat_ver.create(1160, 40, 'plat_v4b')
    this.plat_ver.create(560, 600, 'plat_v2b')

    this.plat_roj.create(920, 200, 'plat_v12r')
    this.plat_roj.create(1160, 200, 'plat_v12r')
    this.plat_roj.create(1000, 40, 'plat_h4r')
    this.plat_roj.create(840, 40, 'plat_h2r')
    this.plat_roj.create(720, 160, 'plat_h2r')
    this.plat_roj.create(600, 40, 'plat_h2r')
    this.plat_roj.create(480, 160, 'plat_h2r')
    this.plat_roj.create(120, 200, 'plat_v9r')
    this.plat_roj.create(280, 520, 'plat_h5r')
    this.plat_roj.create(240, 360, 'plat_v5r')

    this.plat_azul.create(120, 160, 'plat_h7a')
    this.plat_azul.create(560, 560, 'plat_ca')
    this.plat_azul.create(480, 440, 'plat_h5a')

    this.plat_temp.create(960, 520, 'plat_h2t')
    this.plat_temp.create(1120, 520, 'plat_ct')
    this.plat_temp.create(1080, 400, 'plat_h2t')
    this.plat_temp.create(960, 400, 'plat_ct')
    this.plat_temp.create(960, 280, 'plat_h2t')
    this.plat_temp.create(1120, 280, 'plat_ct')
    this.plat_temp.create(1080, 160, 'plat_h2t')
    this.plat_temp.create(960, 160, 'plat_ct')

    this.plat_temp.create(320, 440, 'plat_ct')

    this.barreras_temp.create(960, 560, 'barrera_h')
    this.barreras_temp.create(1000, 560, 'barrera_h')
    this.barreras_temp.create(1120, 560, 'barrera_h')
    this.barreras_temp.create(960, 440, 'barrera_h')
    this.barreras_temp.create(1080, 440, 'barrera_h')
    this.barreras_temp.create(1120, 440, 'barrera_h')
    this.barreras_temp.create(960, 320, 'barrera_h')
    this.barreras_temp.create(1000, 320, 'barrera_h')
    this.barreras_temp.create(1120, 320, 'barrera_h')
    this.barreras_temp.create(960, 200, 'barrera_h')
    this.barreras_temp.create(1080, 200, 'barrera_h')
    this.barreras_temp.create(1120, 200, 'barrera_h')
    this.barreras_temp.create(1040, 520, 'barrera_v')
    this.barreras_temp.create(1115, 520, 'barrera_v')
    this.barreras_temp.create(1000, 400, 'barrera_v')
    this.barreras_temp.create(1075, 400, 'barrera_v')
    this.barreras_temp.create(1040, 280, 'barrera_v')
    this.barreras_temp.create(1115, 280, 'barrera_v')
    this.barreras_temp.create(1000, 160, 'barrera_v')
    this.barreras_temp.create(1075, 160, 'barrera_v')


    
    this.bordes.create(0, 0, 'b_lateral')
    this.bordes.create(1280, 0, 'b_lateral')
    this.bordes.create(0, 740, 'b_inferior')

    this.meta = game.add.sprite(180, 400, 'meta');
    this.jugador = game.add.sprite(320, 600, 'jugador')

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

    this.game.physics.arcade.enable(this.plat_azul)
    this.plat_azul.setAll('enableBody', true)
    this.plat_azul.setAll('body.immovable', true)

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
    cambio = 200;
    suelo = false;
    t_barrera = false;
    tiempo += 1;

    temp = true;
    /*
    if(tiempo == 250){ tiempo = 0 }
    
    if( tiempo == 0 ){ temp = true }
    if( tiempo == cambio && temp == true ){ 
        temp = false;
        //cambio = Math.floor((Math.random() * (40 - 25)) + 25);
    }
    */

    this.game.physics.arcade.collide(this.jugador, this.plat_roj, function(jugador, plat_roj){
        jugador.body.x = 320
        jugador.body.y = 400
        jugador.body.velocity.x = 0
        jugador.body.velocity.y = 0
        tiempo = 0;
        intentos += 1
    })

    this.game.physics.arcade.collide(this.jugador, this.plat_hor, function(jugador) {
        suelo = true
    })
    this.game.physics.arcade.collide(this.jugador, this.plat_ver)
    
    this.game.physics.arcade.collide(this.jugador, this.plat_azul)

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
            game.add.text(1000, 50, intentos + ' Intentos');
            ganado = true
        })
    }

    this.game.physics.arcade.overlap(this.jugador, this.bordes, function(jugador){
        jugador.body.x = 400
        jugador.body.y = 540
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
        this.jugador.body.velocity.x = 0;
    } else if(suelo == true){
        this.jugador.body.velocity.x = 0;
    }
}	
};

var game=new Phaser.Game(1290,750,Phaser.AUTO,'gameDIV');
game.state.add('main', mainState);
game.state.start('main');
