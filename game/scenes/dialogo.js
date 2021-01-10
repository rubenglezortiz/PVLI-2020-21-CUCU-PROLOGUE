import { npcs } from "./npcs.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js"
export default class Dialogo extends Phaser.Scene {
  constructor() {
    super({ key: "dialogo" });
  }

  init(datos) {
    this.npc = datos.npc;
    this.prevKey = datos.prevKey;
    this.objetos = datos.objs;
  }
  create() {
    //habria que crear los arrays y todos los mensajes de cada muñeco
    this.scene.bringToTop();
    this.events.on(Phaser.Scenes.Events.RESUME, () => {
      eventsCenter.on("thisKey", this.prevScene, this);
      eventsCenter.off("thisKey", this.prevScene, this);
    });
    this.menu = this.add.image(700, 500, "mc");
    this.menu.setAlpha(0.5);
    if(this.objetos[objs.OBJECTS.caja])  
      this.bebe = ["¡Qué caja más bonita!"];
    else this.bebe = ["agugutata", "jaja ruben es tonto"];
    this.caja = ["Has conseguido una caja"];
    this.iterator = 0;
    this.e = this.input.keyboard.addKey("E");

    this.text = this.add.text(500, 500, this.bebe[this.iterator]);
    this.text.setFontSize(50);
  }

  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.e)) {
      this.iterator++;
    }
    switch (this.npc) {
      case npcs.NPCS.bebe:
        if (this.iterator != this.bebe.length)
          this.text.setText(this.bebe[this.iterator]);
        else {
          this.scene.pause();
          this.scene.resume(this.prevKey);
          this.scene.sendToBack();
        }
        break;
      case npcs.NPCS.caja:
        if (this.iterator != this.caja.length)
          this.text.setText(this.caja[this.iterator]);
        else {
          this.scene.pause();
          this.scene.resume(this.prevKey);
          this.scene.sendToBack();
        }
        break;
      default:
        console.log("error en el switch de diálogo");
        break;
    }
  }
  prevScene(key) {
    this.prevKey = key;
    console.log(this.prevKey);
  }
}