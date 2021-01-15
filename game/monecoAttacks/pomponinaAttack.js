export default class PomponinaAttack extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,type,pigmalion, dyC) {
    super(scene, x, y,type);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);   
    this.player=pigmalion;
    this.dy = dyC;
    this.setPhysics();
    this.scene.monecoAttacks.add(this);
   
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);   
    this.anims.play("pomponina_at",true);
    if(this.scene.physics.overlap(this,this.player)) this.destroy();
    if (this.x < this.width/2+1) this.destroy();    
  }

   //ESTO, TAL CUAL LO TIENE DON LINDO ---> HERENCIA
    setPhysics(){
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
    this.velocity = 350;
    this.velY = Phaser.Math.Between(1, 3);
    if(this.dy===1) this.velY=-this.velY;      
    this.velX = 1;
    this.normalize = Math.sqrt(this.velX + Math.pow(this.velY, 2));
    this.velX /= this.normalize;
    this.velY /= this.normalize;
    this.velX *= this.velocity;
    this.velY *= this.velocity;
    this.body.setVelocity(this.velX, this.velY);
  }
}
