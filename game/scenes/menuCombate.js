export default class MenuCombate extends Phaser.Scene {
  constructor(datos) {
    super({ key: "mc" });
         
  }

  create() {
    this.scene.bringToTop();
    this.menu = this.add.image(700, 500, "mc");
    this.menu.setAlpha(0.5);
    this.attackButton = this.add.sprite(300, 700, "attackButton").setInteractive();
    this.talkButton = this.add.sprite(700, 700, "attackButton").setInteractive();
    this.merciButton = this.add.sprite(1100, 700, "attackButton").setInteractive();
    this.buttonVec = [this.attackButton, this.talkButton, this.merciButton];
    this.buttonVec.forEach((button) => {
      button.on("pointerover", (pointer) => {
        button.setAlpha(0.5);
      });
      button.on("pointerout", (pointer) => {
        button.setAlpha(1);
      });
      button.on("pointerdown", (pointer) => {
        this.scene.pause();
        this.scene.resume("SALA18CUCU");
        this.scene.sendToBack();
      });
    });

  }
}
