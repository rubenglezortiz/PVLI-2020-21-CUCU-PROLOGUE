export default class LindoShoot extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type) {
    super(scene, x, y, type);
    scene.add.existing(this);   
    scene.physics.world.enable(this);
   this.setPhysics();
   this.timelimit();
   this.s = scene;
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);  
     
  }
  

  //ESTO, TAL CUAL LO TIENE POMPONINA ---> HERENCIA
  setPhysics(){
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1);
    this.velocity = 600;
    this.velY = Phaser.Math.Between(0, 5);
    this.velX = 1;
    this.normalize = Math.sqrt(this.velX + Math.pow(this.velY, 2));
    this.velX /= this.normalize;
    this.velY /= this.normalize;
    this.velX *= this.velocity;
    this.velY *= this.velocity;
    this.body.setVelocity(this.velX, this.velY);
  }
  timelimit(){
    this.timer=this.scene.time.delayedCall(10000,()=>this.destroy())
  }
}
