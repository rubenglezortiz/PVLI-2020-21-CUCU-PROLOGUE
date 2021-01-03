export default class Explosion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type, pigmalion) {
    super(scene, x, y, type);
    scene.add.existing(this);
    this.scene.anims.create({
      key: "bomb",
      frames: this.scene.anims.generateFrameNumbers("pigmalion", {
        start: 0,
        end: 12,
      }),
      frameRate: 20,
      repeat: -1,
    });
    if (this.x < this.width / 2) this.x = this.width/2;
    if (this.x > this.scene.sys.game.canvas.width - this.width / 2)
      this.x = this.scene.sys.game.canvas.width - this.width / 2;

    if (this.y > this.scene.sys.game.canvas.height - this.height / 2)
      this.y = this.scene.sys.game.canvas.height - this.height / 2;
    if (this.y < this.height / 2) this.y = this.height / 2;

    this.player = pigmalion;
    this.bomb();
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    this.anims.play("bomb", true);
    if (this.scene.physics.overlap(this, this.player)) this.destroy();
  }

  bomb() {
    this.timer2 = this.scene.time.delayedCall(1500, () => {
      this.scene.physics.add.existing(this);
      this.scene.physics.world.enable(this);
    });
    this.timer2 = this.scene.time.delayedCall(2000, () => {
      this.destroy();
    });
  }
}
