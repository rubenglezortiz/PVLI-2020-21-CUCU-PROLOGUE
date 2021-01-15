import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js";
export default class Sala34 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(cst.SCENES.SALA34,[cst.SCENES.SALA14, 0, cst.SCENES.SALA35, cst.SCENES.SALA0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create(); 
    this.camino= this.add.image(this.sys.game.canvas.width / 2+15,this.sys.game.canvas.height / 2,"pomponinacamino5")
    this.clienteBombones=new Prop(this, 300, this.sys.game.canvas.height-150,"cliente_bombones2",this.player,60,50,true);
    this.clienteBombones.play("cliente_bombones2",true);
 } 

  update() {
    super.update();  
    if(this.physics.overlap(this.player, this.clienteBombones)) {
      if (Phaser.Input.Keyboard.JustDown(this.e)) {
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"cliente2",prevKey:cst.SCENES.SALA34,objs:this.objetos});
        this.scene.pause();
        this.player.resetInput();
        if (this.objetos[objs.OBJECTS.repartoBombones])
          this.objetos[objs.OBJECTS.bombonesRepartidos2] = true;
  }
}
  }
}
