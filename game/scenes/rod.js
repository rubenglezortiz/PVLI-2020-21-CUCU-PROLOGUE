import eventsCenter from "../eventsCenter.js";
import menuCombate from "./menuCombate.js";
export default class rod extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.type);
        config.scene.add.existing(this);
        this.parar = this.scene.input.keyboard.addKey("Space");
  };
  create()
  {
    
    this.derecha1 = true;
    this.active = true;
  }
  preUpdate(t, dt)
  {
      if (this.active)
      {
        if (this.derecha1) this.x += 10;
        else this.x -= 10;
        if (this.x > 1025) this.derecha1 = false;
        else if (this.x < 380) this.derecha1 = true;
      }
      if (this.parar.isDown) {
       { 
          this.active = false;
          eventsCenter.emit("salir", true);
       }
      }
  }
}
