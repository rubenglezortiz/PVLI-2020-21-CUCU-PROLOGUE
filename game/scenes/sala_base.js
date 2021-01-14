import Pigmalion from "../gameobject/pigmalion.js";
import Prop from "../gameobject/prop.js";
import {objs} from "./objeto.js";
import RunInfo from "../runInfo.js"

export default class SalaBase extends Phaser.Scene {
  constructor(name, direcciones, isCombat) {
    super({ key: name });
    this._direcciones = direcciones;
    this._salaCombate = isCombat;

  }


  init(datos) {
    this.objetos = Array(objs.OBJECTS.NumObjs);
    this.objetos = datos.objs; 
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives = datos.lives;
    this._runInfo = datos.runInf;
    
  }


  create() {
    
    this.add.image(700, 400, "tablones").depth = -1;
    this.derecha = this.physics.add.sprite(1400,500);
    this.izquierda = this.physics.add.sprite(0,500);
    this.arriba = this.physics.add.sprite(700,0);
    this.abajo = this.physics.add.sprite(700,800);
    
    
   
    this.player = new Pigmalion(
      this,
      this.posx,
      this.posy,
      this.lives,
               
    );

    this.bounds =  this.physics.add.staticGroup();

    this.colliderArriba = this.physics.add.staticSprite(this.sys.game.canvas.width/2, this.player.sprite.height- 30);
    this.colliderArriba.setSize(this.sys.game.canvas.width , 20, true);
    this.bounds.add(this.colliderArriba);

    this.colliderAbajo = this.physics.add.staticSprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height);
    this.colliderAbajo.setSize(this.sys.game.canvas.width , 20, true);
    this.bounds.add(this.colliderAbajo);

    this.colliderIzq= this.physics.add.staticSprite(0 ,this.sys.game.canvas.height/2);
    this.colliderIzq.setSize(10 , this.sys.game.canvas.height , true);
    this.bounds.add(this.colliderIzq);

    this.colliderDr= this.physics.add.staticSprite(this.sys.game.canvas.width ,this.sys.game.canvas.height/2);
    this.colliderDr.setSize(10 , this.sys.game.canvas.height , true);
    this.bounds.add(this.colliderDr);

    
    
    
    this.physics.add.collider(this.bounds, this.player.collider);

    if(!this._salaCombate){
     
      //su collider va a ocupar el 100% del ancho del sprite y como el sprite ocupa 1400x800, su collider va a estar en -30 para ajustarlo bien, y que no se peuda salir
      this.cortinas = this.add.image( 700, 400, "cortinas")
      this.cortinas.depth = 1;
      this.add.image(700, 400, "telon").depth = this.sys.game.canvas.height +1 ;
    }
  

    this.e = this.input.keyboard.addKey("E");
  }

  update(time, delta) {

    //-----CAMBIO SALAS-----
    if (this._direcciones[0] !== 0 && this.physics.overlap(this.player.sprite, this.izquierda)) {
      
      this.player.x = 1400 - this.player.sprite.width;


      this.scene.start(this._direcciones[0], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[1] !== 0 && this.physics.overlap(this.player.sprite, this.arriba)) {
     
      this.player.y = 800 - this.player.sprite.height;

      this.scene.start(this._direcciones[1], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[2] !== 0 && this.physics.overlap(this.player.sprite, this.derecha)) {
       
       this.player.x = this.player.sprite.width;

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


      this.scene.start(this._direcciones[3], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }

  }
}