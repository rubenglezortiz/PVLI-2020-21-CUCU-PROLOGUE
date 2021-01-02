import SalaBase from "./sala_base.js";
import {cst}from "./cst.js";

export default class Sala11 extends SalaBase{
    constructor(){
                        // <-          ^        ->        v
        super(cst.SCENES.SALA11, [cst.SCENES.SALA12, cst.SCENES.SALA13, cst.SCENES.SALA0, cst.SCENES.SALA15])
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.camino = this.add.image(700, 400, "cucucamino4");
          this.camino.depth = 1;
     }
    

     update(){
        super.update();
        
     }
}



// import { cst } from "./cst.js";
// import Pigmalion from "../gameobject/pigmalion.js";
// export default class Sala11 extends Phaser.Scene {
//   constructor() {
//     super({ key: cst.SCENES.SALA11 });
//   }

//   init(datos) {
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//     this.lives = datos.lives;
//   }

//   create() {
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700,400,"cortinas");
//     this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
//     this.add.image(700,400,"telon");
//     this.lives = 10;
//   }

//   update(time, delta) {
//     if (this.player.x < 0) {
//       this.player.x = 1400 - 1;
//       this.scene.start(cst.SCENES.SALA12, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.x > 1400) {
//       this.player.x = 1;
//       this.scene.start(cst.SCENES.SALA0, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.y < 0) {
//       this.player.y = 800 - 1;
//       this.scene.start(cst.SCENES.SALA13, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.y > 800) {
//       this.player.y = 1;
//       this.scene.start(cst.SCENES.SALA15, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//   }
// }
