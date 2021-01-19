import Pigmalion from "../gameobject/pigmalion.js";
import {objs} from "./objeto.js";

export default class SalaBase extends Phaser.Scene {
  constructor(name, direcciones, isCombat) {
    super({ key: name });
    this._direcciones = direcciones;
    this._salaCombate = isCombat;

  }


  init(datos) {    
    this.objetos = datos.objs; 
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives = datos.lives;
    this._runInfo = datos.runInf;
    
  }


  create() {
    this.scene.bringToTop();
    this.window = new Object();
    this.window.w = this.sys.game.canvas.width;
    this.window.h = this.sys.game.canvas.height;
    this.add.image(700, 400, "tablones").depth = -1;
    this.derecha = this.physics.add.sprite(this.window.w,this.window.h/5*3);
    this.izquierda = this.physics.add.sprite(0,this.window.h/5*3);
    this.arriba = this.physics.add.sprite(this.window.w/2,0);
    this.abajo = this.physics.add.sprite(this.window.w/2,800);
    //para guardar estas variables al crearlo y le cueste menos acceder a ellas
    this.sound.sounds[0].resume();
    console.log(this.sound);
   
    this.player = new Pigmalion(
      this,
      this.posx,
      this.posy,
      this.lives,               
    );

    this.bounds =  this.physics.add.staticGroup();

    this.colliderArriba = this.physics.add.staticSprite(this.window.w/2, this.player.sprite.height - 30);
    this.colliderArriba.setSize(this.window.w , 20, true);
    this.bounds.add(this.colliderArriba);

    this.colliderAbajo = this.physics.add.staticSprite(this.window.w/2, this.window.h);
    this.colliderAbajo.setSize(this.window.w , 20, true);
    this.bounds.add(this.colliderAbajo);

    this.colliderIzq= this.physics.add.staticSprite(0 ,this.window.h/2);
    this.colliderIzq.setSize(10 , this.window.h , true);
    this.bounds.add(this.colliderIzq);

    this.colliderDr= this.physics.add.staticSprite(this.window.w ,this.window.h/2);
    this.colliderDr.setSize(10 , this.window.h , true);
    this.bounds.add(this.colliderDr);

    
    
    
    this.physics.add.collider(this.bounds, this.player);

    if(!this._salaCombate){
     
      //su collider va a ocupar el 100% del ancho del sprite y como el sprite ocupa 1400x800, su collider va a estar en -30 para ajustarlo bien, y que no se peuda salir
      this.cortinas = this.add.image( this.window.w/2,  this.window.h/2, "cortinas")
      this.cortinas.depth = 1;
      this.add.image(this.window.w/2,  this.window.h/2, "telon").depth = this.window.h+1 ;
    }
  

    this.e = this.input.keyboard.addKey("E");
  }

  update(time, delta) {

    //-----CAMBIO SALAS-----
    if (this._direcciones[0] !== 0 && this.physics.overlap(this.player.sprite, this.izquierda)) {
      
      this.player.x = this.window.w - this.player.sprite.width;
      this.acabarSonidos();

      this.scene.start(this._direcciones[0], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[1] !== 0 && this.physics.overlap(this.player.sprite, this.arriba)) {
     
      this.player.y = this.window.h - this.player.sprite.height/2;
      this.acabarSonidos();
      this.scene.start(this._direcciones[1], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[2] !== 0 && this.physics.overlap(this.player.sprite, this.derecha)) {
       
       this.player.x = this.player.sprite.width/2;
       this.acabarSonidos();
       this.scene.start(this._direcciones[2], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[3] !== 0 && this.physics.overlap(this.player.sprite, this.abajo)) {
      
      this.player.y = this.player.sprite.height;
      this.acabarSonidos();
      
      this.scene.start(this._direcciones[3], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }

  }


  acabarSonidos = function(){

    
    //la que está en el 0 no se quiere borrar ya que es la música de ambiente
    for(let x = 1; x < this.sound.sounds.length; x++){
      //this.sound.sounds[x].stop();
      this.sound.remove(this.sound.sounds[x]);
    }

    this.sound.sounds[0].resume();
    this.sound.sounds[0].volume = 0.2;
    // this.tweens.add({
    //   targets: this.sound.sounds[0],
    //   volume: 0.2,
    //   ease: 'Power1',
    //   duration: 2000
    // })
    
  }
}