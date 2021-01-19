//FALTA LLAMAR A ESTA SALA CUANDO SE GANA EL COMBATE CONTRA URDEMALASS
export default class GameOver extends Phaser.Scene {
  // <-  ^   ->   v
  constructor(name) {
    super({ key: name });
    console.log(this);
  }

   create() {
    this.bringToTop();
    console.log("ddd");
    this.text = this.add.text(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "CUCU'S\nGracias por jugar");
    this.text.setFontSize(200);   
  }

  update(){
    console.log("me cago en satanás");
  }

}
