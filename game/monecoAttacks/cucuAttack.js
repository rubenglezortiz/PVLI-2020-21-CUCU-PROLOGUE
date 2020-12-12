import eventsCenter from "../eventsCenter.js";
export default class CucuAttack extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    config.scene.physics.world.enable(this);
    this.scene.anims.create({
      key: "cucu",
      frames: this.scene.anims.generateFrameNumbers("cucuat2", {
        start: 0,
        end: 14,
      }),
      frameRate: 15,
      repeat: -1,
    });
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt); 
    this.anims.play("cucu", true);
    this.body.setVelocityX(-500);
    eventsCenter.on("hit",this.destroy,this);
    if (this.x < 0) this.destroy();
  }
}
