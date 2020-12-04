export default class Shoot extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    config.scene.physics.world.enable(this);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.x -= 10;
    if (this.x < 0) {
      this.destroy();
    }
  }
}
