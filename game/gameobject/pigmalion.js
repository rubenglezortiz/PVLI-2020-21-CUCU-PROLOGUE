export default class Pigmalion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type) {
    super(scene, x, y, type);
    console.log(this);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(false);
    //this.anim = type;
    this.scene.anims.create({
      key: "walk",
      frames: this.scene.anims.generateFrameNumbers("pigmalion", {
        start: 0,
        end: 12,
      }),
      frameRate: 20,
      repeat: -1,
    });
  }

  create() {
    this.w = this.scene.input.keyboard.addKey("W");
    this.a = this.scene.input.keyboard.addKey("A");
    this.s = this.scene.input.keyboard.addKey("S");
    this.d = this.scene.input.keyboard.addKey("D");
  }

  update() {
    //derecha
    let quietoX = true;
    let quietoY = true;

    if (this.w.isDown) {
      this.body.setVelocityY(-300);
      quietoY = false;
    } else if (this.s.isDown) {
      this.body.setVelocityY(300);
      quietoY = false;
    } else {
      quietoY = true;
      this.body.setVelocityY(0);
    }

    if (this.a.isDown) {
      this.body.setVelocityX(-300);
      quietoX = false;
    } else if (this.d.isDown) {
      this.body.setVelocityX(300);
      quietoX = false;
    } else {
      quietoX = true;
      this.body.setVelocityX(0);
    }

    //si se está moviendo en cualquier direccion hace la anim
    if (!(quietoX && quietoY)) {
      this.anims.play("walk", true);
    } else {
      this.anims.play("walk", false);
    }

    
  }
}
