export default class LindoShoot extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type,pigmalion,dirY) {
    super(scene, x, y, type);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.setPhysics();
    this.timelimit();
    this.player=pigmalion;
    this.dy=dirY
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if(this.scene.physics.overlap(this,this.player)) this.destroy();
  }

  //ESTO, TAL CUAL LO TIENE POMPONINA ---> HERENCIA
  setPhysics() {
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
    this.velocity = 600;
    this.velY = Phaser.Math.Between(1,3);
    if(this.dy===1)this.velY=-this.velY;
    this.velX = 1;
    this.normalize = Math.sqrt(this.velX + Math.pow(this.velY, 2));
    this.velX /= this.normalize;
    this.velY /= this.normalize;
    this.velX *= this.velocity;
    this.velY *= this.velocity;
    this.body.setVelocity(this.velX, this.velY);
  }
  timelimit() {
    this.timer = this.scene.time.delayedCall(10000, () => this.destroy());
  }
}
