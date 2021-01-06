import Prop from "../gameobject/prop.js";
import SalaBase from "./sala_base.js";
import {cst} from "./cst.js";

export default class Sala0 extends SalaBase{
    constructor(){
                        // <-  ^ ->     v
        super(cst.SCENES.SALA0, [cst.SCENES.SALA11, cst.SCENES.SALA34, cst.SCENES.SALA31, 0], false);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.caja = new Prop(this, 300, 250, "caja", this.player, 7,60,50);
          this.camino = this.add.image(700, 400, "cucucamino4");
          this.camino.depth=1;
         
          //this.physics.add.collider(this.caja.collider, this.player);
    } 
    

     update(){
        super.update();
        
     }
}

// export default class Sala0 extends Phaser.Scene {
//   constructor() {
//     super({ key: 'Sala0' });
//   }

//   init(datos) {
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//     this.lives = datos.lives;
//   }
//   create() {
//     console.log(this);
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700, 400, "cortinas");
//     this.add.image(300, 400, "caja").setScale(7);
//     this.player = new Pigmalion(
//       this,
//       this.posx,
//       this.posy,
//       this.lives,
//       "pigmalion"
//     );

//     //this.caballo = new GameObject(this, 700,350,"caballo", this.player);

//     this.add.image(700, 400, "telon");
    
//     //this.floor = new Phaser.Geom.Rectangle(274, 400, 550, 5);

//     this.lives = 10;
//     this.monecoAttacks = this.physics.add.group();
//     this.r = this.input.keyboard.addKey("R");

//     /*
// this.trigger = this.add.zone(700, 400);
// this.trigger.setSize(200, 200);
// this.physics.world.enable(this.trigger);
// this.trigger.body.setAllowGravity(false);
// this.trigger.body.moves = false;
// */
//   }

//   update(time, delta) {
//     //-----CAMBIO SALAS-----
//     if (this.player.x < 0) {
//       this.player.x = 1400 - 1;
//       this.scene.start(cst.SCENES.SALA11, {
//         posx: this.player.x,
//         posy: this.player.y,
//       });
//     }
//     if (this.player.x > 1400) {
//       // De momento en la sala 0 no hay cambio a la derecha
//       // this.x = 1;
//     }
//     if (this.player.y < 0) {
//       // De momento en la sala 0 no hay cambio arriba
//       this.player.y = 800 - 1;
//       this.scene.start('SalaHija1', {
//         posx: this.player.x,
//         posy: this.player.y,
       
//       });
//     }
//     if (this.player.y > 800) {
//       // De momento en la sala 0 no hay cambio a la derecha
//       //this.y = 1;
//     }

   
//   }
// }
