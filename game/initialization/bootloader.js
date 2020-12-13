import { cst } from "../scenes/cst.js";


class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }

  preload() {
    this.load.on("complete", () => {
      this.scene.start("SALA0", {posx: 700, posy :400, lives:10});
    });

    this.load.spritesheet("pigmalion", "./././resources/sprites/pigmalion.png", {
      frameWidth: 192,
      frameHeight: 192,
    });
    this.load.spritesheet("cucuat", "./././resources/sprites/cucu/cucuattacksprite.png", {
      frameWidth: 216,
      frameHeight: 108,
    });
    this.load.spritesheet("cucuat2", "./././resources/sprites/cucu/cucuattacksprite2.png",{
      frameWidth: 91,
      frameHeight:108
    });

    this.load.image("mesa", "./././resources/sprites/mesas1.png");
    this.load.image("background", "./././resources/sprites/teatroGeneral/background.png");
    this.load.image("caballo", "./././resources/sprites/caballo.png");
    this.load.image("cortinas", "./././resources/sprites/teatroGeneral/cortinas.png");
    this.load.image("telon", "./././resources/sprites/teatroGeneral/telon.png");
    this.load.image("telonGrande", "./././resources/sprites/teatroGeneral/telonGrande.png");
    this.load.image("tablones", "./././resources/sprites/teatroGeneral/tablones.png");
    this.load.image("objetovacio", "./././resources/sprites/teatroGeneral/objetovacio.png");
    this.load.image("mc","./././resources/sprites/MenuComb.png");

    //-----SPRITES MENU ATAQUE-----
    this.load.image("attackButton", ".././resources/sprites/menuAtaque/botonAtacar.png");
    this.load.image("talkButton",".././resources/sprites/menuAtaque/botonHablar.png");
    this.load.image("mercyButton",".././resources/sprites/menuAtaque/botonPiedad.png");
    this.load.image("backButton", ".././resources/sprites/menuAtaque/botonRetroceder.png");
    this.load.image("bar",".././resources/sprites/menuAtaque/barrafinal.png");
    this.load.image("moveBar",".././resources/sprites/menuAtaque/barraMovil.png");
  }
}
export default Bootloader;
