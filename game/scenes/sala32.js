import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";

export default class Sala32 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(
      cst.SCENES.SALA32,
      [
        cst.SCENES.SALA31,
        cst.SCENES.SALA35,
        cst.SCENES.SALA33,
        cst.SCENES.SALA26,
      ],
      false
    );
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.fuente = new Prop(
      this,
      this.sys.game.canvas.width / 2,
      this.sys.game.canvas.height / 2,
      "fuente",
      this.player,
      5,
      60,
      50
    );
    this.anims.create({
      key: "fuenteAnim",
      frames: this.anims.generateFrameNumbers("fuente", {
        start: 0,
        end: 5,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.hijoFlorista = new Prop(this,this.sys.game.canvas.width / 2,
      600,"hijoFlorista",this.player,1,60,50);
    this.anims.create({
      key: "hijoFloristaAnim",
      frames: this.anims.generateFrameNumbers("hijoFlorista", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.hijoFloristaE = this.add.image(
      this.hijoFlorista.x,
      this.hijoFlorista.y - this.hijoFlorista.height + 50
    );
   this.cliente= new Prop(this,1150,700,"clienteBombones1",this.player,1,60,50);
   this.anims.create({
     key:"clienteAnim",
     frames: this.anims.generateFrameNumbers("clienteBombones1",{
       start: 0,
       end: 6
     }),
     frameRate: 5,
     repeat:-1,
   })
    this.clienteE = this.add.image(
    this.cliente.x,
    this.cliente.y - this.cliente.height + 50
  );

    this.e = this.input.keyboard.addKey("E", false);
   }

  update() {
    super.update();
    this.fuente.play("fuenteAnim", true);
    this.hijoFlorista.play("hijoFloristaAnim", true);
    this.cliente.play("clienteAnim",true)
    if (this.physics.overlap(this.player, this.hijoFlorista)) {
      this.hijoFloristaE.visible = true;
      if(Phaser.Input.Keyboard.JustDown(this.e)){
        console.log("Hablaste con el hijo del florista");
      }
    } else {
      this.hijoFloristaE.visible = false;
    }
    if (this.physics.overlap(this.player, this.cliente)) {
      this.clienteE.visible = true;
      if(Phaser.Input.Keyboard.JustDown(this.e)){
        console.log("Hablaste con el cliente");
      }
    } else {
      this.clienteE.visible = false;
    }
  }
}
