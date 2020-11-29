class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }

  preload() {
    this.load.on("complete", () => {
      this.scene.start("Sala0");
    });

    this.load.spritesheet("pigmalion", "/resources/sprites/pigmalion.png", {
      frameWidth: 192,
      frameHeight: 192,
    });
    // spritesheet 384x512
    this.load.image("background", "/resources/sprites/background.png");
    this.load.image("objetovacio", "/resources/sprites/objetovacio.png");
  }
}

export default Bootloader;
