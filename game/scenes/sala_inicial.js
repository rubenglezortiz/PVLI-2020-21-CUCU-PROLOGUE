import Prop from "../gameobject/prop.js";
import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import { npcs } from "./npcs.js";

export default class SalaInicial extends SalaBase {
  // <-  ^   ->   v
  constructor() {
    super(cst.SCENES.SALAINICIAL, [0, 0, 0, 0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.dialgoIni();
  }

  dialgoIni = function () {
    this.scene.launch("dialogo", {
      npc: npcs.NPCS.inicial,
      prevKey: cst.SCENES.SALAINICIAL,
      objs: this.objetos,
      runInf: this._runInfo,
      lives: this.lives,
      player: this.player,
    });
    this.scene.pause();
  };
}
