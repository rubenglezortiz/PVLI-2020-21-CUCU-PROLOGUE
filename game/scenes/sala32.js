import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js";
export default class Sala32 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(cst.SCENES.SALA32,[cst.SCENES.SALA31,cst.SCENES.SALA35,cst.SCENES.SALA33,cst.SCENES.SALA23,],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.sys.game.canvas.width / 2+15,this.sys.game.canvas.height / 2,"pomponinacamino3")
    this.fuente = new Prop(this,this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, "fuente", this.player, 1, 60, 45, false,);
    this.anims.create({
      key: "fuenteAnim",
      frames: this.anims.generateFrameNumbers("fuente", {
        start: 0,
        end: 5,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.hijoFlorista = new Prop(this,this.sys.game.canvas.width / 2, 600,"hijo_florista",this.player,1,60,50,true);
    this.anims.create({
      key: "hijoFloristaAnim",
      frames: this.anims.generateFrameNumbers("hijo_florista", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });
  
    this.cliente = new Prop(this,1150,700,"cliente_bombones1",this.player,1,60,50,true);
    this.anims.create({
     key:"clienteAnim",
     frames: this.anims.generateFrameNumbers("cliente_bombones1",{
       start: 0,
       end: 6
     }),
     frameRate: 5,
     repeat:-1,
   })
  
   }

  update() {
    super.update();
    this.fuente.play("fuenteAnim", true);
    this.hijoFlorista.play("hijoFloristaAnim", true);
    this.cliente.play("clienteAnim",true)
    if(this.physics.overlap(this.player, this.cliente)) {
      if (Phaser.Input.Keyboard.JustDown(this.e)) {
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"cliente",prevKey:cst.SCENES.SALA32,objs:this.objetos});
        this.scene.pause();
        this.player.resetInput();
        if (this.objetos[objs.OBJECTS.repartoBombones])
          this.objetos[objs.OBJECTS.bombonesRepartidos1] = true;
  }
}
if(this.physics.overlap(this.player, this.hijoFlorista)) {
  if (Phaser.Input.Keyboard.JustDown(this.e)) {
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:"hijoFlorista",prevKey:cst.SCENES.SALA32,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();
    if (this.objetos[objs.OBJECTS.floresHijo])
      this.objetos[objs.OBJECTS.hijoAyudado] = true;
}
}
if(this.physics.overlap(this.player, this.fuente)) {
  if (Phaser.Input.Keyboard.JustDown(this.e)) {
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:"fuente",prevKey:cst.SCENES.SALA32,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();
      this.objetos[objs.OBJECTS.llaveComoda] = true;
}
}
  }
}
