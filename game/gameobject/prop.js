export default class Prop extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, nombreSprite, player, sc, wC, yC, interactive, interFunct) {
    super(scene, x, y, nombreSprite);
    this.anchoPC = wC;
    this.posYC = yC;
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(true);
    this.pigmalion = player;
    this.setScale(sc); this.posYE=this.y-this.height;
    this.interFunction = interFunct;

    //20 va a ser la altura de todos
    //colliderP es el collider estático que tineen la mayoria de
    //props justo debajo, para que se choque con los pies de pigmalion
    this.colliderP = this.scene.physics.add.staticSprite(this.x,this.y + (this.height * this.scale * this.posYC) / 100);
    this.colliderP.setSize((this.width * this.scale * this.anchoPC) / 100, 20, true);
    this.scene.physics.add.collider(this.colliderP, this.pigmalion.collider);
    this.int = interactive;
   
   
    //esto es para el triger en el que sale una E para interactuar
    if (this.int) {
      this.propE = this.scene.add.image(x, y - this.height/2,"teclaE");
      this.propE.y -= this.propE.height/2;
      this.propE.depth = 6
      this.e = this.scene.input.keyboard.addKey("E", false);
    }    
    console.log(this);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.depth = this.y + this.height/2;
    //como el offset está a 0.5 hay que restarle la mitad
   
    

    if (this.int){      
      if (this.scene.physics.overlap(this, this.pigmalion)){
        this.propE.visible = true;
        this.propE.depth=this.depth;
      }
      else this.propE.visible = false;      
    }
  }
}
