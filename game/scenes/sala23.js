import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import { npcs } from "./npcs.js";
import { objs } from "./objeto.js";
import eventsCenter from "../eventsCenter.js";

export default class Sala23 extends SalaBase {
  constructor() {
    super(
      cst.SCENES.SALA23,
      [cst.SCENES.SALA22, cst.SCENES.SALA32, 0, 0],
      false
    );
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(this.sys.game.canvas.width / 2 + 15,this.sys.game.canvas.height / 2,"donlindocamino4");
    this.camino.flipX = true;this.tiendamusica = new Prop(this,1150,500,"tiendademusica",this.player,80,50,false);
    this.dependientamusica = new Prop(this,this.sys.game.canvas.width / 2,(this.sys.game.canvas.height / 5) * 3,"dependientamusica",this.player,60,50,true,this.interactuarDepMusica,this);
    this.dependientamusica.play("dependientamusica", true);
  }

  update() {
    super.update();
  }

  interactuarDepMusica = function () {
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {
      npc: npcs.NPCS.dependienta_musica,
      prevKey: cst.SCENES.SALA23,
      objs: this.objetos,
    });
    this.scene.pause();
    this.player.resetInput();
    if (this.objetos[objs.OBJECTS.cartera])
      this.objetos[objs.OBJECTS.ukelele] = true;
  };
}
