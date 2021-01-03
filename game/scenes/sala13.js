import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst} from "./cst.js";

export default class Sala13 extends SalaBase {
  constructor() {
                  // <-      ^     ->     v
    super(cst.SCENES.SALA13, [0, cst.SCENES.SALA14, 0, cst.SCENES.SALA11])
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
   

    this.chulapos = new Prop(this, 1100, 300, "chulapos", this.player, 1, 60,50);
    this.chulaposE = this.add.image(
      this.chulapos.x,
      this.chulapos.y - this.chulapos.height + 50,
      "teclaE"
    );
    this.chulaposE.depth = 6;
    this.camino = this.add.image(800, 400, "cucucamino1");
    this.camino.depth = 1;
    this.camino.angle = 90;

    this.caballo = new Prop(this, 700, 350, "caballo", this.player, 0.5, 60,50);

    this.anims.create({
      key: "chulaposAnim",
      frames: this.anims.generateFrameNumbers("chulapos", {
        start: 0,
        end: 20,
      }),
      frameRate: 4,
      repeat: -1,
    });

    this.e = this.input.keyboard.addKey("E", false);
  }

  update() {
    super.update();
    this.chulapos.play("chulaposAnim", true);
    if (this.physics.overlap(this.player, this.chulapos)) {
      this.chulaposE.visible = true;
      if(Phaser.Input.Keyboard.JustDown(this.e)){
        console.log("Hablaste con los chulapos");
      }
    } else {
      this.chulaposE.visible = false;
    }
  }
}

// import { cst } from "./cst.js";
// import Pigmalion from "../gameobject/pigmalion.js";

// export default class Sala13 extends Phaser.Scene {
//   constructor() {
//     super({ key: cst.SCENES.SALA13 });
//   }

//   init(datos) {
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//     this.lives=datos.lives;
//   }

//   create() {
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700,400,"cortinas");
//     this.caballo = this.physics.add.sprite(700,350,"caballo").setScale(0.75);

//     this.chulapos = this.physics.add.sprite(1100, 300, "chulapos");
//     this.chulaposE =  this.add.image(this.chulapos.x, this.chulapos.y -  this.chulapos.height + 50, "teclaE");
//     this.anims.create({
//       key: "chulaposAnim",
//       frames: this.anims.generateFrameNumbers("chulapos", {
//         start: 0,
//         end: 20,
//       }),
//       frameRate: 4,
//       repeat: -1,
//     });
//    // this.caballo.sprite.setScale(0.5);
//     this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
//     this.add.image(700,400,"telon");

//     this.lives = 10;
//     this.flash = 0;
//   }

//   update(time, delta) {

//     this.chulapos.play("chulaposAnim", true);
//     if(this.physics.overlap(this.player, this.chulapos)) {
//       this.chulaposE.visible = true;
//     }
//     else{
//       this.chulaposE.visible = false;
//     }

//     if (this.player.x < 0) {
//       //la sala 3 no tiene nada a la inquierda
//     }
//     if (this.player.x > 1400) {
//       //la sala 1.3 no tiene nada a la derecha
//     }
//     if (this.player.y < 0) {
//       this.player.y = 800 - 1;
//       this.scene.start(cst.SCENES.SALA14, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.y > 800) {
//       this.player.y = 1;
//       this.scene.start(cst.SCENES.SALA11, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//   }
// }
