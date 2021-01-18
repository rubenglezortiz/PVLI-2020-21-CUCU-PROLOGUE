import eventsCenter from "../eventsCenter.js";
export default class CucuAttack extends Phaser.GameObjects.Sprite {
  constructor(scene, anim, y, velocity, pigmalion) {
    super(scene, scene.sys.game.canvas.width,  scene.sys.game.canvas.height/2,anim);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);
    this.player = pigmalion;
    //aunque arriba se le pponga una pos en y aqui se cambia
      

    
    this.scene.physics.add.overlap(this,this.player);

    this.body.setVelocity(-velocity, 0);
    
    if (this.y > this.scene.sys.game.canvas.height - this.height / 2)
      this.y = this.scene.sys.game.canvas.height - this.height / 2;
    if (this.y < this.height / 2) this.y = this.height / 2;
    this.anims.play(anim, true);

    this.scene.monecoAttacks.add(this);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if(this.scene.physics.overlap(this,this.player.sprite)) this.destroy();
    if (this.x < 0) this.destroy();  
  }
}
