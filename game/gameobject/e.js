export default class E extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "e");
    scene.add.existing(this);
    this.anims.play("e", true);
  }
}
