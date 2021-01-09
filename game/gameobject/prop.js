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
    this.setScale(sc); this.posYE=this.y-this.height*sc+20;
    this.interFunction = interFunct;

    //20 va a ser la altura de todos
    this.colliderP = this.scene.physics.add.staticSprite(this.x,this.y + (this.height * this.scale * this.posYC) / 100 - 20);
    this.colliderP.setSize((this.width * this.scale * this.anchoPC) / 100, 20, true);
    this.scene.physics.add.collider(this.colliderP, this.pigmalion.collider);
    this.int = interactive;
    if (this.int) {
      this.propE = this.scene.add.image(x,this.posYE,"teclaE"); 
      this.propE.depth = 6
      this.e = this.scene.input.keyboard.addKey("E", false);
    }    
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    //como el offset está a 0.5 hay que restarle la mitad
   
    if (this.colliderP.y < this.pigmalion.y + (this.pigmalion.height / 2) * this.pigmalion.scale) this.depth = 2;
    else this.depth = 4;

    if (this.int){      
      if (this.scene.physics.overlap(this, this.pigmalion)){
        this.propE.visible = true; 

      }
      else this.propE.visible = false;      
    }
  }
}
