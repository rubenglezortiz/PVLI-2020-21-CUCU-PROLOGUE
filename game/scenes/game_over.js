//FALTA LLAMAR A ESTA SALA CUANDO SE GANA EL COMBATE CONTRA URDEMALASS
import {cst} from "./cst.js"
export default class GameOver extends Phaser.Scene {
  // <-  ^   ->   v
  constructor() { 
    super({ key: cst.SCENES.GAMEOVER });
  }

   create() {
    this.scene.bringToTop();
    console.log("ddd");
    this.add.image(this.sys.game.canvas.width/2,this.game.canvas.height/2,"game_over")
    this.textCucu = this.add.text(this.sys.game.canvas.width/2, 200, "CUCU'S");
    this.textCucu.x-=this.textCucu.width*3;
    this.textGracias=this.add.text(this.sys.game.canvas.width/2, 500, "Gracias por jugar");
    this.textGracias.x-=this.textGracias.width*3; 
    this.textGracias.setFontSize(100);
    this.textCucu.setFontSize(100);   
    this.textCucu.setColor("#00000");
    this.textGracias.setColor("#00000");
    // this.textGracias.color=black;
  }
}
