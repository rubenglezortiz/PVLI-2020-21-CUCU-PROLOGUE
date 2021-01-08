import { cst } from "./cst.js";
import SalaBaseCombate from "./sala_base_combate.js";
import DonLindoAttack from "../monecoAttacks/donLindoAttack.js";
import eventsCenter from "../eventsCenter.js";
import Explosion from "../monecoAttacks/explosion.js";

export default class Sala28donlindo extends SalaBaseCombate {
  constructor() {
    super(cst.SCENES.SALA28DONLINDO);
  }

  init(datos) {
    super.init(datos);
  }
  create() {   
    super.create();
    //ANIMACIÓN Y DECORADO
    this.startVS();
  }

  update() {
    super.update();   
  }

  startVS() {
    if (this.monecoLP >= 50) this.donlindoAttack();
    else this.donlindoAttackV2();
    this.time.delayedCall(5000,()=>{this.startMenu()});
  }

  donlindoAttack() {
    this.timer = this.time.addEvent({
      delay: 4000,
      callback: () => {
        this.donLindoAt =new DonLindoAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2,"shoot", this.player);
        this.monecoAttacks.add(this.donLindoAt);
      },
      repeat: 3,
    });
  }

  donlindoAttackV2() {
    this.timer = this.time.addEvent({
      delay: 3500,
      callback: () => {
        this.donLindoAt =new DonLindoAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2,"shoot", this.player);
        this.monecoAttacks.add(this.donLindoAt);
      },
      repeat: 5,
    });
    this.timer2=this.time.addEvent({
      delay: 5000,
      callback:()=>{
        this.expl =new Explosion(this, Phaser.Math.Between(0,this.sys.game.canvas.width),Phaser.Math.Between(0,this.sys.game.canvas.height),"pigmalion",this.player);
        this.monecoAttacks.add(this.expl);
      },
      repeat: 3,
    })   
  }
}
