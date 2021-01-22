import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import eventsCenter from "../eventsCenter.js";

export default class SalaBaseCombate extends SalaBase {
  constructor(name, moneco) {
    super(name, [0, 0, 0, 0], true);
    this._nombreSala = name;
    this.m = moneco;
  }

  //hereda de salabase y hace el init con us s parámetrros
  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.monecoAttacks = this.add.group();
    //la batalla ocmienza con 100 puntos de vida del muñeco y 0 de persuasión
    this.monecoLP = 100;
    this.monecoPP = 0;
    //al principio inicia mercy a false y se podrá hacer mercy cuando los puntos de persuasión superen el 100
    this.monecoMercy = false;
    this.physics.add.overlap(this.player, this.monecoAttacks);



     //una frontera para que el jugador no se pueda acercar al muñeco
    this.colliderP = this.physics.add.staticSprite(
      1200,
      this.sys.game.canvas.height / 2
    );
    this.colliderP.setSize(300, this.sys.game.canvas.height, true);
    this.physics.add.collider(this.colliderP, this.player);

    this.musicConfig = {
      mute: false,
      volume: 0.1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };
    //Al iniciar la sala de combate para toda la música(que será solo la música de ambiente)
    this.sound.stopAll();
    //se añade la canción de boss que se vaya a usar
    if (this._nombreSala === cst.SCENES.SALA18CUCU) {
      this.cancion = this.sound.add("cucu", this.musicConfig);
    } else if (this._nombreSala === cst.SCENES.SALA28DONLINDO) {
      this.cancion = this.sound.add("donlindo", this.musicConfig);
    } else if (this._nombreSala === cst.SCENES.SALA38POMPONINA) {
      this.cancion = this.sound.add("pomponina", this.musicConfig);
    } else {
      this.cancion = this.sound.add("urdemalas", this.musicConfig);
    }
    //y se reproduce
    this.cancion.play();

    //contador con las vidas del jugador
    this.text = this.add.text(50, 20, "Vidas: " + this.player.lives);
    this.text.setFontSize(80);
    this.text.depth = this.window.h + 1;
  }

  update(time, delta) {
    super.update();
    this.text.setText("Vidas: " + this.player.lives);
    //si un araque impacta en el jugado rse pierde una vida
    if (this.physics.overlap(this.player.sprite, this.monecoAttacks)) {
      this.player.lives--;
      console.log(this.player.lives);
    }

    //si las vidas son menores que 0 se muere el jugador y se va al teatro
    if (this.player.lives === 0) {
      this.player.lives = 10;
      this.finishVS();
      this.scene.start(cst.SCENES.SALA0, {
        posx: 700,
        posy: 400,
        lives: this.player.lives,
        objs: this.objetos,
        runInf: this._runInfo
      })
      
    }

    //si las vidas del muñeco son menores que 0 se inicia el dialogo de muerte del muñeco correspondiente, una vez acabado los dialogos se va al teatro
    if (this.monecoLP <= 0) {
      switch (this.m) {
        case 0:
          eventsCenter.emit("thisKey", this._nombreSala);
          this.scene.launch("dialogo", {
            npc: "matar_cucu",
            prevKey: cst.SCENES.SalaBaseCombate,
            objs: this.objetos,
            runInf: this._runInfo,
            player: this.player,
          });
          break;
        case 1:
          eventsCenter.emit("thisKey", this._nombreSala);
          this.scene.launch("dialogo", {
            npc: "matar_don_lindo",
            prevKey: cst.SCENES.SalaBaseCombate,
            objs: this.objetos,
            runInf: this._runInfo,
            player: this.player,
          });
          break;

        case 2:
          eventsCenter.emit("thisKey", this._nombreSala);
          this.scene.launch("dialogo", {
            npc: "matar_pomponina",
            prevKey: cst.SCENES.SalaBaseCombate,
            objs: this.objetos,
            runInf: this._runInfo,
            player: this.player,
          });
          break;
        case 3:
          this.scene.start(cst.SCENES.GAMEOVER);
          break;
      }
      this.scene.pause();
      this.player.resetInput();
      this.finishVS();
      if (this.m !== 3) this._runInfo._monecos[this.m] = 1;
    }
  }

  startMenu() {
    if (this.monecoAttacks.countActive() === 0) {
      //se inicia la escena de menu combate en la que aparecerán los botones, en función de lo que se pulase pasan unas cosas u otras
      this.scene.launch("mc", { objects: this.objetos, moneco: this.m });
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
    //parecido a cuando se les mata, aparece un dialogo, al acabar se va al teatro
    switch (this.m) {
      case 0:
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {
          npc: "salvar_cucu",
          prevKey: cst.SCENES.SalaBaseCombate,
          objs: this.objetos,
          runInf: this._runInfo,
          player: this.player,
        });
        break;
      case 1:
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {
          npc: "salvar_don_lindo",
          prevKey: cst.SCENES.SalaBaseCombate,
          objs: this.objetos,
          runInf: this._runInfo,
          player: this.player,
        });
        break;

      case 2:
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {
          npc: "salvar_pomponina",
          prevKey: cst.SCENES.SalaBaseCombate,
          objs: this.objetos,
          runInf: this._runInfo,
          player: this.player,
        });
        break;
    }
    this.scene.pause();
    this.player.resetInput();
    this.finishVS();
    if (this.m !== 3) this._runInfo._monecos[this.m] = 2;
  }

  //gestiona los cambios al acabar el combate
  finishVS() {
    //borra tdods los sonidos y vuelve a cargar el de ambiente
    for (let x = 0; x < this.sound.sounds.length; ) {
      this.sound.sounds[x].stop();
      this.sound.remove(this.sound.sounds[x]);
    }

    this.ambiente = this.sound.add("ambiente", this.musicConfig);
    this.ambiente.play();
    this.scene.sendToBack();
    this.lives = 10;
  }
}
