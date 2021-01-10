import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import eventsCenter from "../eventsCenter.js";

export default class SalaBaseCombate extends SalaBase {
  constructor(name, moneco) {
    super(name, [0, 0, 0, 0], true);
    this._nombreSala = name;
    this.m = moneco;
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.monecoAttacks = this.add.group();
    this.monecoLP = 3;
    this.monecoPP = 99;
    this.monecoMercy = false;
    this.physics.add.overlap(this.player, this.monecoAttacks);

    this.colliderP = this.physics.add.staticSprite(
      1200,
      this.sys.game.canvas.height / 2
    );
    this.colliderP.setSize(300, this.sys.game.canvas.height, true);
    this.physics.add.collider(this.colliderP, this.player.collider);
  }

  update(time, delta) {
    super.update();   
    if (this.physics.overlap(this.player, this.monecoAttacks)) {
      this.player.lives--;
      console.log(this.player.lives);
    } 

    if(this.player.lives===0){
      this.player.lives=10;
      this.finishVS();
    }

    if(this.monecoLP<=0){
      this.finishVS();
      this._runInfo._monecos[this.m] = 1;
    }
    if(this.monecoMercy){
      this._runInfo._monecos[this.m] = 2;
      this.finishVS();
    }
  }

  startMenu() {
    if (this.monecoAttacks.countActive() === 0) {
      this.scene.launch("mc", { objects: this.objetos });
      eventsCenter.emit("thisKey", this._nombreSala);
      eventsCenter.emit("canMercy", this.monecoPP);
      eventsCenter.on("damage", this.damage, this);
      eventsCenter.on("persuade", this.persuade, this);
      eventsCenter.on("isMercy", this.mercy, this);
      this.events.on(Phaser.Scenes.Events.RESUME, () => {
        eventsCenter.off("damage", this.damage, this);
        eventsCenter.off("persuade", this.persuade, this);
        eventsCenter.off("isMercy", this.mercy, this);
      });
      this.scene.pause();
      this.player.resetInput();
      this.startVS();
    } else
      this.time.delayedCall(500, () => {
        this.startMenu();
      });
  }

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
      this.monecoMercy=true;
    }
  }

  finishVS() {    
    this.scene.start(cst.SCENES.SALA0, {
      posx: this.player.x,
      posy: this.player.y,
      lives: this.player.lives,
      objs: this.objetos,
      runInf: this._runInfo,
    });
  }
}
