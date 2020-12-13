export default class GameObject extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type, pigmalion) {
    super(scene, x, y, type, pigmalion);
    console.log(this);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(false);
    this.player = pigmalion;
    



    this.trigger = this.add.zone(300, 200);
    this.trigger.setSize(200, 200);
    this.physics.world.enable(trigger);
    this.trigger.body.setAllowGravity(false);
    this.trigger.body.moves = false;
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    
    if(this.physics.overlap(this.player, this.trigger)) {
      textInfo.text = "Hay solape";
  }
  }
}
