import eventsCenter from "../eventsCenter.js";
import rod from "./rod.js";
export default class MenuCombate extends Phaser.Scene {
  constructor(datos) {
    super({ key: "mc" });
    this.test = false;
  }

  create() {
    this.scene.bringToTop();
    this.menu = this.add.image(700, 500, "mc");
    this.menu.setAlpha(0.5);
    this.mercy;

    this.attackButton = this.add.sprite(300, 700, "attackButton").setInteractive();
    this.talkButton = this.add.sprite(700, 700, "talkButton").setInteractive();

    eventsCenter.on("canMercy", this.setMercyButton, this);
    if (!this.mercy) {
      this.mercyButton = this.add.sprite(1100, 700, "mercyButton");
      this.mercyButton.setAlpha(0.5);
    } else {
      this.mercyButton = this.add.sprite(1100, 700, "mercyButton").setInteractive();
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
      button.on("pointerdown", (pointer) => {
        //esto en verdad no debe pasar con ningún botón
      // this.scene.pause();
      //  this.scene.resume("SALA18CUCU");
      // this.scene.sendToBack();
      });
    });
    // Botón de ataque
    this.attackButton.on("pointerdown", (pointer) => { 
      this.backButton = this.add.sprite(100, 100, "backButton").setInteractive();
      this.backButton.on("pointerover", (pointer) => {
        this.backButton.setAlpha(0.5);
      });
      this.backButton.on("pointerout", (pointer) => {
        this.backButton.setAlpha(1);
      });
      this.backButton.on("pointerdown", (pointer) => {
        this.barraFinal.destroy();
        eventsCenter.emit("back",this);
          this.attackButton.setInteractive();
          this.attackButton.setAlpha(1);
          this.talkButton.setInteractive();
          this.talkButton.setAlpha(1);
          if (this.mercy)
          {
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
        this.barraFinal = this.add.sprite(700, 500, "bar");
    // Primera barra móvil
    this.barramovil1 = new rod({
      scene: this,
          x: this.barraFinal.x-50,
          y: this.barraFinal.y,
          type: "moveBar"
    });
    // Segunda barra móvil
    this.barramovil2 = new rod({
      scene: this,
      x: this.barraFinal.x+450,
      y: this.barraFinal.y,
      type: "moveBar"
    });
    // Gestión de daño      //CÓMO SE DETECTA QUE SE HAYA PULSADO EL ESPACIO??????
    if (this.barramovil1.x >= this.barramovil2.x)
      this.damage = 1000/(this.barramovil1.x-this.barramovil2.x);
      else this.damage = 1000/(this.barramovil2.x-this.barramovil1.x);
      eventsCenter.emit("damage", this.damage);
      });
    this.talkButton.on("pointerdown", (pointer) => {
      this.persuasion = 10;
      eventsCenter.emit("persuade", this.persuasion);
      this.parar();
    });
    this.mercyButton.on("pointerdown", (pointer) => {
      eventsCenter.emit("isMercy", true);
    });
  }
  update(time,delta)
  {
   // this.test = false;
    eventsCenter.on("exit",this.parar,this);
  }
  setMercyButton(monecoPP) {
    if (monecoPP === 100) this.mercy = true;
    else this.mercy = false;
    console.log(this.mercy);
  }
  parar()
  {
    this.scene.pause();
    this.scene.resume("SALA18CUCU");
    this.scene.sendToBack();
  }
}
