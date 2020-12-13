import eventsCenter from "../eventsCenter.js";
import menuCombate from "./menuCombate.js";
export default class rod extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    this.stop = this.scene.input.keyboard.addKey("Space");
  }
  create() {
    this.right1 = true;
    this.active = true;
  }
  preUpdate(t, dt) {
    eventsCenter.on("back",this.destroy,this);
    if (this.active) {
      if (this.right1) this.x += 10;
      else this.x -= 10;
      if (this.x > 1025) this.right1 = false;
      else if (this.x < 380) this.right1 = true;
    }
    if (this.stop.isDown) {
      {
        this.active = false;
        eventsCenter.emit("exit", true);
      }
    }
  }
}