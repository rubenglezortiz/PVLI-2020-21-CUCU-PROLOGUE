export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {
    this.load.spritesheet("pigmalion", "./resources/sprites/pigmalion.png", {
      frameWidth: 192,
      frameHeight: 192,
    });
    // spritesheet 384x512
    this.load.image("background", "./resources/sprites/background.png");
    this.load.image("objetovacio", "./resources/sprites/objetovacio.png");

  }

  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    let { width, height } = this.sys.game.canvas;
    //como que var hijo de puta que el cleon nos suspender
    let edificio = this.physics.add.sprite(0, 175, "objetovacio");
    this.add.image(700, 400, "background");
    this.player = this.physics.add.sprite(300, 300, "pigmalion");

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("pigmalion", {
        start: 0,
        end: 12,
      }),
      frameRate: 20,
      repeat: 1,
    });

    this.physics.add.collider(this.player, edificio);

    this.w = this.input.keyboard.addKey("W");
    this.a = this.input.keyboard.addKey("A");
    this.s = this.input.keyboard.addKey("S");
    this.d = this.input.keyboard.addKey("D");
  }

  update(time, delta) {
    if (this.w.isDown || this.a.isDown || this.s.isDown || this.d.isDown) {
      if (this.w.isDown) {
        this.player.y -= 4;
        this.player.anims.play("walk", true);
      }
      if (this.a.isDown) {
        this.player.x -= 4;
        this.player.anims.play("walk", true);
      }
      if (this.s.isDown) {
        this.player.anims.play("walk", true);
        this.player.y += 4;
      }
      if (this.d.isDown) {
        this.player.x += 4;
        this.player.anims.play("walk", true);
      }
    } else {
      this.player.anims.play("walk", false);
    }

    if (this.player.x < 0) {
      this.player.x = this.sys.game.canvas.width - 1;
    }
    if (this.player.x > 1400) {
      this.player.x = 1;
    }
    if (this.player.y < 0) {
      this.player.y = this.sys.game.canvas.height - 1;
    }
    if (this.player.y > 800) {
      this.player.y = 1;
    }
  }
}
