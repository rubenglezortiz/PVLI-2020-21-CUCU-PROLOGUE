export default class PomponinaAttack extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,type,pigmalion) {
    super(scene, x, y,type);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);   
    this.player=pigmalion
    this.setPhysics();
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);   
    if(this.scene.physics.overlap(this,this.player)) this.destroy();
    if (this.x < this.width) this.destroy();    
  }

   //ESTO, TAL CUAL LO TIENE DON LINDO ---> HERENCIA
  setPhysics(){
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
    this.velocity = 400;
    this.velY = Phaser.Math.Between(0, 5);
    this.velX = 1;
    this.normalize = Math.sqrt(this.velX + Math.pow(this.velY, 2));
    this.velX /= this.normalize;
    this.velY /= this.normalize;
    this.velX *= this.velocity;
    this.velY *= this.velocity;
    this.body.setVelocity(this.velX, this.velY);
  }
}
