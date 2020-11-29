export default class Explosion extends Phaser.GameObjects.Sprite {
    constructor(config) {
      super(config.scene, config.x, config.y, config.type);
      config.scene.add.existing(this);
      //let timer = this.scene.time.delayedCall(20000, this.destroy());
    }
}
  