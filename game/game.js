export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {
    this.load.image('pigmalion','./resources/sprites/muneco.jpg')
  };

  create() {
    this.add.text(10, 10, "¡Hola, mundo!", { fontColor: 0xffff00 });
   var player= this.add.sprite(300,300,'pigmalion');

    this.w= scene.input.keyboard.addKey('W');

  }

  update(time, delta) {
    if(this.w.isDown){
console.log("me quiero morir");
    }
  }
}
