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
      "pigmalion",           
    );

    this.colliderArriba = this.physics.add.staticSprite(this.sys.game.canvas.width/2, this.player.body.height- 30);
    this.colliderArriba.setSize(this.sys.game.canvas.width , 20, true);
    this.physics.add.collider(this.colliderArriba, this.player.collider);

    if(!this._salaCombate){
     
      //su collider va a ocupar el 100% del ancho del sprite y como el sprite ocupa 1400x800, su collider va a estar en -30 para ajustarlo bien, y que no se peuda salir
      this.add.image( 700, 400, "cortinas").depth = 1;
      this.add.image(700, 400, "telon").depth = this.sys.game.canvas.height +1 ;
    }
  

    this.e = this.input.keyboard.addKey("E");
  }

  update(time, delta) {

    //-----CAMBIO SALAS-----
    if (this._direcciones[0] !== 0 && this.physics.overlap(this.player, this.izquierda)) {
      
      this.player.x = 1400 - this.player.width;


      this.scene.start(this._direcciones[0], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[1] !== 0 && this.physics.overlap(this.player, this.arriba)) {
     
      this.player.y = 800 - this.player.height;

      this.scene.start(this._direcciones[1], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[2] !== 0 && this.physics.overlap(this.player, this.derecha)) {
       
       this.player.x = this.player.width;

       this.scene.start(this._direcciones[2], {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo
      });
    }
    if (this._direcciones[3] !== 0 && this.physics.overlap(this.player, this.abajo)) {
      
      this.player.y = this.player.height;


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