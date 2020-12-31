export default class Prop extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, nombreSprite, player) {
    super(scene, x, y, nombreSprite);
    
    //this.originY = 0;

    console.log(this);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(true);
    //this.anim = type;
    this.pigmalion = player;
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    
    //como el offset está a 0.5 hay que restarle la mitad
    if ((this.y + this.height/2*this.scale )< (this.pigmalion.y + this.pigmalion.height/2*this.pigmalion.scale)) {
      this.depth = 2;
    } else {
      this.depth = 4;
    }
  }
}
