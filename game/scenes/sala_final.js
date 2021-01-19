//FALTA LLAMAR A ESTA SALA CUANDO SE GANA EL COMBATE CONTRA URDEMALASS

export default class SalaFinal extends Phaser.Scene {
  // <-  ^   ->   v
  constructor(name) {
    super({ key: name });
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.bringToTop();
    this.text = this.add.text(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "CUCU'S\nGracias por jugar");
    this.text.setFontSize(200);   
  }

}
