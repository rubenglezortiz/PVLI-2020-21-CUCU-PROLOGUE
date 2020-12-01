export default class Explosion extends Phaser.GameObjects.Sprite {
    constructor(config) {
      super(config.scene, config.x, config.y, config.type);
      config.scene.add.existing(this);
      this.timer = 0;
    }
    
    preUpdate(time,delta)
    {
      this.timer += delta;
      if (this.timer > 1000) {
          this.destroy();
    }
    }
}