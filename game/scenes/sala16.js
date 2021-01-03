import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst} from "./cst.js";
export default class Sala16 extends SalaBase{
    constructor(){
                          // <-        ^      -> v
        super(cst.SCENES.SALA16, [ cst.SCENES.SALA17,cst.SCENES.SALA15, 0, 0]);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.camino = this.add.image(700, 400, "cucucamino3");
          this.camino.depth = 1;
        
                                  
          this.tiendaDr= new Prop(this, 1100, 210, "tiendarastroiz", this.player,1,60,35);
          this.tiendaIz= new Prop(this, 300, 200, "tiendarastrodr", this.player,1,60,40);
          
          
     }
    

     update(){
        super.update();
        
        
     }
}



// import { cst } from "./cst.js";
// import Pigmalion from "../gameobject/pigmalion.js";

// export default class Sala16 extends Phaser.Scene {
//   constructor() {
//     super({ key: cst.SCENES.SALA16 });
//   }

//   init(datos) {
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//     this.lives=datos.lives;
//   }

//   create() {
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700,400,"cortinas");
//     this.add.image(1100, 200, "tiendarastroiz");
//     this.add.image(300, 200, "tiendarastrodr");
//     this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
//     this.add.image(700,400,"telon");
//     this.lives = 10;
//   }

//   update(time, delta) {
//     if (this.player.x < 0) {
//       this.player.x = 1400 - 1;
//       this.scene.start(cst.SCENES.SALA17, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.x > 1400) {
//       //Hay que meter la zona de DonLindo
//     }
//     if (this.player.y < 0) {
//       this.player.y = 800 - 1;
//       this.scene.start(cst.SCENES.SALA15, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.y > 800) {
//       //Nada hacia abajo de la sala 1.6
//     }
//   }
// }
