import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst} from "./cst.js";
import eventsCenter from "../eventsCenter.js";

export default class Sala12 extends SalaBase{
    constructor(){
                      // <-  ^     ->     v
        super(cst.SCENES.SALA12, [ 0, 0, cst.SCENES.SALA11, 0],false);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.bebe = new Prop(this, 1000, 300, "bebe", this.player,1, 60,50);
          this.add.image(300,400,"mesa").setScale(7);
          this.bebeE =  this.add.image(this.bebe.x, this.bebe.y -  this.bebe.height, "teclaE");
          this.bebeE.depth = 6;
          this.camino = this.add.image(1400, 400, "cucucamino1");
          this.camino.depth = 1;
          
         this.e = this.input.keyboard.addKey("E");
     }
    

     update(){
        super.update();

        if(this.physics.overlap(this.player, this.bebe)) {
          this.bebeE.visible = true;
          if (Phaser.Input.Keyboard.JustDown(this.e)) {
            
            this.scene.launch("dialogo", {npc:"bebe"});
            
          }
        }
        else{
          this.bebeE.visible = false;
        }
        
     }
}


// import { cst } from "./cst.js";
// import Pigmalion from "../gameobject/pigmalion.js";

// export default class Sala12 extends Phaser.Scene {
//   constructor() {
//     super({ key: cst.SCENES.SALA12 });
//   }

//   init(datos) {
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//     this.lives=datos.lives
//   }

//   create() {
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700,400,"cortinas");
//     this.bebe = this.physics.add.sprite(1000,300,"bebe").setScale(1);
//     this.add.image(300,400,"mesa").setScale(7);
//     this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
    
  
//     this.bebeE =  this.add.image(this.bebe.x, this.bebe.y -  this.bebe.height, "teclaE");
//     this.add.image(700,400,"telon");
    
//     this.lives = 10;
//   }

//   update(time, delta) {
//     if(this.physics.overlap(this.player, this.bebe)) {
//       this.bebeE.visible = true;
//     }
//     else{
//       this.bebeE.visible = false;
//     }


//     if (this.player.x < 0) {
//       //La sala 2 no tiene moviemiento a la iezquierda
//     }
//     if (this.player.x > 1400) {
//       this.player.x = 1;
//       this.scene.start(cst.SCENES.SALA11, {
//         posx: this.player.x,
//         posy: this.player.y,
//         lives: this.player.lives,
//       });
//     }
//     if (this.player.y < 0) {
//       //La sala 2 no tiene movieminet abajo
//     }
//     if (this.player.y > 800) {
//       //La sala 2 no tiene movieminet arriba
//     }
//   }
// }
