export default class Explosion extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    this.timer = 0;
    this.scene.anims.create({
      key: "f",
      frames: this.scene.anims.generateFrameNumbers("pigmalion", {
        start: 0,
        end: 12,
      }),
      frameRate: 20,
      repeat: -1,
    });
    console.log(this.scene);
  }

  preUpdate(time, delta) {
    console.log("sí se llama");
    this.anims.play("f", true);
    this.timer += delta;
    if (this.timer > 2000) {
      this.destroy();
    }
  }
}
