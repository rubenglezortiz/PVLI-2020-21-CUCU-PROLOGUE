import Prop from "../gameobject/prop.js";
import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";

export default class Sala0 extends SalaBase {
  // <-  ^   ->   v
  constructor() {
    super(cst.SCENES.SALA0,[cst.SCENES.SALA11,cst.SCENES.SALA34,cst.SCENES.SALA31,cst.SCENES.SALA21,],false);
  }

  init(datos) {
    super.init(datos);
    console.log(this);
  }

  create() {
    super.create();  
    this.camino = this.add.image(700, 400, "cucucamino4");
    this.camino.depth = 1;
    this.objA = [];
    this.infoA = [{ x: 300, y: 250, moneco:"cucu_idl" },{ x: 1100, y: 250, moneco: "don_lindo_idl" },{ x: 300, y: 650,moneco: "pomponina_idl" },];
    this.cajas();

  }

  update() {
    super.update();
    for(let i = 0 ; i < 3 ; ++i){
      if(this._runInfo._monecos[i] === 2)
      this.objA[i].play(this.infoA[i].moneco,true);
    }
   
  }

  cajas() {
    this.noPlayed=0; this.killed=0; this.saved=0;

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
    this.cajaUrd=new Prop(this,1100,650,"caja_urdemalas",this.play,60,50,false)
    if(this.noPlayed===0){
      if(this.killed===3)   
        this.final=1;      
      else if(this.saved===3)  
        this.final=2;      
      else       
        this.final=0;
      
      this.scene.start(cst.SCENES.FINAL, {
        posx: this.window.w/2,
        posy: this.window.h/2,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo,
        tipoFinal: this.final
      });
    }
  }
}
