import { npcs } from "./npcs.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js"
import { cst } from "./cst.js";
export default class Dialogo extends Phaser.Scene {
  constructor() {
    super({ key: "dialogo" });
  }

  init(datos) {
    this.npc = datos.npc;
    this.prevKey = datos.prevKey;
    this.objetos = datos.objs;
  }
  create() {
    //habria que crear los arrays y todos los mensajes de cada muñeco
    this.scene.bringToTop();
    this.events.on(Phaser.Scenes.Events.RESUME, () => {
      eventsCenter.on("thisKey", this.prevScene, this);
      eventsCenter.off("thisKey", this.prevScene, this);
    });
    this.menu = this.add.image(700, 500, "mc");
    this.menu.setAlpha(0.5);
    
    this.bebe = ["agugutata."];

    if (this.objetos[objs.OBJECTS.bombonesRepartidos1] && this.objetos[objs.OBJECTS.bombonesRepartidos2])
    this.abuela = ["Pigmalión: Ya he repartido las cajas. Tome el dinero.", "Abuela: Muchas gracias por su ayuda, joven.", "Me recuerda usted a la joven que está buscando.", "Me ayudó mucho cuando la conocí.", "Me dijo que se fue a una casa al fondo de la calle.", "Si la ve, ¿le dará estos bombones de mi parte?", "Pigmalión: Por supuesto. Y gracias por la información."]
    else this.abuela = ["Pigmalión: Buenas tardes.", "Abuela: Buenas tardes, caballero. ¿Qué desea?", "Pigmalión: Le quería preguntar si ha visto a una joven con el pelo rubio y rizado y con un vestido azul.","Abuela: Hmm a lo mejor.", "Pero antes de decirle lo que sé,","¿podría ayudarme a repartir estas cajas de bombones, por favor?","Pigmalión: Trato hecho, volveré tras repartirlas.", "Abuela: Muchas gracias. Es usted muy amable."]
    
    if (!this.objetos[objs.OBJECTS.repartoBombones])
    this.cliente = ["Transeúnte: Espero que me traigan mis bombones pronto.", "¡Me muero de hambre!"];
    else  this.cliente = ["Pigmalión: Usted ha pedido estos bombones, ¿verdad?","Transeúnte: ¡Al fin! Muchas gracias, caballero.", "Aquí tiene el dinero."];
   
    if (!this.objetos[objs.OBJECTS.repartoBombones])
    this.cliente2 = ["Señor: Me pregunto cuándo llegará mi pedido."];
    else this.cliente2 = ["Señor: ¡Oh! ¿Es usted el repartidor?", "Pigmalión: Así es, aquí tiene.", "Señor: Muchas gracias, aquí tiene el dinero."];
   
    if(!this.objetos[objs.OBJECTS.abanicoRoto])
      this.encargadoAnticuario = ["Señor: Buenas tardes, ¿en qué puedo ayudarle?","Pigmalión: Quería comprar un collar.","Señor: Muy bien, pero desgraciadamente solo me queda uno.","¿Le interesa? Por 20 euros es suyo.","Pigmalión: Perfecto, pues me lo llevo.", "Señor: Muchas gracias, que pase un buen día."];
    else this.encargadoAnticuario = ["Señor: Buenas tardes, ¿en qué puedo ayudarle?","Pigmalión: Quería comprar un abanico.","Señor: Muy bien.¿Qué le parece este de aquí?","Por 5 euros es suyo.","Pigmalión: Perfecto, pues me lo llevo.", "Señor: Muchas gracias, que pase un buen día."];

    if (!this.objetos[objs.OBJECTS.floresHijo])
    this.hijoFlorista = ["Chaval: ¡Qué nervios!", "Ojalá no se me hubiesen olvidado las flores,", "ya no me da tiempo a ir a por ellas."];
    else this.hijoFlorista = ["Pigmalión: Eres el hijo del florista, ¿verdad?", "Me dijo que esto era tuyo.", "Chaval: ¡Mis flores! ¡Qué bien, tengo una cita y no tenía tiempo de volver.", "Muchísimas gracias.", "Pigmalión: De nada. Oye, ¿has visto a una chica rubia con un vestido azul por aquí?", "Chaval: Sí, claro que la conozco.", "Gracias a ella me atreví a declararme a la chica que me gusta.","Además le gustan mucho las flores, como a mí.", "Le quería dar un ramo de rosas de color rosa por ayudarme,", "ya que son sus favoritas, pero no la he vuelto a ver.", "Pigmalión: Pues veré que puedo hacer. Que vaya bien.", "Chaval: ¡Gracias!"];
    if(this.objetos[objs.OBJECTS.hijoAyudado]) this.florista = ["Pigmalión: Le he llevado las flores a tu hijo.", "Florista: ¿De verdad? Te lo agradezco de todo corazón.", "¿Hay algo que pueda hacer para compensarte toda la ayuda?", "Pigmalión: Pues la verdad es que sí. ¿Tienes rosas de color rosa?", "Florista: Sí, son de las que mejor venden.", "¿Quieres un ramo?", "Pigmalión: Sí, por favor.", "Florista: Pues todo tuyo."];
    else if (this.objetos[objs.OBJECTS.llaveFlorista])
    this.florista = ["Florista: ¿Esas son mis llaves? ¡Sí lo son!", "Pigmalión: Aquí las tiene.", "Florista: Muchísimas gracias caballero.", "No tengo mucho que ofrecerle,", "pero estas flores son para usted.", "Eran para una cita de mi hijo, pero se le olvidaron y ya no hay nada que hacer."];
    else this.florista = ["Florista: ¿Dónde diablos estarán?", "El jefe me va a matar como no las encuentre.", "Pigmalión: ¿Le ocurre algo?", "Florista: ¡Oh! Buenas tardes, caballero.", "El problema es que he perdido las llaves de la trastienda","y como no las encuentre para cuando venga el jefe, me despedirá.","Pigmalión: Vaya, pues si las encuentro se lo diré.","Florista: Muchas gracias, buen hombre."]
    
    this.jarron = ["Has encontrado una llave."];
    
    if (!this.objetos[objs.OBJECTS.llaveComoda])
      this.comoda = ["Es una cómoda con un espejo.", "Hay un cajón pero está cerrado con llave."]
    else this.comoda = ["Abres el cajón con la llave de la fuente.", "Hay un abanico roto.", "Pigmalión: A Pomponina le encantaba su abanico.", "Seguro que se alegra si le consigo otro."]
    
    this.fuente = ["Has encontrado una llave en la fuente"];


    this.finalNeutral=["URDEMALAS: Tanto tiempo trabajando para ti...","URDEMALAS: Y no has sido capaz de entender lo\nque necesitábamos.", "PIGMALIÓN: He hecho lo que tenía que hacer.","PIGMALIÓN: No me habéis dejado opción alguna.", "PIGMALIÓN: Fuistéis creados por y para mí.","PIGMALIÓN: Y ya es hora de volver al trabajo.","URDEMALAS: No te confundas.","URDEMALAS: Vas a tener que empezar a trabajar\nsin tus muñecos.","PIGMALIÓN: ¿Qué estás insinuando?","URDEMALAS: Te quedas tú solo.","PIGMALIÓN: No podéis hacer eso.","URDEMALAS: Podemos y lo haremos.","URDEMALAS: Mas no te preocupes...","URDEMALAS: Volveremos a por ti...", "URDEMALAS: Lo que has hecho tendrá\nconsecuencias."];
    this.finalPacifista=["URDEMALAS: Atónito\n me encuentro, de que alguien como tú, después de todo este tiempo y todo lo que nos has hecho, nos hayas por fin entendido.", "PIGMALIÓN : ¡Urdemalas! ¡Por ti estaba preguntándome!. Me alegro de que estés bien","URDEMALAS: Lo cierto es que estaba decidido a irme.", "URDEMALAS: Pero después de ver cómo tratabas a mis compañeros,","creo que te daré una segunda oportunidad.","URDEMALAS: Pero no la vuelvas a cagar, ¿entendido?"]
    this.finalGenocida=["URDEMALAS: Después de todo lo que hemos hecho por ti...", "de lo que hemos tragado... ", "encima nos cazas como si de ganado nos tratasemos...", "¿Es que no significamos nada para ti?", "Me las vas a pagar."]
    

    this.iterator = 0;
    this.e = this.input.keyboard.addKey("E");

    this.text = this.add.text(150, 500, this.bebe[this.iterator]);
    this.text.setFontSize(40);
  }

  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.e)) {
      this.iterator++;
    }
    switch (this.npc) {
      case npcs.NPCS.bebe:
        if (this.iterator != this.bebe.length)
          this.text.setText(this.bebe[this.iterator]);
        else {
          this.end();
        }
        break;
      case npcs.NPCS.caja:
        if (this.iterator != this.caja.length)
          this.text.setText(this.caja[this.iterator]);
        else {
          this.end();
        }
        break;
          case npcs.NPCS.abuela:
            if (this.iterator != this.abuela.length)
              this.text.setText(this.abuela[this.iterator]);
            else {
              this.end();
            }
            break;
            case npcs.NPCS.cliente:
            if (this.iterator != this.cliente.length)
              this.text.setText(this.cliente[this.iterator]);
            else {
              this.end();
            }
            break;
            case npcs.NPCS.cliente2:
            if (this.iterator != this.cliente2.length)
              this.text.setText(this.cliente2[this.iterator]);
            else {
              this.end();
            }
            break;
            case npcs.NPCS.encargadoAnticuario:
              if (this.iterator != this.encargadoAnticuario.length)
                this.text.setText(this.encargadoAnticuario[this.iterator]);
              else {
                this.end();
              }
              break;
              case npcs.NPCS.hijoFlorista:
              if (this.iterator != this.hijoFlorista.length)
                this.text.setText(this.hijoFlorista[this.iterator]);
              else {
                this.end();
              }
              break;
              case npcs.NPCS.florista:
                if (this.iterator != this.florista.length)
                  this.text.setText(this.florista[this.iterator]);
                else {
                  this.end();
                }
                break;
                case npcs.NPCS.jarron:
                if (this.iterator != this.jarron.length)
                  this.text.setText(this.jarron[this.iterator]);
                else {
                  this.end();
                }
                break;
                case npcs.NPCS.fuente:
                if (this.iterator != this.fuente.length)
                  this.text.setText(this.fuente[this.iterator]);
                else {
                  this.end();
                }
                break;
                case npcs.NPCS.comoda:
                if (this.iterator != this.comoda.length)
                  this.text.setText(this.comoda[this.iterator]);
                else {
                  this.end();
                }
                break;
                case npcs.NPCS.urdemalas0:
                  if (this.iterator != this.finalNeutral.length)
                    this.text.setText(this.finalNeutral[this.iterator]);
                else {
                  //CARGA PANTALLA FINAL
                  this.end();
                }
                break;
                case npcs.NPCS.urdemalas1:
                if (this.iterator != this.finalGenocida.length)
                this.text.setText(this.finalGenocida[this.iterator]);
                else {
                  this.scene.pause();
                  this.scene.sendToBack(this.prevKey);
                  this.scene.start(cst.SCENES.SALA0URDEMALAS, {
                    posx: this.sys.game.canvas.width/2,
                    posy: this.sys.game.canvas.height/2,
                    lives: 10,
                    objs: this.objetos,
                    runInfo: this.runInfo
                    });
                  }
                break;
                case npcs.NPCS.urdemalas2:
                  if (this.iterator != this.finalPacifista.length)
                    this.text.setText(this.finalPacifista[this.iterator]);
                else {
                  //CARGA PANTALLA FINAL
                  this.end();
                }
                break;

      default:
        console.log("error en el switch de diálogo");
        break;
    }
  }
  prevScene(key) {
    this.prevKey = key;
    console.log(this.prevKey);
  }
  end()
  {
    this.scene.pause();
    this.scene.resume(this.prevKey);
    this.scene.sendToBack();
  }
}