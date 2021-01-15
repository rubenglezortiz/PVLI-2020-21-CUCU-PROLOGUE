import eventsCenter from "../eventsCenter.js";
import rod from "./rod.js";
import { objs } from "./objeto.js";
import { cst } from "./cst.js";
export default class MenuCombate extends Phaser.Scene {
  constructor(datos) {
    super({ key: "mc" });
    this.test = false;
    eventsCenter.on("thisKey", this.prevScene, this);  
    
  }
  init(datos){
    this.objetos = datos.objects;
    this.moneco = datos.moneco;
    console.log(this.moneco);
  }
  create() {
    this.scene.bringToTop();
    this.events.on(Phaser.Scenes.Events.RESUME, () => {
      eventsCenter.on("thisKey", this.prevScene, this);  
      eventsCenter.off("thisKey",this.prevScene,this)    
    });
    // eventsCenter.on("thisKey", this.prevScene, this)  
    this.menu = this.add.image(700, 500, "mc");
    this.menu.setAlpha(0.5);
    this.mercy;
    this.attackButton = this.add.sprite(200, 150, "attackButton").setInteractive();
    this.talkButton = this.add.sprite(550, 150, "talkButton").setInteractive();

    eventsCenter.on("canMercy", this.setMercyButton, this);
    if (!this.mercy) 
    {
      this.mercyButton = this.add.sprite(850, 150, "mercyButton");
      this.mercyButton.setAlpha(0.5);
    } 
    else 
    {
      this.mercyButton = this.add.sprite(850, 150, "mercyButton").setInteractive();
      this.mercyButton.setAlpha(1);
    }
    this.buttonVec = [this.attackButton, this.talkButton, this.mercyButton];
    this.buttonVec.forEach((button) => {
      button.on("pointerover", (pointer) => {
        button.setAlpha(0.5);
      });
      button.on("pointerout", (pointer) => {
        button.setAlpha(1);
      });
    });
    // Botón de ataque
    this.attackButton.on("pointerdown", (pointer) => {
      this.backButton = this.add.sprite(1200, 150, "backButton").setInteractive();
      this.backButton.on("pointerover", (pointer) => {
        this.backButton.setAlpha(0.5);
      });
      this.backButton.on("pointerout", (pointer) => {
        this.backButton.setAlpha(1);
      });
      this.backButton.on("pointerdown", (pointer) => {
        this.barraFinal.destroy();
        eventsCenter.emit("back", this);
        this.attackButton.setInteractive();
        this.attackButton.setAlpha(1);
        this.talkButton.setInteractive();
        this.talkButton.setAlpha(1);
        if (this.mercy) {
          this.mercyButton.setInteractive();
          this.mercyButton.setAlpha(1);
        }
        this.backButton.destroy();
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
        type: "moveBar",
      });
      // Segunda barra móvil
      this.barramovil2 = new rod({
        scene: this,
        x: this.barraFinal.x + 300,
        y: this.barraFinal.y,
        type: "moveBar",
      });
    });
    
    this.talkButton.on("pointerdown", (pointer) => { // Al pulsar el botón de hablar
      this.buttonVec.forEach((button) => {
        button.disableInteractive();
        button.setAlpha(0.5);
      });
      if (this.moneco === 0) // Botones de hablar para Cucu
      {
      this.talkOption1 = this.add.sprite(200, 500, "talkButton").setInteractive();
      this.talkOption2 = this.add.sprite(550, 500, "talkButton").setInteractive();
      this.talkOption3 = this.add.sprite(850, 500, "talkButton").setInteractive();
      this.talkOption4 = this.add.sprite(1200, 500, "talkButton").setInteractive();
      this.talkOptionsVec = [
        this.talkOption1,
        this.talkOption2,
        this.talkOption3,
        this.talkOption4
      ];
      this.talkOption1.on("pointerdown", (pointer) => { // Chiste
        this.persuasion = 10;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"chisteCombate",prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
        });
      this.talkOption2.on("pointerdown", (pointer) => { // Animarle
        this.persuasion = 15;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"animarleCombate",prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
      this.talkOption3.on("pointerdown", (pointer) => { // Dato
        this.persuasion = 0;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"datoCombate",prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
      this.talkOption4.on("pointerdown", (pointer) => { // Reírse de él
        this.persuasion = -5;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"reirseCombate",prevKey:cst.SCENES.SALA18CUCU,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
    }
      else if (this.moneco === 1) // Botones de hablar para Don Lindo
      {
      if (this.objetos[objs.OBJECTS.floresRosas])
      this.talkOption1 = this.add.sprite(200, 500, "talkButton").setInteractive();
      else
      {
        this.talkOption1 = this.add.sprite(200, 500, "talkButton");
        this.talkOption1.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.bombonesPomponina])
      {
        this.talkOption2 = this.add.sprite(550, 500, "talkButton").setInteractive();
      }
      else 
      {
        this.talkOption2 = this.add.sprite(550, 500, "talkButton")
        this.talkOption2.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.abanico])
      {
      this.talkOption3 = this.add.sprite(850, 500, "talkButton").setInteractive();
      }
      else
      {
      this.talkOption3 = this.add.sprite(850, 500, "talkButton");
      this.talkOption3.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.floresHijo])
      {
        this.talkOption4 = this.add.sprite(1200, 500, "talkButton").setInteractive();
      }
      else 
      {
        this.talkOption4 = this.add.sprite(1200, 500, "talkButton")
        this.talkOption4.setAlpha(0.5);
      }

      if (this.objetos[objs.OBJECTS.collar])
      {
        this.talkOption5 = this.add.sprite(200, 700, "talkButton").setInteractive();
      }
      else 
      {
        this.talkOption5 = this.add.sprite(200, 700, "talkButton")
        this.talkOption5.setAlpha(0.5);
      }
        this.talkOption6 = this.add.sprite(550, 700, "talkButton").setInteractive();
        this.talkOption7 = this.add.sprite(850, 700, "talkButton").setInteractive();
        this.talkOption8 = this.add.sprite(1200, 700, "talkButton").setInteractive();

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
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"floresRosasCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.floresRosas] = false;
        this.parar();
        });
      this.talkOption2.on("pointerdown", (pointer) => { // Bombones
        this.persuasion = 30;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"bombonesCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.bombonesPomponina] = false;
        this.parar();
      });
      this.talkOption3.on("pointerdown", (pointer) => { // Abanico
        this.persuasion = 30;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"abanicoCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.abanico] = false;
        this.parar();
      });
      this.talkOption4.on("pointerdown", (pointer) => { // Ramo rosas
        this.persuasion = 20;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"rosasCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.floresHijo] = false;
        this.parar();
      });
      this.talkOption5.on("pointerdown", (pointer) => { // Collar
        this.persuasion = -20;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"collarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.collar] = false;
        this.parar();
      });
      this.talkOption6.on("pointerdown", (pointer) => { // Ordenar
        this.persuasion = 0;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"ordenarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
      this.talkOption7.on("pointerdown", (pointer) => { // Amenazar
        this.persuasion = -5;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"amenazarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
      this.talkOption8.on("pointerdown", (pointer) => { // Halagar
        this.persuasion = 12;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"halagarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
    }
      else if (this.moneco === 2) // Botones de hablar para Pomponina
      {
      if (this.objetos[objs.OBJECTS.floresRosas])
      this.talkOption1 = this.add.sprite(200, 500, "talkButton").setInteractive();
      else
      {
        this.talkOption1 = this.add.sprite(200, 500, "talkButton");
        this.talkOption1.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.bombonesPomponina])
      {
        this.talkOption2 = this.add.sprite(550, 500, "talkButton").setInteractive();
      }
      else 
      {
        this.talkOption2 = this.add.sprite(550, 500, "talkButton")
        this.talkOption2.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.abanico])
      {
      this.talkOption3 = this.add.sprite(850, 500, "talkButton").setInteractive();
      }
      else
      {
      this.talkOption3 = this.add.sprite(850, 500, "talkButton");
      this.talkOption3.setAlpha(0.5);
      }
      if (this.objetos[objs.OBJECTS.floresHijo])
      {
        this.talkOption4 = this.add.sprite(1200, 500, "talkButton").setInteractive();
      }
      else 
      {
        this.talkOption4 = this.add.sprite(1200, 500, "talkButton")
        this.talkOption4.setAlpha(0.5);
      }

      if (this.objetos[objs.OBJECTS.collar])
      {
        this.talkOption5 = this.add.sprite(200, 700, "talkButton").setInteractive();
      }
      else 
      {
        this.talkOption5 = this.add.sprite(200, 700, "talkButton")
        this.talkOption5.setAlpha(0.5);
      }
        this.talkOption6 = this.add.sprite(550, 700, "talkButton").setInteractive();
        this.talkOption7 = this.add.sprite(850, 700, "talkButton").setInteractive();
        this.talkOption8 = this.add.sprite(1200, 700, "talkButton").setInteractive();

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
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"floresRosasCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.floresRosas] = false;
        this.parar();
        });
      this.talkOption2.on("pointerdown", (pointer) => { // Bombones
        this.persuasion = 30;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"bombonesCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.bombonesPomponina] = false;
        this.parar();
      });
      this.talkOption3.on("pointerdown", (pointer) => { // Abanico
        this.persuasion = 30;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"abanicoCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.abanico] = false;
        this.parar();
      });
      this.talkOption4.on("pointerdown", (pointer) => { // Ramo rosas
        this.persuasion = 20;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"rosasCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.floresHijo] = false;
        this.parar();
      });
      this.talkOption5.on("pointerdown", (pointer) => { // Collar
        this.persuasion = -20;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"collarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.objetos[objs.OBJECTS.collar] = false;
        this.parar();
      });
      this.talkOption6.on("pointerdown", (pointer) => { // Ordenar
        this.persuasion = 0;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"ordenarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
      this.talkOption7.on("pointerdown", (pointer) => { // Amenazar
        this.persuasion = -5;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"amenazarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
      this.talkOption8.on("pointerdown", (pointer) => { // Halagar
        this.persuasion = 12;
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"halagarCombate",prevKey:cst.SCENES.SALA38POMPONINA,objs:this.objetos});
        eventsCenter.emit("persuade", this.persuasion);
        this.parar();
      });
    }
      this.talkOptionsVec.forEach((button) => {
        button.on("pointerover", (pointer) => {
          button.setAlpha(0.5);
        });

        button.on("pointerout", (pointer) => {
          button.setAlpha(1);
        });

        button.on("pointerdown", (pointer) => {
          this.talkOptionsVec.forEach((option) => {
            option.setAlpha(0.5);
            option.disableInteractive();
            this.buttonVec.forEach((button) => {
              button.setAlpha(0.5);
              button.disableInteractive();
            });
            this.backButton2.destroy();
          });
        });
      });
    
      this.backButton2 = this.add
        .sprite(1200, 150, "backButton")
        .setInteractive();
      this.backButton2.on("pointerover", (pointer) => {
        this.backButton2.setAlpha(0.5);
      });
      this.backButton2.on("pointerout", (pointer) => {
        this.backButton2.setAlpha(1);
      });
      this.backButton2.on("pointerdown", (pointer) => {
        this.talkOptionsVec.forEach((option) => {
          option.destroy();
        });
        this.attackButton.setInteractive();
        this.attackButton.setAlpha(1);
        this.talkButton.setInteractive();
        this.talkButton.setAlpha(1);
        if (this.mercy) {
          this.mercyButton.setInteractive();
          this.mercyButton.setAlpha(1);
        }
        this.backButton2.destroy();
      });
    });
    this.mercyButton.on("pointerdown", (pointer) => {
      eventsCenter.emit("isMercy", true);
      this.parar();
    });
  }
  update(time, delta) {
    eventsCenter.on("daño", this.calcularDaño, this);
    eventsCenter.on("exit", this.parar, this);
  }

  setMercyButton(monecoPP) {
    if (monecoPP >= 100) this.mercy = true;
    else this.mercy = false;
  }
 
  prevScene(key) {this.prevKey = key;}

  parar() {
    this.scene.pause();   
    this.scene.resume(this.prevKey);
    this.scene.sendToBack();
  }
  calcularDaño(){
    let distancia = 1000; // Distancia entre las barras
    if (this.barramovil1.x >= this.barramovil2.x)
      distancia = this.barramovil1.x - this.barramovil2.x;
    else
      distancia = this.barramovil2.x - this.barramovil1.x;
    switch (true)
    {
      case distancia < 10:
        this.damage = 20;
        break;
        case distancia < 20:
        this.damage = 18;
        break;
        case distancia < 30:
        this.damage = 16;
        break;
        case distancia < 40:
        this.damage = 14;
        break;
        case distancia < 50:
        this.damage = 12;
        break;
        case distancia < 60:
        this.damage = 10;
        break;
        default:
        this.damage = 5;
        break;
    }
  eventsCenter.emit("damage",this.damage);
  eventsCenter.off("damage");
  eventsCenter.emit("exit",true);
  }
}