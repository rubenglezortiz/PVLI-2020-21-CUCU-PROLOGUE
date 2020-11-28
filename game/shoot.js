export default class Shoot extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "shoot");
    config.scene.add.existing(this);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    this.x -= 10;
    if (this.x < 0) {
      this.destroy();
      console.log("destrouyed");
    }
  }
}
