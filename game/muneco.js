import Npc from './npc.js';

export default class Muneco  {
    
    constructor() {
      super({ key: "muneco" });
    }

    preload() {
       
    }
  
    create() {
     const  pPersLimit = 100;  
     this.pPersuasion = 0;
     this.pVida = 100;
      
     //Creación de la variable de tipo NPC, 
     //habrá que pasarle como parámetros rodo lo que necesite NPC


     //Funciones
     let pierdeVida = function(vidaPerdida){
        pVida -= vidaPerdida;
     };


     let subirPersuasion = function(puntosPersuasion){
        pPersiasion += puntosPersuasion;
     };

     //let deplazar = function(posicionDestino)


     let comenzarCombate = function(nombreEscena){
         //Cargar escena de la batalla
     }

     //a este método se le llama cada vez que se le da al boton mercy
     let mercy = function(){
         
        if(pPersuasion >= pPersLimit){
            //se acaba el combate: invocar a los metodos que sean
        }
     };


    }
  
    
    update(time, delta) {
      
    }
  }

  preload() {}

  create() {
    const pPersLimit = 100;
    let pPersuasion = 0;
    let pVida = 100;

    //Creación de la variable de tipo NPC,
    //habrá que pasarle como parámetros rodo lo que necesite NPC

    //Funciones
    let pierdeVida = function (vidaPerdida) {
      pVida -= vidaPerdida;
    };

    let subirPersuasion = function (puntosPersuasion) {
      pPersiasion += puntosPersuasion;
    };

    //let deplazar = function(posicionDestino)

    let comenzarCombate = function (nombreEscena) {
      //Cargar escena de la batalla
    };

    //a este método se le llama cada vez que se le da al boton mercy
    let mercy = function () {
      if (pPersuasion >= pPersLimit) {
        //se acaba el combate: invocar a los metodos que sean
      }
    };
  }

  update(time, delta) {}
}
