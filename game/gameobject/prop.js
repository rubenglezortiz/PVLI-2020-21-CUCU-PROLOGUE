import E from "./e.js"
export default class Prop extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, nombreSprite, player, wC, yC, interactive, interFunct, sala) {
    super(scene, x, y, nombreSprite);
    //anchoPC es el procentaje del total que ocupa el collider de los pies
    this.anchoPC = wC;
    //es la posición en la que está colocado el collider de los pies, = sería en el centro del sprite, 50% sería en los pies y -50 en la cabeza
    this.posYC = yC;
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(false);
    this.pigmalion = player;
    this.posYE=this.y-this.height;
    this.interFunction = interFunct;
    this.salaObj = sala;

    //20 va a ser la altura de todos
    //colliderP es el collider estático que tineen la mayoria de
    //props justo debajo, para que se choque con los pies de pigmalion
    this.colliderP = this.scene.physics.add.staticSprite(this.x,this.y + (this.height * this.posYC) / 100);
    this.colliderP.setSize((this.width * this.anchoPC) / 100, 20, true);
    this.scene.physics.add.collider(this.colliderP, this.pigmalion);
   
    //int es un booleano que indicasi se puede interactuar o no con este prop
    this.int = interactive;
    //calloFunct es la función que se ejecuta en caso de que se quiera interactuar con el prop
    this.calloFunct = interFunct;
   
    //esto es para el triger en el que sale una E para interactuar
    if (this.int) {
      this.propE = new E(this.scene,x, y - this.height/2);
      // this.propE = this.scene.add.image(x, y - this.height/2,"e");
      this.propE.y -= this.propE.height/2;
      this.propE.depth = 6
      this.e = this.scene.input.keyboard.addKey("E", false);
    }    
    console.log(this);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.depth = this.y + this.height/2;
    //como el offset está a 0.5 hay que restarle la mitad
   
    

    if (this.int){      
      if (this.scene.physics.overlap(this, this.pigmalion.sprite)){
        this.propE.visible = true;
        // this.propE.anims.play("e");
        this.propE.depth=this.depth;
        if (Phaser.Input.Keyboard.JustDown(this.e)){
          if(this.interFunction !== undefined)this.interFunction.apply(this.salaObj);
          console.log("hablo");
        }
      }
      else this.propE.visible = false;      
    }
    else if(!this.int && this.propE !== undefined)this.propE.visible = false;   
  }
}
