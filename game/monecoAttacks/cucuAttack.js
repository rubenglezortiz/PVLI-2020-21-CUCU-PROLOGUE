export default class CucuAttack extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    config.scene.physics.world.enable(this);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
 
    this.body.setVelocityX(-500);
    if (this.x < 0) this.destroy();
  }
}
