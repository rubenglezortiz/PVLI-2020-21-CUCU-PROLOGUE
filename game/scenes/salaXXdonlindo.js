import { cst } from "./cst.js";
import SalaBase from "./sala_base.js";
import Pigmalion from "../gameobject/pigmalion.js";
import DonLindoAttack from "../monecoAttacks/donLindoAttack.js";
import MenuCombate from "../scenes/menuCombate.js";
import eventsCenter from "../eventsCenter.js";

export default class SalaXXPomponina extends SalaBase {
  constructor() {
    super(cst.SCENES.SALAXXDONLINDO, [0, 0, 0, 0]);
  }

  init(datos) {
    super.init(datos);
  }
  create() {
    //-------------------------//
    //HERENCIA BIEN HECHA??
    super.create();
    this.add.image(700, 400, "telon");
    this.add.image(1100, 350, "carreta").setScale(6);
    //-------------------------//

    //ANIMACIÓN POMPONINA
    this.monecoAttacks = this.add.group();
    this.monecoLP = 100;
    this.monecoPP = 0;
    this.monecoMercy = false;
    this.physics.add.overlap(this.player, this.monecoAttacks);
    this.startVS();
  }

  update() {
    super.update();
    //ANIMACIÓN ATAQUE
    if (this.physics.overlap(this.player, this.monecoAttacks)) {
      this.player.lives--;
      console.log(this.player.lives);
    }
    if (this.player.lives === 0) {
      this.player.lives = 10;
      this.finishVS();
    }
  }
  startVS() {
    if (this.monecoLP >= 50) this.pomponinaAttack();
    else this.pomponinaAttackV2();
    this.time.delayedCall(5000,()=>{this.startMenu()});
  }

  pomponinaAttack() {
    this.timer = this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.donLindoAt =new DonLindoAttack(this, 0,0,"shoot");
        this.monecoAttacks.add(this.donLindoAt);
      },
      repeat: 3,
    });
  }

  pomponinaAttackV2() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        
      },
      repeat: 3,
    });
   
  }

  //---------------------------------------------------------
  //HERENCIA
  startMenu() {
    if (this.monecoAttacks.countActive() === 0){ 
        this.scene.launch("mc");
        eventsCenter.emit("thisKey", "salaXXPomponina");
        eventsCenter.emit("canMercy", this.monecoPP);
        eventsCenter.on("damage", this.damage, this);
        eventsCenter.on("persuade", this.persuade, this);
        eventsCenter.on("isMercy", this.mercy, this);
        this.events.on(Phaser.Scenes.Events.RESUME, () => {
          eventsCenter.off("damage", this.damage, this);
          eventsCenter.off("persuade", this.persuade, this);
          eventsCenter.off("isMercy", this.mercy, this);
        });
        this.startVS();
        this.scene.pause();
        this.player.resetInput();
     
    }
    else this.time.delayedCall(3000,()=>{this.startMenu()});
    }
  
  //-----------------------------------------------------------

  damage(damage) {
    this.monecoLP -= damage;
    console.log(this.monecoLP);
  }
  persuade(persuade) {
    this.monecoPP += persuade;
    console.log(this.monecoPP);
  }

  mercy(mercy) {
    //HABRÍA QUE AJUSTAR PARÁMETROS, VER SI SE SALVA EL MUNECO ETC.
    if (mercy) {
      this.finishVS();
    }
  }

  finishVS(win) {
    this.scene.start(cst.SCENES.SALA0, {
      posx: this.player.x,
      posy: this.player.y,
      lives: this.player.lives,
    });
  }
}
