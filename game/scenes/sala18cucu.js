import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";
import MenuCombate from "../scenes/menuCombate.js";
import eventsCenter from "../eventsCenter.js"

export default class Sala18CUCU extends Phaser.Scene {
  constructor() {
    super({ key: "SALA18CUCU" });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
    console.log("init");
  }

  create() {
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, 200, 200, "pigmalion");
    this.lives = 10; //esto lo debería llevar player
    this.flash = 0; //esto puede estar aquí, pero es muy chapucero
    this.monecoAttacks = this.physics.add.group();
    this.monecoLP = 100;
    this.monecoPP = 0;
    this.physics.add.overlap(this.player, this.monecoAttacks);
    this.cucuAttackF();
  }

  update(time, delta) {
    if (this.flash === 0)
      if (this.physics.overlap(this.player, this.monecoAttacks)) {
        this.lives--;
        this.flash = 100;
        console.log(this.lives);
      }
    if (this.flash >= 1) this.flash--;
  }

  cucuAttackF() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        let xx = this.sys.game.canvas.width;
        let yy = Phaser.Math.Between(
          this.player.y - this.player.height / 2,
          this.player.y + this.player.height / 2
        );
        this.cucuAt = new CucuAttack({
          scene: this,
          x: xx,
          y: yy,
          type: "cucuat",
        });
        this.monecoAttacks.add(this.cucuAt);
      },
      repeat: 3,
    });

    this.timerMenu = this.time.delayedCall(12000, () => {
      this.scene.launch("mc");     
      eventsCenter.on("damage",this.damage,this);
      this.events.on(Phaser.Scenes.Events.RESUME, () => {
        eventsCenter.off('damage', this.damage, this)
      })
      this.cucuAttackF();
      this.scene.pause();
    });
    
    
  }

  damage(damage){
    this.monecoLP-=damage;
    console.log(this.monecoLP);
  }
}
