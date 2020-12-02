import Shoot from "../shoot.js";
import Explosion from "../explosion.js";
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
    this.e = this.scene.input.keyboard.addKey("E");
    this.r = this.scene.input.keyboard.addKey("R");
    console.log(this.anim);
    
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
    if (this.e.isDown) {
      let xx = this.scene.sys.game.canvas.width;
      let yy = Phaser.Math.Between(0, this.scene.sys.game.canvas.height);
      this.disparo = new Shoot({
        scene: this.scene,
        x: xx,
        y: yy,
        type: "shoot",
      });
    }
    if (this.r.isDown) {
      let xx = Phaser.Math.Between(0, this.scene.sys.game.canvas.width);
      let yy = Phaser.Math.Between(0, this.scene.sys.game.canvas.height);
      this.explosion = new Explosion({
        scene: this.scene,
        x: xx,
        y: yy,
        type: "shoot",
      });
    }
    //si se está moviendo en cualquier direccion hace la anim
    if (!(quietoX && quietoY)) {
      this.anims.play("walk", true);
    } else {
      this.anims.play("walk", false);
    }

    if (this.x < 0) {
      this.x = this.scene.sys.game.canvas.width - 1; //PARA EL DAILY: EL FALLO ESTÁ CORREGIDO EN LAS LINEAS 59 Y 60 LO DEJO SIN ARREGLAR PARA COMENTARLO
      this.scene.start("sala1");
    }
    if (this.x > 1400) {
      this.x = 1;
    }
    if (this.y < 0) {
      this.y = this.scene.sys.game.canvas.height - 1;
    }
    if (this.y > 800) {
      this.y = 1;
    }
  }
}
