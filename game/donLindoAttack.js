export default class LindoShoot extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    this.test = config.scene.physics.add.existing(this);
    config.scene.physics.world.enable(this);
    this.velX = Phaser.Math.Between(150,200);
    this.velY = Phaser.Math.Between(150,200);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
    if (this.body.velocity.x == 0 && this.body.velocity.y == 0)
      this.body.setVelocity(-this.velX,this.velY);
  }
}
