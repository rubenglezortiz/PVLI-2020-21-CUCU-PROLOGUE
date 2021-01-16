import eventsCenter from "../eventsCenter.js";
export default class CucuAttack extends Phaser.GameObjects.Sprite {
  constructor(scene, type, pigmalion) {
    super(scene, scene.sys.game.canvas.width,  scene.sys.game.canvas.height/2,type);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);
    this.player = pigmalion;
    this.t = type;
    
    //aunque arriba se le pponga una pos en y aqui se cambia
      this.y =Phaser.Math.Between(
      this.player.y - this.player.height * 1.5,
      this.player.y + this.player.height * 1.5
    );

    
    this.scene.physics.add.overlap(this,this.player);

    if (this.t === "cucuat") this.body.setVelocity(-500, 0);
    else this.body.setVelocity(-650, 0);
    if (this.y > this.scene.sys.game.canvas.height - this.height / 2)
      this.y = this.scene.sys.game.canvas.height - this.height / 2;
    if (this.y < this.height / 2) this.y = this.height / 2;

    this.scene.monecoAttacks.add(this);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if (this.t === "cucuat") this.anims.play("cucu_at1", true);
    else this.anims.play("cucu_at2", true);
    if(this.scene.physics.overlap(this,this.player.sprite)) this.destroy();
    if (this.x < 0) this.destroy();  
  }
}
