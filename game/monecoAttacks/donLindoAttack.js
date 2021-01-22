export default class LindoShoot extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type,pigmalion) {
    super(scene, x, y, type);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.dY = Phaser.Math.Between(0,1);
    this.setPhysics();
    this.timelimit();
    this.player=pigmalion;
   
    this.scene.monecoAttacks.add(this);
    this.anims.play("nota");
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if(this.scene.physics.overlap(this,this.player.sprite)) this.destroy();
  }

  setPhysics() {
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
    this.velocity = 600;
    this.velY = Phaser.Math.Between(1,3);
    if(this.dY===1)this.velY=-this.velY;
    
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
