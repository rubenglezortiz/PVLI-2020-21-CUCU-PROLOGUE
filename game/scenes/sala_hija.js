import SalaBase from "./sala_base.js";

export default class SalaHija extends SalaBase{
    constructor(){
                        // <-  ^ ->     v
        super('SalaHija1', [0, 0, 0, 'Sala0']);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.bebe = this.physics.add.sprite(1000,300,"bebe");
          this.bebeE =  this.add.image(this.bebe.x, this.bebe.y -  this.bebe.height, "teclaE");
     }
    

     update(){
        super.update();
        if(this.physics.overlap(this.player, this.bebe)) {
            this.bebeE.visible = true;
          }
          else{
            this.bebeE.visible = false;
          }
     }
}