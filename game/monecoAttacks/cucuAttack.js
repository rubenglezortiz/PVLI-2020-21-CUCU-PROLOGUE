import eventsCenter from "../eventsCenter.js";
export default class CucuAttack extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type, pigmalion) {
    super(scene, x, y,type);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);
    this.player = pigmalion;
    this.t = type;

    this.scene.anims.create({
      key: "cucu",
      frames: this.scene.anims.generateFrameNumbers("cucuat", {
        start: 0,
        end: 14,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "cucu2",
      frames: this.scene.anims.generateFrameNumbers("cucuat2", {
        start: 0,
        end: 14,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.scene.physics.add.overlap(this,this.player);

    if (this.t === "cucuat") this.body.setVelocity(-500, 0);
    else this.body.setVelocity(-650, 0);
    if (this.y > this.scene.sys.game.canvas.height - this.height / 2)
      this.y = this.scene.sys.game.canvas.height - this.height / 2;
    if (this.y < this.height / 2) this.y = this.height / 2;
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if (this.t === "cucuat") this.anims.play("cucu", true);
    else this.anims.play("cucu2", true);
    if(this.scene.physics.overlap(this,this.player)) this.destroy();
    if (this.x < 0) this.destroy();  
  }
}
