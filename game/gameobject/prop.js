export default class Prop extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, nombreSprite, player, sc,  wC, yC) {
    super(scene, x, y, nombreSprite);
    
    //this.originY = 0;
    this.anchoPC = wC;
    this.posYC = yC;
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(true);
    this.pigmalion = player;
    this.setScale(sc);

    
    //20 va a ser la altura de todos
    this.colliderP = this.scene.physics.add.staticSprite(this.x , this.y + this.height*this.scale*this.posYC/100 - 20);
    this.colliderP.setSize(this.width*this.scale * this.anchoPC/100 ,20,true);
    this.scene.physics.add.collider(this.colliderP, this.pigmalion.collider);

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    
    //como el offset está a 0.5 hay que restarle la mitad
    if (this.colliderP.y < (this.pigmalion.y + this.pigmalion.height/2*this.pigmalion.scale)) {
      this.depth = 2;
    } else {
      this.depth = 4;
    }
  }
}
