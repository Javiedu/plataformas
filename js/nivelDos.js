var suelo;
var tiempo = 0;
var temp = true
var colisionBarrera = false;
var cambio = 38;
var ganado = false;
var intentos = 0;
var colisionAzul;

var escenaDos={

preload:function(){
    game.load.image('fondo', 'assets/fondo1.png')
    game.load.image('jugador', 'assets/40x40b.png')
    game.load.image('meta', 'assets/meta.png')
    game.load.image('b_lateral', 'assets/borde_lateral.png')
    game.load.image('b_inferior', 'assets/borde_inferior.png')
    game.load.image('barrera_v', 'assets/barrera_v.png')
    game.load.image('barrera_h', 'assets/barrera_h.png')
    game.load.image('plat_h2b', 'assets/80x40b.png')
    game.load.image('plat_h4b', 'assets/160x40b.png')
    game.load.image('plat_h5b', 'assets/200x40b.png')
    game.load.image('plat_h11b', 'assets/440x40b.png')
    game.load.image('plat_h12b', 'assets/480x40b.png')
    game.load.image('plat_v2b', 'assets/40x80b.png')
    game.load.image('plat_v4b', 'assets/40x160b.png')
    game.load.image('plat_h2r', 'assets/80x40r.png')
    game.load.image('plat_h4r', 'assets/160x40r.png')
    game.load.image('plat_h5r', 'assets/200x40r.png')
    game.load.image('plat_v2r', 'assets/40x80r.png')
    game.load.image('plat_v5r', 'assets/40x200r.png')
    game.load.image('plat_v9r', 'assets/40x360r.png')
    game.load.image('plat_v12r', 'assets/40x480r.png')
    game.load.image('plat_h2t', 'assets/80x40t.png')
    game.load.image('plat_ct', 'assets/40x40t.png')
    game.load.image('plat_c', 'assets/40x40b.png')
    game.load.image('plat_h7a', 'assets/280x40a.png')
    game.load.image('plat_h5a', 'assets/200x40a.png')
    game.load.image('plat_ca', 'assets/40x40a.png')
},	
	
create:function(){
    this.game.world.setBounds(0, 0, 1290, 750);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.image(0, 0, 'fondo')

    this.platHor = game.add.group()
    this.platVer = game.add.group()
    this.platRoj = game.add.group()
    this.platAzul = game.add.group()
    this.platTemp = game.add.group()
    this.barreras = game.add.group()
    this.barrerasTemp = game.add.group()
    this.bordes = game.add.group()


    this.platHor.create(960, 640, 'plat_h5b')
    this.platHor.create(920, 40, 'plat_h2b')
    this.platHor.create(800, 160, 'plat_h4b')
    this.platHor.create(680, 40, 'plat_h4b')
    this.platHor.create(560, 160, 'plat_h4b')
    this.platHor.create(400, 160, 'plat_h2b')
    this.platHor.create(120, 40, 'plat_h12b')
    this.platHor.create(40, 640, 'plat_h11b')
    this.platHor.create(680, 560, 'plat_h2b')
    this.platHor.create(760, 440, 'plat_h2b')
    this.platHor.create(360, 440, 'plat_c')

    this.platVer.create(1160, 40, 'plat_v4b')

    this.platRoj.create(920, 200, 'plat_v12r')
    this.platRoj.create(1160, 200, 'plat_v12r')
    this.platRoj.create(1000, 40, 'plat_h4r')
    this.platRoj.create(840, 40, 'plat_h2r')
    this.platRoj.create(720, 160, 'plat_h2r')
    this.platRoj.create(600, 40, 'plat_h2r')
    this.platRoj.create(480, 160, 'plat_h2r')
    this.platRoj.create(120, 200, 'plat_v9r')
    this.platRoj.create(280, 520, 'plat_h5r')
    this.platRoj.create(240, 360, 'plat_v5r')
    this.platRoj.create(560, 600, 'plat_v2r')

    this.platAzul.create(120, 160, 'plat_h7a')
    this.platAzul.create(560, 560, 'plat_ca')
    this.platAzul.create(480, 320, 'plat_h5a')

    this.platTemp.create(960, 520, 'plat_h2t')
    this.platTemp.create(1120, 520, 'plat_ct')
    this.platTemp.create(1080, 400, 'plat_h2t')
    this.platTemp.create(960, 400, 'plat_ct')
    this.platTemp.create(960, 280, 'plat_h2t')
    this.platTemp.create(1120, 280, 'plat_ct')
    this.platTemp.create(1080, 160, 'plat_h2t')

    this.barreras.create(120, 80, 'barrera_h')
    this.barreras.create(160, 80, 'barrera_h')
    this.barreras.create(200, 80, 'barrera_h')
    this.barreras.create(240, 80, 'barrera_h')
    this.barreras.create(280, 80, 'barrera_h')
    this.barreras.create(320, 80, 'barrera_h')
    this.barreras.create(360, 80, 'barrera_h')
    this.barreras.create(400, 80, 'barrera_h')
    this.barreras.create(800, 480, 'barrera_h')
    this.barreras.create(760, 480, 'barrera_h')
    this.barreras.create(680, 600, 'barrera_h')
    this.barreras.create(720, 600, 'barrera_h')
    this.barreras.create(360, 480, 'barrera_h')

    this.barreras.create(760, 560, 'barrera_v')
    this.barreras.create(755, 440, 'barrera_v')
    this.barreras.create(840, 440, 'barrera_v')
    this.barreras.create(400, 440, 'barrera_v')
    this.barreras.create(355, 440, 'barrera_v')
    this.barreras.create(480, 640, 'barrera_v')
    this.barreras.create(35, 640, 'barrera_v')

    this.barrerasTemp.create(960, 560, 'barrera_h')
    this.barrerasTemp.create(1000, 560, 'barrera_h')
    this.barrerasTemp.create(1120, 560, 'barrera_h')
    this.barrerasTemp.create(960, 440, 'barrera_h')
    this.barrerasTemp.create(1080, 440, 'barrera_h')
    this.barrerasTemp.create(1120, 440, 'barrera_h')
    this.barrerasTemp.create(960, 320, 'barrera_h')
    this.barrerasTemp.create(1000, 320, 'barrera_h')
    this.barrerasTemp.create(1120, 320, 'barrera_h')
    this.barrerasTemp.create(1080, 200, 'barrera_h')
    this.barrerasTemp.create(1120, 200, 'barrera_h')
    this.barrerasTemp.create(1040, 520, 'barrera_v')
    this.barrerasTemp.create(1115, 520, 'barrera_v')
    this.barrerasTemp.create(1000, 400, 'barrera_v')
    this.barrerasTemp.create(1075, 400, 'barrera_v')
    this.barrerasTemp.create(1040, 280, 'barrera_v')
    this.barrerasTemp.create(1115, 280, 'barrera_v')
    this.barrerasTemp.create(1075, 160, 'barrera_v')


    
    this.bordes.create(0, 0, 'b_lateral')
    this.bordes.create(1280, 0, 'b_lateral')
    this.bordes.create(0, 740, 'b_inferior')

    this.meta = game.add.sprite(180, 400, 'meta');
    this.jugador = game.add.sprite(1060, 600, 'jugador')

    this.jugador.enableBody = true;
    this.game.physics.arcade.enable(this.jugador)
    this.jugador.body.collideWorldBounds = false;
    this.jugador.body.gravity.y = 2000;

    this.game.physics.arcade.enable(this.platHor)
    this.platHor.setAll('enableBody', true)
    this.platHor.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.platVer)
    this.platVer.setAll('enableBody', true)
    this.platVer.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.platRoj)
    this.platRoj.setAll('enableBody', true)
    this.platRoj.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.platAzul)
    this.platAzul.setAll('enableBody', true)
    this.platAzul.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.platTemp)
    this.platTemp.setAll('enableBody', true)
    this.platTemp.setAll('body.immovable', true)

    this.game.physics.arcade.enable(this.barreras)
    this.barreras.setAll('enableBody', true)
    this.barreras.setAll('body.immovable', true)
    this.barreras.setAll('alpha', 0);

    this.game.physics.arcade.enable(this.barrerasTemp)
    this.barrerasTemp.setAll('enableBody', true)
    this.barrerasTemp.setAll('body.immovable', true)
    this.barrerasTemp.setAll('alpha', 0);

    this.game.physics.arcade.enable(this.bordes)
    this.bordes.setAll('enableBody', true)
    this.bordes.setAll('body.immovable', true)
    this.bordes.setAll('alpha', 0);

    this.game.physics.arcade.enable(this.meta)
    this.meta.enableBody = true;
    this.meta.body.immovable = true;
},

update:function(){
    cambio = 120;
    suelo = false;
    colisionAzul = false;
    colisionBarrera = false;
    tiempo += 1;

    if(tiempo == 200){ tiempo = 0 }
    
    if( tiempo == 0 ){ temp = true }
    if( tiempo == cambio && temp == true ){ 
        temp = false;
    }

    this.game.physics.arcade.collide(this.jugador, this.platRoj, function(jugador, platRoj){
        jugador.body.x = 1060
        jugador.body.y = 600
        jugador.body.velocity.x = 0
        jugador.body.velocity.y = 0
        tiempo = 0;
        intentos += 1
    })

    this.game.physics.arcade.collide(this.jugador, this.platHor, function(jugador){
        suelo = true
    })
    this.game.physics.arcade.collide(this.jugador, this.platVer)
    
    this.game.physics.arcade.collide(this.jugador, this.platAzul, function(){
        colisionAzul = true
    })

    if(temp == true){
        this.platTemp.setAll('alpha', 1);
        this.game.physics.arcade.collide(this.jugador, this.platTemp, function(){
        suelo = true
        })
    } else {
        this.platTemp.setAll('alpha', 0);
    }

    this.game.physics.arcade.overlap(this.jugador, this.barreras, function(){
        colisionBarrera = true
    })

    if(temp == true){
        this.game.physics.arcade.overlap(this.jugador, this.barrerasTemp, function(){
        colisionBarrera = true
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
        jugador.body.x = 1060
        jugador.body.y = 600
        jugador.body.velocity.x = 0
        jugador.body.velocity.y = 0
        tiempo = 0;
    })
        
    if( ganado == false ){
        if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && suelo == true && colisionBarrera == false){
            this.jugador.body.velocity.x = -400;
            this.jugador.body.velocity.y = -800;
        } else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && suelo == true && colisionBarrera == false){
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
        } else if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && suelo == true && colisionBarrera == false){
            this.jugador.body.velocity.y = -800;
        } else if(suelo == true){
            this.jugador.body.velocity.x = 0;
        }
    } else {
        this.jugador.body.velocity.x = 0;
        this.jugador.body.velocity.y = 0;
    }
}	
};

game.state.add('nivelDos', escenaDos);
