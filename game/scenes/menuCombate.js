export default class MenuCombate extends Phaser.Scene {
  constructor(datos) {
    super({ key: "mc"});
  }

  create() {
    this.menu = this.add.image(700, 500, "mc");
    this.menu.setAlpha(0.5);
    this.attackButton=this.add.sprite(300,700,"attackButton").setInteractive();
    this.talkButton=this.add.sprite(700,700,"attackButton").setInteractive();
    this.merciButton=this.add.sprite(1100,700,"attackButton").setInteractive();
    this.attackButton.on('pointerdown',pointer=>{
        this.attackButton.setAlpha(0.5);
    })
    this.e = this.input.keyboard.addKey("E");
    this.t = 0;
    this.scene.bringToTop();
  }

//   update(time, delta) {
//     this.t += delta;
//     if (this.t > 100) {
//       console.log(this.prevScene);
//       this.scene.resume("SALA0");
//       this.scene.stop();
//     }
//   }
}
