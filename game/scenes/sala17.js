import SalaBase from "./sala_base.js";

export default class Sala17 extends SalaBase {
  constructor() {
                   //<- ^    ->      v
    super("Sala17", [0, 0, "Sala16", 0]);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.add.image(300, 300, "carreta").setScale(6);
    this.cucu = this.physics.add.sprite(300, 400, "cucu_idle").setScale(6);
    this.cucuE = this.add.image(
      this.cucu.x,
      this.cucu.y - this.cucu.height * 6,
      "teclaE"
    );
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("cucu_idle", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });

    
    this.e = this.input.keyboard.addKey("E");
  }

  update() {
    super.update();

    this.cucu.play("idle", true);
    if (this.physics.overlap(this.player, this.cucu)) {
      this.cucuE.visible = true;

      if (Phaser.Input.Keyboard.JustDown(this.e)) {
        this.scene.start("Sala18Cucu", {
          posx: this.player.x,
          posy: this.player.y,
          lives: this.player.lives,
        });
      }
    } else {
      this.cucuE.visible = false;
    }
  }
}

// import { cst } from "./cst.js";
// import Pigmalion from "../gameobject/pigmalion.js";

// export default class Sala17 extends Phaser.Scene {
//   constructor() {
//     super({ key: cst.SCENES.SALA17 });
//   }

//   init(datos) {
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//     this.lives = datos.lives;
//   }

//   create() {
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700, 400, "cortinas");
//     this.add.image(300, 300, "carreta").setScale(6);
//     this.cucu = this.physics.add.sprite(300, 400, "cucu_idle").setScale(6);
//     this.cucuE = this.add.image(
//       this.cucu.x,
//       this.cucu.y - this.cucu.height * 6,
//       "teclaE"
//     );
//     this.anims.create({
//       key: "idle",
//       frames: this.anims.generateFrameNumbers("cucu_idle", {
//         start: 0,
//         end: 6,
//       }),
//       frameRate: 4,
//       repeat: -1,
//     });

//     this.player = new Pigmalion(
//       this,
//       this.posx,
//       this.posy,
//       this.lives,
//       "pigmalion"
//     );
//     this.add.image(700, 400, "telon");
//     this.lives = 10;

//     this.e = this.input.keyboard.addKey("E");
//   }

//   update(time, delta) {
//     this.cucu.play("idle", true);
//     if (this.physics.overlap(this.player, this.cucu)) {
//       this.cucuE.visible = true;

//       if (this.e.isDown) {
//         this.scene.start("SALA18CUCU", {
//           posx: this.player.x,
//           posy: this.player.y,
//           lives: this.player.lives,
//         });
//       }
//     } else {
//       this.cucuE.visible = false;
//     }

//     if (this.player.x < 0) {
//       //La sala 1.7 no tiene movieminet a la iezquierda
//     }
//     if (this.player.x > 1400) {
//       this.player.x = 1;
//       this.scene.start(cst.SCENES.SALA16, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.y < 0) {
//       //La sala 1.7 no tiene movieminet abajo
//     }
//     if (this.player.y > 800) {
//       //La sala 1.7 no tiene movieminet arriba
//     }
//   }
// }
