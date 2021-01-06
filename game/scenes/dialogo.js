
import {npcs} from "./npcs.js";

export default class Dialogo extends Phaser.Scene  {
  constructor() {
    super({ key: "dialogo" });    
  }
  
  init(datos) {
    this.npc = datos.npc;
   
}
  create() {
    //habria que crear los arrays y todos los mensajes de cada muñeco
    this.bebe = ["agugutata","jaja ruben es tonto"];
    this.iterator = 0;
    this.e = this.input.keyboard.addKey("E");
  }

  update(time, delta) {
    
  switch(this.npc)
  {
    case npcs.NPCS.bebe:
      while (this.iterator != this.bebe.length)
      {
        this.text = this.add.text(
        200,
        200,
        this.bebe[this.iterator]
        );
        if (Phaser.Input.Keyboard.JustDown(this.e))
        {
          this.iterator++;
        }
      }
      this.npc = null;
      break;
  }
  }
  
}


//let text = this.add.text(
//  200,
//  500,
//  "- Has elegido la opción 4, que da 0 de persuasión -"
//);