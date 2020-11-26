export default class Shoot extends Phaser.Scene {
  constructor() {
    super({ key: "Shoot" });
  }

  preload() {
    this.load.image("shoot", "./resources/sprites/cuadrado.jpg");

    let ry = Math.random() * 650; //cableadísimo por código
    console.log(ry);
  }

  create() {
    // let random = Math.random(0, 600);
    // console.log(random);
    this.shoot = this.add.sprite(1250, Math.random() * 650, "shoot"); //no me deja utilizar la variable ry ¿pk?
  }

  update(time, delta) {
      this.shoot.x-=10;
  }
}


//DUDAS 
// - Cómo eliminar el objeto cuando llega al final de la pantalla
// - Cómo instanciar este objeto en otras clases
// - Cómo utilizar la variable "ry" en el create
// - Cómo acceder a los parámetros cableados

