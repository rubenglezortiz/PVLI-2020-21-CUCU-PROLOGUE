import SalaBase from "./sala_base.js";

export default class Sala15 extends SalaBase{
    constructor(){
                      // <-  ^  ->     v
        super('Sala15', [ 0, 'Sala11', 0, 'Sala16']);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.camino = this.add.image(800, 400, "cucucamino1");
          this.camino.depth = 1;
          this.camino.angle = 90;
          this.tiendadisfraces = this.physics.add.sprite(1050,475,"tiendadisfraces").setScale(1.1);
          this.tiendadisfraces.depth = 1;
          this.tiendadisfracesE =  this.add.image(this.tiendadisfraces.x, this.tiendadisfraces.y -  this.tiendadisfraces.height, "teclaE");
          this.tiendadisfracesE.depth = 6;
          this.e = this.input.keyboard.addKey("E");
     }
    

     update(){
        super.update();
        if(this.physics.overlap(this.player, this.tiendadisfraces)) {
          this.tiendadisfracesE.visible = true;
          if (Phaser.Input.Keyboard.JustDown(this.e)) {
            console.log("Miraste a la tienda de disfraces");
          }
        }
        else{
          this.tiendadisfracesE.visible = false;
        }
        
     }
}

// import { cst } from "./cst.js";
// import Pigmalion from "../gameobject/pigmalion.js";

// export default class Sala15 extends Phaser.Scene {
//   constructor() {
//     super({ key: cst.SCENES.SALA15 });
//   }

//   init(datos) {
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//     this.lives=datos.lives
//   }

//   create() {
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700,400,"cortinas");
//     this.tiendadisfraces = this.physics.add.sprite(1000,500,"tiendadisfraces").setScale(1.1);
//     this.tiendadisfracesE =  this.add.image(this.tiendadisfraces.x, this.tiendadisfraces.y -  this.tiendadisfraces.height, "teclaE");
//     this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
//     this.add.image(700,400,"telon");
//     this.lives = 10;
//   }

//   update(time, delta) {


//     if(this.physics.overlap(this.player, this.tiendadisfraces)) {
//       this.tiendadisfracesE.visible = true;
//     }
//     else{
//       this.tiendadisfracesE.visible = false;
//     }

//     if (this.player.x < 0) {
//       //la sala 1.5 no tiene nada a la inquierda
//     }
//     if (this.player.x > 1400) {
//       //la sala 1.5 no tiene nada a la derecha
//     }
//     if (this.player.y < 0) {
//       this.player.y = 800 - 1;
//       this.scene.start(cst.SCENES.SALA11, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.y > 800) {
//       this.player.y = 1;
//       this.scene.start(cst.SCENES.SALA16, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//   }
// }
