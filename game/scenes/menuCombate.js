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

    this.attackButton = this.add
      .sprite(200, 150, "attackButton")
      .setInteractive();
    this.talkButton = this.add.sprite(550, 150, "talkButton").setInteractive();

    eventsCenter.on("canMercy", this.setMercyButton, this);
    if (!this.mercy) {
      this.mercyButton = this.add.sprite(850, 150, "mercyButton");
      this.mercyButton.setAlpha(0.5);
    } else {
      this.mercyButton = this.add
        .sprite(850, 150, "mercyButton")
        .setInteractive();
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
      this.backButton = this.add
        .sprite(1200, 150, "backButton")
        .setInteractive();
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
        x: this.barraFinal.x + 450,
        y: this.barraFinal.y,
        type: "moveBar",
      });
      // Gestión de daño      //CÓMO SE DETECTA QUE SE HAYA PULSADO EL ESPACIO??????
      if (this.barramovil1.x >= this.barramovil2.x)
        this.damage = 1000 / (this.barramovil1.x - this.barramovil2.x);
      else this.damage = 1000 / (this.barramovil2.x - this.barramovil1.x);
      eventsCenter.emit("damage", this.damage);
    });
    this.talkButton.on("pointerdown", (pointer) => {
      //this.persuasion = 10;
      this.buttonVec.forEach((button) => {
        button.disableInteractive();
        button.setAlpha(0.5);
      });
      this.talkOption1 = this.add
        .sprite(200, 700, "talkButton")
        .setInteractive();
      this.talkOption2 = this.add
        .sprite(550, 700, "talkButton")
        .setInteractive();
      this.talkOption3 = this.add
        .sprite(850, 700, "talkButton")
        .setInteractive();
      this.talkOption4 = this.add
        .sprite(1200, 700, "talkButton")
        .setInteractive();

      this.talkOptionsVec = [
        this.talkOption1,
        this.talkOption2,
        this.talkOption3,
        this.talkOption4,
      ];
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
      this.talkOption1.on("pointerdown", (pointer) => {
        this.persuasion = 10;
        let text = this.add.text(
          200,
          500,
          "- Has elegido la opción 1, que da 10 de persuasión -"
        );
        text.setFont("Arial Black");
        text.setFontSize(50);
        this.timer = this.time.addEvent({
          delay: 2000,
          callback: () => {
            eventsCenter.emit("persuade", this.persuasion);
            this.parar();
          },
        });
      });
      this.talkOption2.on("pointerdown", (pointer) => {
        this.persuasion = 20;
        let text = this.add.text(
          200,
          500,
          "- Has elegido la opción 2, que da 20 de persuasión -"
        );
        text.setFont("Arial Black");
        text.setFontSize(50);
        this.timer = this.time.addEvent({
          delay: 2000,
          callback: () => {
            eventsCenter.emit("persuade", this.persuasion);
            this.parar();
          },
        });
      });
      this.talkOption3.on("pointerdown", (pointer) => {
        this.persuasion = -30;
        let text = this.add.text(
          200,
          500,
          "- Has elegido la opción 3, que da -30 de persuasión -"
        );
        text.setFont("Arial Black");
        text.setFontSize(50);
        this.timer = this.time.addEvent({
          delay: 2000,
          callback: () => {
            eventsCenter.emit("persuade", this.persuasion);
            this.parar();
          },
        });
      });
      this.talkOption4.on("pointerdown", (pointer) => {
        this.persuasion = 0;
        let text = this.add.text(
          200,
          500,
          "- Has elegido la opción 4, que da 0 de persuasión -"
        );
        text.setFont("Arial Black");
        text.setFontSize(50);
        this.timer = this.time.addEvent({
          delay: 2000,
          callback: () => {
            eventsCenter.emit("persuade", this.persuasion);
            this.parar();
          },
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

      //this.parar();
    });
    this.mercyButton.on("pointerdown", (pointer) => {
      eventsCenter.emit("isMercy", true);
    });
  }
  update(time, delta) {
    // this.test = false;
    eventsCenter.on("exit", this.parar, this);
  }
  setMercyButton(monecoPP) {
    if (monecoPP === 100) this.mercy = true;
    else this.mercy = false;
    console.log(this.mercy);
  }
  parar() {
    this.scene.pause();
    this.scene.resume("Sala18Cucu");
    this.scene.sendToBack();
  }
}
