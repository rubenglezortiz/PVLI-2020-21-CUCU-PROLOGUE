export default class PomponinaAttack extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    config.scene.physics.world.enable(this);
    this.velocity = 400;
    this.velY = Phaser.Math.Between(0, 5);
    console.log(this.velY);
    this.velX = 1;
    this.normalize = Math.sqrt(this.velX + Math.pow(this.velY, 2));
    console.log(this.normalize);
    this.velX /= this.normalize;
    this.velY /= this.normalize;

    this.velX *= this.velocity;
    this.velY *= this.velocity;
    this.body.setVelocity(this.velX, this.velY);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
    if (this.x < this.width / 2 + 1) this.destroy();
  }
}
