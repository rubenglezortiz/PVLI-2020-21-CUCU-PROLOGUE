class Pigmalion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type) {
    super(scene, x, y, type);
    console.log(this);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(false);
    //this.anim = type;
  }

  create() {
    this.w = this.scene.input.keyboard.addKey("W");
    this.a = this.scene.input.keyboard.addKey("A");
    this.s = this.scene.input.keyboard.addKey("S");
    this.d = this.scene.input.keyboard.addKey("D");
    console.log(this.anim);
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

  update() {
    //derecha
    let quietoX = true;
    let quietoY= true;

      if (this.w.isDown) {
        this.body.setVelocityY(-300);
        quietoY= false;
      }
      else if (this.s.isDown) {
        this.body.setVelocityY(300);
        quietoY= false;
      }
      else{
        quietoY= true;
        this.body.setVelocityY(0);
      }
      

      if (this.a.isDown) {
        this.body.setVelocityX(-300);
        quietoX = false;
      }
      else if (this.d.isDown) {
        this.body.setVelocityX(300);
        quietoX = false;
      }
      else{
        quietoX = true;
        this.body.setVelocityX(0);
      }
      
      //si se está moviendo en cualquier direccion hace la anim
    if(!(quietoX && quietoY)){
        this.anims.play("walk", true);
    }
    else{
      this.anims.play("walk", false);

    }

    if (this.x < 0) {
      this.player.x = this.sys.game.canvas.width - 1;

      this.scene.start(cst.SCENES.SALA1);
    }
    if (this.x > 1400) {
      this.x = 1;
    }
    if (this.y < 0) {
      this.y = this.sys.game.canvas.height - 1;
    }
    if (this.y > 800) {
      this.y = 1;
    }
  }
}

export default Pigmalion;
