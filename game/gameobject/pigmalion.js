export default class Pigmalion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, lives, type) {
    super(scene, x, y, type);
    
    //this.originY = 0;
    
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = false;
    this.body.setCollideWorldBounds(true);
    
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
    this.lives = lives;
    this.w = this.scene.input.keyboard.addKey("W");
    this.a = this.scene.input.keyboard.addKey("A");
    this.s = this.scene.input.keyboard.addKey("S");
    this.d = this.scene.input.keyboard.addKey("D");
    this.depth = 3;//Es la capa en la que se renderiza, cuanto mas alta mas arriba en la pantalla
    
    this.collider = this.scene.physics.add.sprite(this.x,this.y);
    this.collider.setSize(80,20,true);
    this.collider.immovable = false;
    this.collider.setCollideWorldBounds(true);  
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    let quietoX = true;
    let quietoY = true;
    if (this.w.isDown) {
      this.collider.setVelocityY(-300);
      quietoY = false;
    } else if (this.s.isDown) {
      this.collider.setVelocityY(300);
      quietoY = false;
    } else {
      quietoY = true;
      this.collider.setVelocityY(0);
    }

    if (this.a.isDown) {
      this.collider.setVelocityX(-300);
      quietoX = false;
    } else if (this.d.isDown) {
      this.collider.setVelocityX(300);
      quietoX = false;
    } else {
      quietoX = true;
      this.collider.setVelocityX(0);
    }

    //si se está moviendo en cualquier direccion hace la anim
    if (!(quietoX && quietoY)) {
      this.anims.play("walk", true);
    } else {
      this.anims.play("walk", false);
    }
    this.x = this.collider.x;
    this.y = this.collider.y - this.height/2 + this.collider.height/2;


  }

  resetInput() {
    this.w.reset();
    this.a.reset();
    this.s.reset();
    this.d.reset();
  }
  
}
