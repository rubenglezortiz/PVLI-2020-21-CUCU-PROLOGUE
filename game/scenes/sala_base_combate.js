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
    this.physics.add.collider(this.colliderP, this.player);
    
    
    this.musicConfig = {
      mute: false,
      volume: 0.1,
      rate:1,
      detune:0,
      seek:0,
      loop:true,
      delay: 0
     }
     
   
     this.sound.stopAll(); 
    if(this._nombreSala === cst.SCENES.SALA18CUCU){
      this.circo = this.sound.add('cucu', this.musicConfig);
      this.circo.play();
    }
    else if(this._nombreSala === cst.SCENES.SALA28DONLINDO){
      this.donlind = this.sound.add('donlindo', this.musicConfig);
      this.donlind.play();
    }
    else if(this._nombreSala === cst.SCENES.SALA38POMPONINA){
      this.pomp = this.sound.add('pomponina', this.musicConfig);
      this.pomp.play();
    }
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
      if(this.m!==3)
        this._runInfo._monecos[this.m] = 1;
    }
    if(this.monecoMercy){
      if(this.m!==3)
        this._runInfo._monecos[this.m] = 2;
      this.finishVS();
    }
  }

  startMenu() {
    if (this.monecoAttacks.countActive() === 0) {
      this.scene.launch("mc", { objects: this.objetos, moneco:  this.m});
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

    //para reanudar la musica de ambiente
    this.sound.stopAll();
    this.ambiente = this.sound.add('ambiente', this.musicConfig);
    this.ambiente.play();

    if(this.m!==3){
      this.scene.start(cst.SCENES.SALA0, {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.player.lives,
        objs: this.objetos,
        runInf: this._runInfo,
      });
    }
    else{
      console.log("fin del juego")
    }
  }
}