export default class Pigmalion extends Phaser.GameObjects.Container {
  constructor(scene, x, y, lives) {
    super(scene, x, y);
    
    //this.originY = 0;
    
    scene.add.existing(this);
    scene.physics.world.enable(this);
   // this.gameObject.setOrigin(0.5,1);
   
    
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
    console.log(x + "," + y)
    console.log(this);


    this.body.setSize(100,30);
   
  
   this.sprite = this.scene.physics.add.sprite(0,0,"pigmalion")  
   this.sprite.immovable = false;
   this.add([this.sprite]);
  

    // this.collider = this.scene.physics.add.sprite(0,this.sprite.height/2);
    // this.collider.setSize(80,20,true);
    // this.collider.immovable = false;
    // this.collider.setCollideWorldBounds(true);  
    // scene.physics.world.enable(this.collider);
    // console.log(this);

  
    // this.add([this.collider]);
    
  }

  preUpdate(t, dt) {
    this.depth = this.y + this.sprite.height/2;//Es la capa en la que se renderiza, cuanto mas alta mas arriba en la pantalla
   
    let quietoX = true;
    let quietoY = true;
    if (this.w.isDown) {
      this.body.setVelocityY(-500);
      quietoY = false;
    } else if (this.s.isDown) {
      this.body.setVelocityY(500);
      quietoY = false;
    } else {
      quietoY = true;
      this.body.setVelocityY(0);
    }

    if (this.a.isDown) {
      this.body.setVelocityX(-500);
      quietoX = false;
    } else if (this.d.isDown) {
      this.body.setVelocityX(500);
      quietoX = false;
    } else {
      quietoX = true;
      this.body.setVelocityX(0);
    }

    // // //si se está moviendo en cualquier direccion hace la anim
    // if (!(quietoX && quietoY)) {
    //   this.sprite.anims.play("walk", true);
    // } else {
    //   this.sprite.anims.play("walk", false);
    // }
  


  }

  resetInput() {
    this.w.reset();
    this.a.reset();
    this.s.reset();
    this.d.reset();
  }
  
}
