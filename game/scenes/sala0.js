import Prop from "../gameobject/prop.js";
import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import { objs } from "./objeto.js";

export default class Sala0 extends SalaBase {
  // <-  ^   ->   v
  constructor() {
    super(cst.SCENES.SALA0,[cst.SCENES.SALA11,cst.SCENES.SALA34,cst.SCENES.SALA31,0,],false);
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
    this.infoA = [{ x: 300, y: 250, moneco:"cucuIdle" },{ x: 1100, y: 250, moneco: "donLindo" },{ x: 300, y: 850,moneco: "pomponinaIdle" },];
    this.cajas();


    this.anims.create({
      key: "cucuIdle",
      frames: this.anims.generateFrameNumbers("cucuIdle", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });
    //ANIMACION DON LINDO CRRUUUUUUK
    this.anims.create({
      key: "pomponinaIdle",
      frames: this.anims.generateFrameNumbers("pomponinaIdle", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });
  }

  update() {
    super.update();
    console.log();
    // if(this.objA[i]===2)
    //  this.objA[0].play(this.infoA[0].moneco,true);
    for(let i = 0 ; i < 3 ; ++i){
      if(this._runInfo._monecos[i] === 2)
      this.objA[i].play(this.infoA[i].moneco,true);
    }
   
    // if (
    //   this.caja.propE.visible /*this.physics.overlap(this.player, this.caja)*/
    // ) {
    //   if (Phaser.Input.Keyboard.JustDown(this.e)) {
    //     this.objetos[objs.OBJECTS.caja] = true;
    //     console.log(this.objetos[objs.OBJECTS.caja]);
    //     eventsCenter.emit("thisKey", this._nombreSala);
    //     this.scene.launch("dialogo", {
    //       npc: "caja",
    //       prevKey: cst.SCENES.SALA0,
    //       objs: this.objetos,
    //     });
    //     this.scene.pause();
    //     this.player.resetInput();
    //   }
    // }
  }

  cajas() {
    this.noPlayed=0; this.killed=0; this.saved=0;

    for (let i = 0; i < 3; ++i) {      
        if (this._runInfo._monecos[i] === 0) {
          this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,"caja",this.player,1,60,50,false);
          this.noPlayed++;
        } else if (this._runInfo._monecos[i] === 1) {
          this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,"cajaCerrada",this.player,1,60,50,false);
          this.killed++;
        } else {
          this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,this.infoA[i].moneco,this.player,1,60,50,false);
          this.objA[i].play(this.objA[i].moneco,true);
          this.saved++;
        }      
    }

    if(this.noPlayed===0){
      if(this.killed===3){
        console.log("inicio combate urdemalas");
        this.final=1;
      }
      else if(this.saved===3){
        console.log("todos salvados :)");
        this.final=2;
      }
      else{
        console.log("has matado y salvado");
        this.final=0;
      }
      this.scene.start(cst.SCENES.FINALNEUTRAL, {
        posx: this.sys.game.canvas.width/2,
        posy: this.sys.game.canvas.height,
        lives: this.lives,
        objs: this.objetos,
        runInf: this._runInfo,
        tipoFinal: this.final
      });
    }
  }
}
