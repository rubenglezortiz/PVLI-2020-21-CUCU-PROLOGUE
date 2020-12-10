import { cst } from "../scenes/cst.js";


class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }

  preload() {
    this.load.on("complete", () => {
      this.scene.start("SALA18CUCU", {posx: 700, posy :400});
    });

    this.load.spritesheet("pigmalion", "./././resources/sprites/pigmalion.png", {
      frameWidth: 192,
      frameHeight: 192,
    });


    // spritesheet 384x512
    this.load.image("background", "./././resources/sprites/background.png");
    this.load.image("objetovacio", "./././resources/sprites/objetovacio.png");
    this.load.image("shoot", "./././resources/sprites/cuadrado.jpg");
    this.load.image("mc","./././resources/sprites/MenuComb.png");
    this.load.image("attackButton", "./././resources/sprites/botonAtacar.png");
  }
}
export default Bootloader;
