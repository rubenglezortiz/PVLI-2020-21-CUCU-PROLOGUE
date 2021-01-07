import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst} from "./cst.js";

export default class Sala17 extends SalaBase {
  constructor() {
                   //<- ^    ->      v
    super(cst.SCENES.SALA17, [0, 0, cst.SCENES.SALA16, 0],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(1400, 400, "cucucamino1");
    this.carreta= new Prop(this,300, 300, "carreta", this.player,6, 60,50);
    this.cucu= new Prop(this, 300, 400, "cucu_idle", this.player,6, 60,50);
    this.cucuE = this.add.image(
      this.cucu.x,
      this.cucu.y - this.cucu.height * 6,
      "teclaE"
    );
    this.cucuE.depth = 6;
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
        this.scene.start(cst.SCENES.SALA18CUCU, {
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