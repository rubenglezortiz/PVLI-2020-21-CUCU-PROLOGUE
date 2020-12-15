import eventsCenter from "../eventsCenter.js";
export default class CucuAttack extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    config.scene.physics.world.enable(this);
    this.t = config.type;
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

    if (this.y > this.scene.sys.game.canvas.height-this.height/2)
      this.y = this.scene.sys.game.canvas.height - this.height / 2;

    if (this.y < this.height/2) this.y = this.height / 2;
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    if (this.t === "cucuat") {
      this.anims.play("cucu", true);
      this.body.setVelocityX(-500);
    } else {
      this.anims.play("cucu2", true);
      this.body.setVelocityX(-600);
    }
    eventsCenter.on("hit", this.needDestroy, this, this);
    if (this.x < 0) this.destroy();
    // console.log(this.y);
  }

  needDestroy(playerY, playerHeight) {
    let maxPlayerY = playerY + playerHeight / 2;
    let minPlayerY = playerY - playerHeight / 2;

    let maxY = this.y + this.height / 2;
    let minY = this.y - this.height / 2;

    if ((maxY > minPlayerY && maxY < maxPlayerY) ||(minY < maxPlayerY && minY > minPlayerY))
      this.destroy();
  }
}
