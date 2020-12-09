export default class PomponinaAttack extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    config.scene.physics.world.enable(this);    
    this.velY = Phaser.Math.Between(-500, 500);
    this.body.setVelocityY(this.velY);
    this.body.setVelocityX(-150);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.body.setCollideWorldBounds(true);   
    this.body.setBounce(1);
    if (this.x < this.width/2 +1) this.destroy();
    // console.log(this.x,"  ",this.width);
  }
}
