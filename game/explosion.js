export default class Explosion extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    this.timer = 0;
    this.scene.anims.create({
      key: "bomb",
      frames: this.scene.anims.generateFrameNumbers("pigmalion", {
        start: 0,
        end: 12,
      }),
      frameRate: 20,
      repeat: -1,
    });
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    this.anims.play("bomb", true);
    this.timer += delta;
    if (this.timer > 2000) {
      this.destroy();
    }
  }
}
