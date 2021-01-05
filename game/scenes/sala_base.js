import Pigmalion from "../gameobject/pigmalion.js";
import GameObject from "../gameobject/gameObject.js";
import Explosion from "../monecoAttacks/explosion.js";
import Prop from "../gameobject/prop.js";
import {cst}from"./cst.js";

export default class SalaBase extends Phaser.Scene {
  constructor(name, direcciones) {
    super({ key: name });
    this._direcciones = direcciones;
  }


  init(datos) {
    //console.log(this);
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives = datos.lives;
  }


  create() {
    
    this.add.image(700, 400, "tablones").depth = 0;
    this.derecha = this.physics.add.sprite(1400,500);
    this.izquierda = this.physics.add.sprite(0,500);
    this.arriba = this.physics.add.sprite(700,0);
    this.abajo = this.physics.add.sprite(700,800);
    
    
   
    this.player = new Pigmalion(
      this,
      this.posx,
      this.posy,
      this.lives,
      "pigmalion"
    );

    this.cortinas =new Prop(this, 700, 400, "cortinas", this.player,1, 100,-30).depth = 1;
    //su collider va a ocupar el 100% del ancho del sprite y como el sprite ocupa 1400x800, su collider va a estar en -30 para ajustarlo bien, y que no se peuda salir
    
    

    this.add.image(700, 400, "telon").depth = 5;

    this.lives = 10;
    this.monecoAttacks = this.physics.add.group();
    this.r = this.input.keyboard.addKey("R");

    /*
this.trigger = this.add.zone(700, 400);
this.trigger.setSize(200, 200);
this.physics.world.enable(this.trigger);
this.trigger.body.setAllowGravity(false);
this.trigger.body.moves = false;
*/
  }

  update(time, delta) {



   

    //-----CAMBIO SALAS-----
    if (this._direcciones[0] !== 0 && this.physics.overlap(this.player, this.izquierda)) {
      
      this.player.x = 1400 - this.player.width;


      this.scene.start(this._direcciones[0], {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this._direcciones[1] !== 0 && this.physics.overlap(this.player, this.arriba)) {
     
      this.player.y = 800 - this.player.height;

      this.scene.start(this._direcciones[1], {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this._direcciones[2] !== 0 && this.physics.overlap(this.player, this.derecha)) {
       
       this.player.x = this.player.width;

       this.scene.start(this._direcciones[2], {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this._direcciones[3] !== 0 && this.physics.overlap(this.player, this.abajo)) {
      
      this.player.y = this.player.height;


      this.scene.start(this._direcciones[3], {
        posx: this.player.x,
        posy: this.player.y,
      });
    }

    if (this.r.isDown) {
      this.expl = new Explosion({
        scene: this,
        x: 300,
        y: 300,
        type: "pigmalion",
      });
      this.timer = this.time.delayedCall(800,()=>{
        this.monecoAttacks.add(this.expl);
        console.log("añadido al grupo fis");
      })
    }
  }
}