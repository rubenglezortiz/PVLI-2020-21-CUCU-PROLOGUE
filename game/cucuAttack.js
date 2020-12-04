import Explosion from "./explosion";
import Shoot from "./shoot";

export default class CucuAttack extends Shoot{

    constructor(config) {
        console.log(typeof config);
        super(config.scene, config.x, config.y, config.type);
        config.scene.add.existing(this);
      }
      
    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.x -= 10;
        if (this.x < 0) {
          this.destroy();
        }
      }
}