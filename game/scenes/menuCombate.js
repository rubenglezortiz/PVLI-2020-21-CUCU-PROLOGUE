import eventsCenter from "../eventsCenter.js";
import rod from "./rod.js";
import { objs } from "./objeto.js";
import { cst } from "./cst.js";
import { npcs } from "./npcs.js";
export default class MenuCombate extends Phaser.Scene {
  constructor(datos) {
    super({ key: "mc" });
    this.test = false;
    eventsCenter.on("thisKey", this.prevScene, this);  
    
  }
  init(datos){ // Necesitamos saber contra qué muñeco estamos luchando y qué objetos tiene el jugador
    this.objetos = datos.objects;
    this.moneco = datos.moneco;
    console.log(this.moneco);
  }
  create() {
    this.scene.bringToTop();
    eventsCenter.on("daño", this.calcularDaño, this); // Evento que detecta cuándo hacemos daño
    eventsCenter.on("exit", this.parar, this); // Evento que detecta cuándo hay que salir de la escena
    this.events.on(Phaser.Scenes.Events.RESUME, () => {
      eventsCenter.on("thisKey", this.prevScene, this);  
      eventsCenter.off("thisKey",this.prevScene,this)    
    });
    this.menu = this.add.image(700, 500, "mc");
    this.menu.setAlpha(0.5);
    this.mercy;
    this.attackButton = this.add.sprite(200, 150, "attack_button").setInteractive(); // Botón de ataque
    if (this.moneco !== 3) // Si este muñeco no es Urdemalas el botón de hablar estará disponible
    this.talkButton = this.add.sprite(550, 150, "talk_button").setInteractive();
    else{
      this.talkButton = this.add.sprite(550, 150, "talk_button");
      this.talkButton.setAlpha(0.5);
    } 
    // Comprobamos si se ha llegado a la cantidad necesaria de Puntos de Persuasión para activar mercy
    eventsCenter.on("canMercy", this.setMercyButton, this); 
    if (!this.mercy) 
    {
      this.mercyButton = this.add.sprite(850, 150, "mercy_button");
      this.mercyButton.setAlpha(0.5);
    } 
    else 
    {
      this.mercyButton = this.add.sprite(850, 150, "mercy_button").setInteractive();
      this.mercyButton.setAlpha(1);
    }
    // Por cada botón
    this.buttonVec = [this.attackButton, this.talkButton, this.mercyButton];
    this.buttonVec.forEach((button) => {
      button.on("pointerover", (pointer) => { // Si ponemos el cursor encima se oscurecen
        button.setAlpha(0.5);
      });
      button.on("pointerout", (pointer) => { // Al quitarlo se vuelven a iluminar
        button.setAlpha(1);
      });
    });
    // Acciones del botón de ataque
    this.attackButton.on("pointerdown", (pointer) => { // Al pulsar el botón de ataque
      this.backButton = this.add.sprite(1200, 150, "back_button").setInteractive(); // Creamos un botón para retroceder en el menú
      this.backButton.on("pointerover", (pointer) => {
        this.backButton.setAlpha(0.5);
      });
      this.backButton.on("pointerout", (pointer) => {
        this.backButton.setAlpha(1);
      });
      this.backButton.on("pointerdown", (pointer) => { // Al pulsar el botón de retroceso
        this.barraFinal.destroy(); // Se destruye la barra de ataque
        eventsCenter.emit("back", this);
        // Se vuelven a activar los botones disponibles
        this.attackButton.setInteractive();
        this.attackButton.setAlpha(1);
        if (this.moneco !== 3)
       { 
        this.talkButton.setInteractive();
        this.talkButton.setAlpha(1);
       }
        if (this.mercy) {
          this.mercyButton.setInteractive();
          this.mercyButton.setAlpha(1);
        }
        this.backButton.destroy(); // Se elimina el botón de retroceso
      });
      this.buttonVec.forEach((button) => {
        button.disableInteractive();
        button.setAlpha(0.5);
      });
      this.backButton.setInteractive();
      this.barraFinal = this.add.sprite(700, 700, "bar");
      // Primera barra móvil
      this.barramovil1 = new rod({
        scene: this,
        x: this.barraFinal.x - 50,
        y: this.barraFinal.y,
        type: "move_bar",
      });
      // Segunda barra móvil
      this.barramovil2 = new rod({
        scene: this,
        x: this.barraFinal.x + 300,
        y: this.barraFinal.y,
        type: "move_bar",
      });
    });
    
    // Acciones del botón de hablar
    this.talkButton.on("pointerdown", (pointer) => { // Al pulsar el botón de hablar
      if(this.moneco !== 3)
      this.buttonVec.forEach((button) => { // Se desactivan los botones
        button.disableInteractive();
        button.setAlpha(0.5);
      });
      if (this.moneco === 0) // Botones de hablar para Cucu
      {
      this.talkOption1 = this.add.sprite(200, 500, "chiste_button").setInteractive();
      this.talkOption2 = this.add.sprite(550, 500, "animarle_button").setInteractive();
      this.talkOption3 = this.add.sprite(850, 500, "dato_button").setInteractive();
      this.talkOption4 = this.add.sprite(1200, 500, "burlarse_button").setInteractive();
      this.talkOptionsVec = [
        this.talkOption1,
        this.talkOption2,
        this.talkOption3,
        this.talkOption4
      ];
      this.talkOption1.on("pointerdown", (pointer) => { // Chiste
        this.persuasion = 10;
        this.scene.launch("dialogo", {npc:npcs.NPCS.chisteCombate,prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        this.parar();
        });
      this.talkOption2.on("pointerdown", (pointer) => { // Animarle
        this.persuasion = 15;
        this.scene.launch("dialogo", {npc:npcs.NPCS.animarleCombate,prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        this.parar();
      });
      this.talkOption3.on("pointerdown", (pointer) => { // Dato
        this.persuasion = 0;
        this.scene.launch("dialogo", {npc:npcs.NPCS.datoCombate,prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        this.parar();
      });
      this.talkOption4.on("pointerdown", (pointer) => { // Reírse de él
        this.persuasion = -5;
        this.scene.launch("dialogo", {npc:npcs.NPCS.reirseCombate,prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        this.parar();
      });
    }
    // Con cada opción que requiera un objeto, se comprueba si el jugador lo tiene
      else if (this.moneco === 1) // Botones de hablar para Don Lindo
      {
      if (this.objetos[objs.OBJECTS.ukelele]) 
      this.talkOption1 = this.add.sprite(200, 500, "ukelele_button").setInteractive();
      else
      {
        this.talkOption1 = this.add.sprite(200, 500, "ukelele_button");
        this.talkOption1.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.gorro])
      {
        this.talkOption2 = this.add.sprite(550, 500, "gorro_button").setInteractive();
      }
      else 
      {
        this.talkOption2 = this.add.sprite(550, 500, "gorro_button")
        this.talkOption2.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.cartera])
      {
        this.talkOption4 = this.add.sprite(1200, 500, "cartera_button").setInteractive();
      }
      else 
      {
        this.talkOption4 = this.add.sprite(1200, 500, "cartera_button")
        this.talkOption4.setAlpha(0.5);
      }

        this.talkOption5 = this.add.sprite(200, 700, "musica_button").setInteractive();
        this.talkOption6 = this.add.sprite(550, 700, "gritar_button").setInteractive();
        this.talkOption7 = this.add.sprite(850, 700, "persuadir_button").setInteractive();
        this.talkOption8 = this.add.sprite(1200, 700, "pomponina_button").setInteractive();

      this.talkOptionsVec = [
        this.talkOption1,
        this.talkOption2,
        this.talkOption4,
        this.talkOption5,
        this.talkOption6,
        this.talkOption7,
        this.talkOption8
      ];
      this.talkOption1.on("pointerdown", (pointer) => { // Ukelele
        this.persuasion = 50;
        this.scene.launch("dialogo", {npc:npcs.NPCS.ukelele,prevKey:cst.SCENES.SALA28DONLINDO,objs:this.objetos});
        this.objetos[objs.OBJECTS.ukelele] = false;
        this.parar();
        });
      this.talkOption2.on("pointerdown", (pointer) => { // Gorro
        this.persuasion = 40;
        this.scene.launch("dialogo", {npc:npcs.NPCS.gorro,prevKey:cst.SCENES.SALA28DONLINDO,objs:this.objetos});
        this.objetos[objs.OBJECTS.gorro] = false;
        this.parar();
      });
      this.talkOption4.on("pointerdown", (pointer) => { // Cartera
        this.persuasion = -30;
        this.scene.launch("dialogo", {npc:npcs.NPCS.cartera,prevKey:cst.SCENES.SALA28DONLINDO,objs:this.objetos});
        this.objetos[objs.OBJECTS.cartera] = false;
        this.parar();
      });
      this.talkOption5.on("pointerdown", (pointer) => { // Música
        this.persuasion = +12;
        this.scene.launch("dialogo", {npc:npcs.NPCS.musica,prevKey:cst.SCENES.SALA28DONLINDO,objs:this.objetos});
        this.parar();
      });
      this.talkOption6.on("pointerdown", (pointer) => { // Gritar
        this.persuasion = 0;
        this.scene.launch("dialogo", {npc:npcs.NPCS.gritar,prevKey:cst.SCENES.SALA28DONLINDO,objs:this.objetos});
        this.parar();
      });
      this.talkOption7.on("pointerdown", (pointer) => { // Persuadir
        this.persuasion = -5;
        this.scene.launch("dialogo", {npc:npcs.NPCS.donlindo_persuadir,prevKey:cst.SCENES.SALA28DONLINDO,objs:this.objetos});
        this.parar();
      });
      this.talkOption8.on("pointerdown", (pointer) => { // Pomponina
        this.persuasion = -10;
        this.scene.launch("dialogo", {npc:npcs.NPCS.foto_pomponina,prevKey:cst.SCENES.SALA28DONLINDO,objs:this.objetos});
        this.parar();
      });
    }
      else if (this.moneco === 2) // Botones de hablar para Pomponina
      {
      if (this.objetos[objs.OBJECTS.floresRosas])
      this.talkOption1 = this.add.sprite(200, 500, "flores_rosas_button").setInteractive();
      else
      {
        this.talkOption1 = this.add.sprite(200, 500, "flores_rosas_button");
        this.talkOption1.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.bombonesPomponina])
      {
        this.talkOption2 = this.add.sprite(550, 500, "bombones_button").setInteractive();
      }
      else 
      {
        this.talkOption2 = this.add.sprite(550, 500, "bombones_button")
        this.talkOption2.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.abanico])
      {
      this.talkOption3 = this.add.sprite(850, 500, "abanico_button").setInteractive();
      }
      else
      {
      this.talkOption3 = this.add.sprite(850, 500, "abanico_button");
      this.talkOption3.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.floresHijo])
      {
        this.talkOption4 = this.add.sprite(1200, 500, "rosas_button").setInteractive();
      }
      else 
      {
        this.talkOption4 = this.add.sprite(1200, 500, "rosas_button")
        this.talkOption4.setAlpha(0.5);
      }

      if (this.objetos[objs.OBJECTS.collar])
      {
        this.talkOption5 = this.add.sprite(200, 700, "collar_button").setInteractive();
      }
      else 
      {
        this.talkOption5 = this.add.sprite(200, 700, "collar_button")
        this.talkOption5.setAlpha(0.5);
      }
        this.talkOption6 = this.add.sprite(550, 700, "ordenar_button").setInteractive();
        this.talkOption7 = this.add.sprite(850, 700, "amenazar_button").setInteractive();
        this.talkOption8 = this.add.sprite(1200, 700, "halagar_button").setInteractive();

      this.talkOptionsVec = [
        this.talkOption1,
        this.talkOption2,
        this.talkOption3,
        this.talkOption4,
        this.talkOption5,
        this.talkOption6,
        this.talkOption7,
        this.talkOption8
      ];
      this.talkOption1.on("pointerdown", (pointer) => { // Rosas rosas
        this.persuasion = 40;
        this.scene.launch("dialogo", {npc:npcs.NPCS.floresRosasCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.objetos[objs.OBJECTS.floresRosas] = false;
        this.parar();
        });
      this.talkOption2.on("pointerdown", (pointer) => { // Bombones
        this.persuasion = 30;
        this.scene.launch("dialogo", {npc:npcs.NPCS.bombonesCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.objetos[objs.OBJECTS.bombonesPomponina] = false;
        this.parar();
      });
      this.talkOption3.on("pointerdown", (pointer) => { // Abanico
        this.persuasion = 30;
        this.scene.launch("dialogo", {npc:npcs.NPCS.abanicoCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.objetos[objs.OBJECTS.abanico] = false;
        this.parar();
      });
      this.talkOption4.on("pointerdown", (pointer) => { // Ramo rosas
        this.persuasion = 20;
        this.scene.launch("dialogo", {npc:npcs.NPCS.rosasCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.objetos[objs.OBJECTS.floresHijo] = false;
        this.parar();
      });
      this.talkOption5.on("pointerdown", (pointer) => { // Collar
        this.persuasion = -20;
        this.scene.launch("dialogo", {npc:npcs.NPCS.collarCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.objetos[objs.OBJECTS.collar] = false;
        this.parar();
      });
      this.talkOption6.on("pointerdown", (pointer) => { // Ordenar
        this.persuasion = 0;
        this.scene.launch("dialogo", {npc:npcs.NPCS.ordenarCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.parar();
      });
      this.talkOption7.on("pointerdown", (pointer) => { // Amenazar
        this.persuasion = -5;
        this.scene.launch("dialogo", {npc:npcs.NPCS.amenazarCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.parar();
      });
      this.talkOption8.on("pointerdown", (pointer) => { // Halagar
        this.persuasion = 12;  
        this.scene.launch("dialogo", {npc:npcs.NPCS.halagarCombate,prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        this.parar();
      });
    }
    if(this.moneco !== 3){ // Si no es el muñeco final
      this.talkOptionsVec.forEach((button) => { // Por cada opción de diálogo
        button.on("pointerover", (pointer) => { // Se oscurece al poner encima el cursor
          button.setAlpha(0.5);
        });

        button.on("pointerout", (pointer) => { // Se ilumina al quitarlo
          button.setAlpha(1);
        });

        button.on("pointerdown", (pointer) => { // Al pulsarlo 
          eventsCenter.emit("persuade", this.persuasion); // Se manda la persuasión que da esa opción mediante el manejador de eventos
            eventsCenter.off("persuade", this.persuasion);
          this.talkOptionsVec.forEach((option) => {
            option.setAlpha(0.5);
            option.disableInteractive();
            eventsCenter.emit("thisKey", this._nombreSala);
            this.buttonVec.forEach((button) => {
              button.setAlpha(0.5);
              button.disableInteractive();
            });
            this.backButton2.destroy();
          });
        });
      });
    
      this.backButton2 = this.add // Botón para retroceder
        .sprite(1200, 150, "back_button")
        .setInteractive();
      this.backButton2.on("pointerover", (pointer) => { // Se oscurece al poner el cursor sobre él
        this.backButton2.setAlpha(0.5);
      });
      this.backButton2.on("pointerout", (pointer) => { // Se ilumina al quitarlo
        this.backButton2.setAlpha(1);
      });
      this.backButton2.on("pointerdown", (pointer) => { // Al pulsarlo
        this.talkOptionsVec.forEach((option) => { // Se destruyen todas las opciones de diálogo
          option.destroy();
        });
        // Se reactivan los botones disponibles
        this.attackButton.setInteractive();
        this.attackButton.setAlpha(1);
        if (this.moneco !== 3)
        {
          this.talkButton.setInteractive();
          this.talkButton.setAlpha(1);
        }
        if (this.mercy) {
          this.mercyButton.setInteractive();
          this.mercyButton.setAlpha(1);
        }
        this.backButton2.destroy();
      });
    }
      
    });
    this.mercyButton.on("pointerdown", (pointer) => { // Al pulsar el botón de mercy se emite un evento
      eventsCenter.emit("isMercy", true);
      this.parar();
    });
  }

  setMercyButton(monecoPP) { // Función que comprueba si el botón de mercy debe estar disponible
    if (monecoPP >= 100) this.mercy = true;
    else this.mercy = false;
  }
 
  
  prevScene(key) {this.prevKey = key;}

  parar() { // Pausa esta escena y la oculta
    this.scene.pause();   
    this.scene.sendToBack();
  }
  calcularDaño(){ // Método que calcula el daño según la distancia entre las dos barras
    let distancia = 1000; // Distancia entre las barras
    if (this.barramovil1.x >= this.barramovil2.x)
      distancia = this.barramovil1.x - this.barramovil2.x;
    else
      distancia = this.barramovil2.x - this.barramovil1.x;
    if (distancia < 20) 
        this.damage = 20;
        else if (distancia < 40)
        this.damage = 18;
        else if (distancia < 60)
        this.damage = 16;
        else if (distancia < 80)
        this.damage = 14;
        else if (distancia < 100)
        this.damage = 12;
        else if (distancia < 120)
        this.damage = 10;
        else if (distancia < 140)
        this.damage = 8;
        else if (distancia < 160)
        this.damage = 7;
        else this.damage = 5;
  this.scene.resume(this.prevKey); // Hacemos resume de la escena de la sala de combate correspondiente
  eventsCenter.emit("damage",this.damage); // Emitimos el daño
  eventsCenter.off("damage");
  eventsCenter.emit("exit",true); // Emitimos el evento para salir del menú
  eventsCenter.off("exit");
  }
}