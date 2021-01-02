import { cst } from "../scenes/cst.js";


class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }

  preload() {
    this.load.on("complete", () => {
      this.scene.start('salaXXPomponina', {posx: 700, posy :400, lives:10});
    });

    this.load.spritesheet("pigmalion", "./././resources/sprites/pigmalion.png", {
      frameWidth: 192,
      frameHeight: 192,
    });
    this.load.spritesheet("cucu", "./././resources/sprites/cucu.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("cucuat", "./././resources/sprites/cucu/cucuattacksprite.png", {
      frameWidth: 216,
      frameHeight: 108,
    });
    this.load.spritesheet("cucuat2", "./././resources/sprites/cucu/cucuattacksprite2.png",{
      frameWidth: 91,
      frameHeight:108
    });

    this.load.spritesheet("chulapos", "./././resources/sprites/chulaposanim_sheet.png",{
      frameWidth: 288,
      frameHeight:288
    });
    this.load.spritesheet("cucu_idle", "./././resources/sprites/cucu_idle_anim.png",{
      frameWidth: 32,
      frameHeight:32
    });


  

    //this.load.image("cucu_idle", "./././resources/sprites/cucu_idle");
    this.load.image("caja", "./././resources/sprites/caja.png");
    this.load.image("mujer", "./././resources/sprites/mujer.png");
    this.load.image("carreta", "./././resources/sprites/carreta.png");
    this.load.image("tiendarastroiz", "./././resources/sprites/tienda_rastro_iz.png");
    this.load.image("tiendarastrodr", "./././resources/sprites/tienda_rastro_dr.png");
    this.load.image("tiendadisfraces", "./././resources/sprites/tienda_disfraces.png");
    this.load.image("bebe", "./././resources/sprites/bebe.png");
    this.load.image("teclaE", "./././resources/sprites/teclaE.png");
    this.load.image("mesa", "./././resources/sprites/mesas1.png");
    this.load.image("background", "./././resources/sprites/teatroGeneral/background.png");
    this.load.image("caballo", "./././resources/sprites/caballo.png");
    this.load.image("cortinas", "./././resources/sprites/teatroGeneral/cortinas.png");
    this.load.image("telon", "./././resources/sprites/teatroGeneral/telon.png");
    this.load.image("telonGrande", "./././resources/sprites/teatroGeneral/telonGrande.png");
    this.load.image("tablones", "./././resources/sprites/teatroGeneral/tablones.png");
    this.load.image("objetovacio", "./././resources/sprites/teatroGeneral/objetovacio.png");
    this.load.image("mc","./././resources/sprites/MenuComb.png");

    //-----SPRITES MENU ATAQUE-----
    this.load.image("attackButton", "./././resources/sprites/menuAtaque/boton_atacar.png");
    this.load.image("talkButton","./././resources/sprites/menuAtaque/boton_hablar.png");
    this.load.image("mercyButton","./././resources/sprites/menuAtaque/boton_piedad.png");
    this.load.image("backButton", "./././resources/sprites/menuAtaque/boton_retroceder.png");
    this.load.image("bar","./././resources/sprites/menuAtaque/barra_final.png");
    this.load.image("moveBar","./././resources/sprites/menuAtaque/barra_movil.png");
  }
}
export default Bootloader;
