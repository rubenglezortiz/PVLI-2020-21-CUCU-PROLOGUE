import Prop from "../gameobject/prop.js";
import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import eventsCenter from "../eventsCenter.js";

export default class FinalNeutral extends SalaBase {
  // <-  ^   ->   v
  constructor() {
    super(cst.SCENES.FINAL,[0,0,0,0],false);
  }

  init(datos) {
    super.init(datos);    
    this.final="urdemalas"+datos.tipoFinal;
    console.log(this.final);
    
  }

  create() {
    super.create();  
    this.camino = this.add.image(700, 400, "cucucamino4");
    this.camino.depth = 1;
    this.objA = [];
    this.infoA = [{ x: 300, y: 250, moneco:"cucu_idl" },{ x: 1100, y: 250, moneco: "donlindo_idl" },{ x: 300, y: 650,moneco: "pomponina_idl" },];
    this.cajas();
    this.urdemalas= new Prop(this,this.sys.game.canvas.width-200,this.sys.game.canvas.height/2+60,"urdemalas_idl",this.player,60,50,true,this.iniciarCombate,this);
    this.urdemalas.play("urdemalas_idl");
  }

  update() {
    super.update();
    console.log();
    for(let i = 0 ; i < 3 ; ++i){
      if(this._runInfo._monecos[i] === 2)
      this.objA[i].play(this.infoA[i].moneco,true);
    }

    // if(this.physics.overlap(this.player, this.urdemalas)) {
    //   if (Phaser.Input.Keyboard.JustDown(this.e)) {
    //     eventsCenter.emit("thisKey", this._nombreSala);
    //     this.scene.launch("dialogo", {npc:this.final,prevKey:cst.SCENES.FINAL,objs:this.objetos, runInfo:this._runInfo});
    //     this.scene.pause();
    //     this.player.resetInput();
            
    //   }
    // }     
  }

  cajas() {
        for (let i = 0; i < 3; ++i) {      
            if (this._runInfo._monecos[i] === 0) {
                this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,"caja",this.player,60,50,false);
                this.noPlayed++;
            } else if (this._runInfo._monecos[i] === 1) {
                this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,"caja_cerrada",this.player,60,50,false);
                this.killed++;
            } else {
                this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,this.infoA[i].moneco,this.player,60,50,false);
                this.objA[i].play(this.objA[i].moneco,true);
                this.saved++;
            }         
        }
  }
  
  iniciarCombate = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
      this.scene.launch("dialogo", {npc:this.final,prevKey:cst.SCENES.FINAL,objs:this.objetos, runInfo:this._runInfo});
      this.scene.pause();
      this.player.resetInput();
  }
}
