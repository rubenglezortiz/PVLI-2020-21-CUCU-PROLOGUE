import {
  npcs
} from "./npcs.js";
import eventsCenter from "../eventsCenter.js";
import {
  objs
} from "./objeto.js";
import {
  cst
} from "./cst.js";
export default class Dialogo extends Phaser.Scene {
  constructor() {
    super({
      key: "dialogo"
    });
  }

  init(datos) {
    this.npc = datos.npc;
    this.prevKey = datos.prevKey;
    this.objetos = datos.objs;
    this.runInfo = datos.runInfo;
    this.player = datos.player;
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

    //-----CUCU-----
    //#region
    //Diálogo inicial
    this.cucu = [
      "CUCU: (!) ¡CU CU!",
      "PIGMALIÓN: ¡¿Por que te has escapado, zoquete?!",
      "CUCU: cu cu...",
      "PIGMALIÓN: Con que te vas a comportar así ahora, ¿eh?",
      "CUCU:  ¡CU CU! (saca la lengua)",
      "Pigmalión: ¡Pues que así sea!",
    ];
    //Diálogos combate
    this.chisteCombate = [
      "PIGMALIÓN: ¿Sabes cómo se queda un mago\ndespués de comer?",
      "CUCU: …",
      "PIGMALIÓN: Magordito",
    ];
    this.animarleCombate = [
      "PIGMALIÓN: Aunque los demás se rían de ti, yo\nsé que eres especial.",
      "CUCU: :3",
    ];
    this.datoCombate = [
      "PIGMALIÓN: ¿Sabías que Los búhos son las únicas\naves que pueden ver el color azul?",
      "CUCU: ...",
    ];
    this.reirseCombate = [
      "PIGMALIÓN: JAJAJAJAJAJA CUCU, ¡QUÉ TONTO!",
      "CUCU: >:C",
    ];
    //Diálogos final de combate
    this.salvarCucu = [
      "PIGMALIÓN: Menos mal que te vuelves conmigo,\neres el único capaz de hacer reír a la gente.",
      "CUCU: CUCU :3",
    ];
    this.matarCucu = [
      "Pigmalión: Fuistes de mis primeros muñecos, se\nnota lo inferior que eres. Ahora podré\nrehacerte y mejorarte.",
      "CUCU: cu cu",
    ];
    //Puzzles
    this.bebe = [
      "BEBÉ: Jijijiji. ¡Cucu, cucu!",
      "PIGMALIÓN: Parece que Cucu ha pasado por aquí,\nse nota que ha estado jugando con el bebé.",
    ];
    this.tiendaDisfraces = [
      "PIGMALIÓN: Al principio Cucu se reía por\ncualquier tontería, no sé cuánto tiempo llevo\nsin verle sonreír.",
    ];
    this.chulapos = [
      "SEÑOR: “He visto un señor vestido raro ir en\ndirección hacia el rastro. Estuvo un rato en \nla verbena, parecía estar disfrutando como\nun niño pequeño, no paraba de reir.",
    ];
    //#endregion    

    //-----DON LINDO-----
    //#region
    //Diálogo inicial
    this.donlindo = [
      "PIGMALIÓN: Don Lindo, tú que eres de los\nmuñecos más sensatos, vuelve al teatro.",
      "DON LINDO: No, sin el amor de Pomponina no voy\na ninguna parte.",
      "PIGMALIÓN: No tienes que depender de ningún\nmuñeco, Don Lindo.",
      "DON LINDO: No, no y no. No me iré a ninguna\nparte sin su amor, y menos contigo.",
    ];
    //Diálogos combate
    this.musica = [
      "PIGMALIÓN: Tienes que volver conmigo, las farsas necesitan de tu música.",
      "DON LINDO: ¿Tan importante es mi música?",
      "PIGMALIÓN: Vuelve al teatro y pasamos un rato tocando\nalgún instrumento de los que te gustan.",
      "DON LINDO: Quizá no sea mala idea.",
    ];
    this.gritar = [
      "PIGMALIÓN: ¡QUE VENGAS CONMIGO!",
      "DON LINDO: ¡QUE NO QUIERO!",
    ];
    this.foto_pomponina = [
      "PIGMALIÓN: Asume de una vez que Pomponina pasa de ti.",
      "DON LINDO: ¡Cómo osas!",
      "PIGMALIÓN: Ya hay que ser cutre para arrastrarse tanto por Pomponina.",
      "DON LINDO: Tú no eres nadie para decir cómo conseguir los\nencantos de la hermosa Pomponina.",
      "PIGMALIÓN: No te mereces a Pomponina, no estás a su altura.",
      "DON LINDO: Cállate, apestoso. ",
    ];
    this.donlindo_persuadir = [
      "PIGMALIÓN: Si no vienes conmigo te quitaré la peluca\ny te quedarás calvo.",
      "DON LINDO: Si me voy por mi cuenta podré comprar\ntodas las pelucas que quiera.",
      "PIGMALIÓN: Te aprecio mucho, Don Lindo, siempre\nfuiste una de mis creaciones más especiales.",
      "DON LINDO: Si me quisieses tanto me habrías hecho\ncon pelo, como a los demás.",
      "PIGMALIÓN: Ponponina va a venir conmigo, se pondrá\nmuy triste si ve que la has abandonado.",
      "DON LINDO: ¡Mentiroso, mentiroso! Pomponina nunca\nvolvería contigo, ella querría escaparse\npara vivir una vida a mi lado.\nNo te creo.",
    ];
    this.gorro = [
      "PIGMALIÓN: Me han regalado un gorro, he pensado\nque te podría gustar tenerlo.",
      "DON LINDO: He de decir que esta vez tienes razón.\n¡Me gusta! Gracias.",
    ];

    this.ukelele = [
      "PIGMALIÓN: Siento decirte que unos gamberros han roto tu ukelele.\nPero he podido conseguirte uno.",
      "DON LINDO: Gracias Pigmalión. Sabes que significa mucho para mí.",
    ];

    this.cartera = [
      "PIGMALIÓN: Seguro que aceptas esta cartera con dinero para volver al teatro..",
      "DON LINDO: A ver si te das cuenta de que no todo gira\nen torno al dinero, garrapata sin patas.",
    ];
    //Diálogos final de combate
    this.salvarDonLindo = [
      "DON LINDO: Bueno, creo que mi sitio está ahí en\nel teatro, haciendo la música de tus farsas.\n En verdad lo echo de menos.",
    ];
    this.matarDonLindo = [
      "DON LINDO: Vaya… Creo que ahora tendré que\ntocar con mi ukelele en algún otro lugar… \nEspero que Pomponina, por mucho que me duela,\nno esté allí viéndome, que se quede aquí…\nsaa salvo.",
    ];
    //Puzzles
    this.tabernero = [
      "TABERNERO: ¡Malditos gamberros!",
      "PIGMALIÓN: ¿Qué sucede?",
      "TABERNERO: Pues mira, vino un hombre muy majo por aquí, como todos, con sus\nproblemas, pero se notaba que era muy buena persona.\nEstuvimos charlando un rato y luego nos amenizó el día tocando\nun poco de música con un ukelele.",
      "TABERNERO: Sin embargo, tenía que irse y,\nnos pidió que le guardásemos su ukelele,\npero unos gamberros entraron y lo rompieron.",
      "PIGMALIÓN: ¡Menudos sinvergüenzas!",
      "TABERNERO: Completamente. Siempre están haciendo de las suyas…\nOjalá alguien le pare los pies alguna vez.",
      "PIGMALIÓN PENSANDO: ¿Dónde podría conseguir un ukelele nuevo?\nA Don Lindo no le gustará ver que le han roto\nel suyo y no tener nada con lo que tocar.",
    ];
    this.bullying = [
      "PIGMALIÓN: Eh tú, sinvergüenza,\n¡deja al joven en paz!",
      "(EL GAMBERRO SE VA)",
      "JOVEN: Muchísimas gracias buen hombre.\nLe he visto con una cartera que no es suya,\nsino de la dependiente de la tienda de música.",
      "PIGMALIÓN: La has cogido de vuelta y\nhan ido a por ti, ¿verdad?",
      "JOVEN: Efectivamente. ¿Podrías llevársela\nde vuelta?",
      "PIGMALION (PENSANDO): Podría devolvérsela\no podría ofrecérsela a Don Lindo...",
      'HAS RECIBIDO UNA "CARTERA"',
    ];

    if (
      this.objetos[objs.OBJECTS.gorroRepartido1] &&
      this.objetos[objs.OBJECTS.gorroRepartido2]
    )
      this.dependienteRopa = [
        "PIGMALIÓN: Ya los he repartido.",
        "DEPENDIENTE: ¡Muchísimas gracias! Supongo que antes te referías a Don Lindo,\n¿me equivoco?",
        "PIGMALIÓN: En absoluto.",
        "DEPENDIENTE: Se pasó por aquí de casualidad, estuvimos hablando,un buen rato.\nMe comentaba cosas de un teatro y de una mujer por la que está muy enamorado\npor lo visto.\nHasta tocó algo con un ukelele.\nSin embargo, nos entretuvimos mucho y ha sido la causa\npor la que voy tan mal de tiempo.\nSin darme cuenta, se me olvidó darle a él un gorro.\n¿Te importaría dárselo de mi parte?\nMe da pena haberme olvidado de dárselo.",
        'HAS RECIBIDO UN "GORRO"',
      ];
    
      else
        this.dependienteRopa = [
          "PIGMALIÓN: Perdona, ¿has visto por aquí a un tipo con traje y corbata,\ny que además parece que lleva una peluca?",
          "DEPENDIENTE: Me quiere sonar sí, pero ahora mismo no lo termino de recordar.\nAdemás, estoy muy liado.Tengo que ordenar toda la tienda y repartir estos gorros.\n¿Te importaría echarme una mano con ellos?\nMientras intentaré pensar en el hombre que me has dicho.",
          "PIGMALIÓN: Está bien, ¿a quién tengo que dárselos?",
          "DEPENDIENTE: A cualquier persona que veas que tiene frío por la calle,\nse acerca el invierno y, si entre todos colaboramos,\nharemos que el invierno sea menos duro.",
        ];
    
    if (this.objetos[objs.OBJECTS.ukelele]) {
      this.dependienta_musica = [
        "DEPENDIENTA: ¡Muchísimas gracias por traérmela de vuelta!\nSi te soy sincera, la daba por perdida.\nToma este ukelele como agradecimiento",
        "PIGMALIÓN (PENSANDO). Seguro que se lo puedo dar\na Don Lindo. Le encantará",
        'HAS RECIBIDO UN "UKELELE"',
      ];
    } else {
      this.dependienta_musica = [
        "PIGMALIÓN: Hola. Venía a comprar un…",
        "DEPENDIENTA: ¡Está cerrado!",
        "PIGMALIÓN: Pero si no es hora de cerrar.",
        "DEPENDIENTA: ¡He dicho que está cerrado! Acaban de venir unos gamberros\ny se han llevado mi cartera. No pienso atender a nadie.",
        "PIGMALIÓN PENSANDO: Creo que alguien debería pararle\nlos pies a esos impresentables.",
      ];
    }

    if (
      this.objetos[objs.OBJECTS.gorroRepartido1] &&
      this.objetos[objs.OBJECTS.gorrosARepartir]
    )
      this.frio1 = ["¿Para mí? ¡Gracias!"];
    else this.frio1 = ["¡TRANSEUNTE: Que frío!"];

    if (
      this.objetos[objs.OBJECTS.gorroRepartido2] &&
      this.objetos[objs.OBJECTS.gorrosARepartir]
    )
      this.frio2 = ["¡OH! ¡Muchas gracias!"];
    else this.frio2 = ["¡TRANSEUNTE: ¡ Hace tanto frío que puede \nque nieve!"];
    this.foto = [
      "PIGMALIÓN PENSANDO: Nunca imaginé que un muñeco se podría enamorar de otro."
    ];
    //#endregion

    //-----POMPONINA-----
    //#region
    //Diálogo inicial
    this.pomponina = [
      "POMPONINA: No sé por qué has venido hasta mí,\n no pienso volver contigo.",
      "PIGMALIÓN: No seas boba, no tienes ningún\n sitio a dónde ir.",
      "POMPONINA: ¡Me da igual! encontraré a alguien\n que me lleve consigo. Además, seguramente será\n más divertido que tú.",
      "PIGMALIÓN: Tu sitio es aquí, en el teatro,\n conmigo y tus compañeros.",
      "POMPONINA: No me interesa el teatro, no me \ninteresan mis compañeros, y mucho menos me\n interesas tú.",
    ];
    //Diálogos combate
    this.rosasCombate = [
      "PIGMALIÓN: Te he traído estas rosas. Como\nsiempre te han gustado pensé que te alegrarían.",
      "POMPONINA:  Ohh, son muy bonitas, quizás\npodríamos llegar a entendernos.",
    ];
    this.floresRosasCombate = [
      "PIGMALIÓN: Pensé que esta sería una buena forma de\n disculparme",
      "POMPONINA: ¡Son rosas! ¡Son mis favoritas!\n Muchas gracias, Pigmalión.",
    ];
    this.collarCombate = [
      "PIGMALIÓN: Te he traído un collar. A las \nchicas os encantan estas cosas, ¿no?",
      "POMPONINA: ¡No! Te he dicho muchísimas veces \nque no me gustan los collares! Si vas a tener\nun detalle deberías darme algo especial\npara mí, no cualquier baratija que encuentres\npor ahí.",
    ];
    this.bombonesCombate = [
      "PIGMALIÓN: Toma. Esto me lo dió una anciana a\nla que ayudaste para que te lo trajese.",
      "POMPONINA:¿Ha conseguido mantener el negocio?",
      "PIGMALIÓN: Sí, y todo gracias a tí. Esa es la\nrazón por la que creo que nos podemos entender.",
      "POMPONINA:  Gracias por traérmelo. (...) \n¿De verdad no estás enfadado?",
      "PIGMALIÓN: No, de hecho nunca he estado tan \norgulloso de ti como ahora.",
    ];
    this.abanicoCombate = [
      "PIGMALIÓN: Encontré tu abanico roto. Como le\ntenías tanto cariño  decidí llevarlo\na reparar.",
      "POMPONINA: ¡Oh, qué detalle! Muchas gracias,\nPigmalión. Parece que te importo más\nnde lo que pensaba.",
    ];
    this.halagarCombate = [
      "PIGMALIÓN: ¡Cuidado! No debes ponerte bajo el\nsol.",
      "POMPONINA: ¿Se puede saber por qué me dices\neso ahora?",
      "PIGMALIÓN: Porque te derrites, bombón.",
      "POMPONINA: Tendré cuidado, a nadie le gustan\nlos bombones derretidos.",
    ];
    this.amenazarCombate = [
      "PIGMALIÓN: Vas a tener un castigo muy gordo\ncomo no vengas conmigo",
      "POMPONINA: siempre estás igual, estoy cansada\nde tus castigos, no pienso volver.",
    ];
    this.ordenarCombate = [
      "PIGMALIÓN: Vuelve a tu caja.",
      "POMPONINA:  ¡No me da la gana! ",
    ];
    //Diálogos final de combate
    this.salvarPomponina = [
      "POMPONINA: Creo que después de tanto tiempo al\n fin empezamos a entendernos. Te daré otra oportunidad,\npero más te vale que me trates como a la\nestrella que soy.",
    ];
    this.matarPomponina = [
      "POMPONINA: No puede acabar así...todavía\nnecesita…mi...ayuda...",
    ];
    //Puzzles
    if (
      this.objetos[objs.OBJECTS.bombonesRepartidos1] &&
      this.objetos[objs.OBJECTS.bombonesRepartidos2]
    )
      this.abuela = [
        "Pigmalión: Ya he repartido las cajas. Tome el dinero.",
        "Abuela: Muchas gracias por su ayuda, joven.",
        "Me recuerda usted a la joven que está buscando.",
        "Me ayudó mucho cuando la conocí.",
        "Me dijo que se fue a una casa al fondo de\nla calle.",
        "Si la ve, ¿le dará estos bombones de mi parte?",
        "Pigmalión: Por supuesto. Y gracias por la\ninformación.",
      ];
    else
      this.abuela = [
        "Pigmalión: Buenas tardes.",
        "Abuela: Buenas tardes, caballero. ¿Qué desea?",
        "Pigmalión: Le quería preguntar si ha visto\n a una joven con el pelo rubio y rizado\ny con un vestido azul.",
        "Abuela: Hmm a lo mejor.",
        "Pero antes de decirle lo que sé,",
        "¿podría ayudarme a repartir estas cajas\nde bombones, por favor?",
        "Pigmalión: Trato hecho, volveré tras\nrepartirlas.",
        "Abuela: Muchas gracias. Es usted muy amable.",
      ];

    if (!this.objetos[objs.OBJECTS.repartoBombones])
      this.cliente = [
        "Transeúnte: Espero que me traigan mis bombones pronto.",
        "¡Me muero de hambre!",
      ];
    else
      this.cliente = [
        "Pigmalión: Usted ha pedido estos bombones,\n¿verdad?",
        "Transeúnte: ¡Al fin! Muchas gracias, caballero.",
        "Aquí tiene el dinero.",
      ];

    if (!this.objetos[objs.OBJECTS.repartoBombones])
      this.cliente2 = ["Señor: Me pregunto cuándo llegará mi pedido."];
    else
      this.cliente2 = [
        "Señor: ¡Oh! ¿Es usted el repartidor?",
        "Pigmalión: Así es, aquí tiene.",
        "Señor: Muchas gracias, aquí tiene el dinero.",
      ];

    if (!this.objetos[objs.OBJECTS.abanicoRoto])
      this.encargadoAnticuario = [
        "Señor: Buenas tardes, ¿en qué puedo ayudarle?",
        "Pigmalión: Quería comprar un collar.",
        "Señor: Muy bien, pero desgraciadamente solo me queda uno.",
        "¿Le interesa? Por 20 euros es suyo.",
        "Pigmalión: Perfecto, pues me lo llevo.",
        "Señor: Muchas gracias, que pase un buen día.",
      ];
    else
      this.encargadoAnticuario = [
        "Señor: Buenas tardes, ¿en qué puedo ayudarle?",
        "Pigmalión: Quería comprar un abanico.",
        "Señor: Muy bien.¿Qué le parece este de aquí?",
        "Por 5 euros es suyo.",
        "Pigmalión: Perfecto, pues me lo llevo.",
        "Señor: Muchas gracias, que pase un buen día.",
      ];

    if (!this.objetos[objs.OBJECTS.floresHijo])
      this.hijoFlorista = [
        "Chaval: ¡Qué nervios!",
        "Ojalá no se me hubiesen olvidado las flores,",
        "ya no me da tiempo a ir a por ellas.",
      ];
    else
      this.hijoFlorista = [
        "Pigmalión: Eres el hijo del florista, ¿verdad?",
        "Me dijo que esto era tuyo.",
        "Chaval: ¡Mis flores! ¡Qué bien, tengo una cita y no tenía tiempo de volver.",
        "Muchísimas gracias.",
        "Pigmalión: De nada. Oye, ¿has visto a una chica\nrubia con un vestido azul por aquí?",
        "Chaval: Sí, claro que la conozco.",
        "Gracias a ella me atreví a declararme a la chica\nque me gusta.",
        "Además le gustan mucho las flores, como a mí.",
        "Le quería dar un ramo de rosas de color rosa por ayudarme,",
        "ya que son sus favoritas, pero no la he vuelto a ver.",
        "Pigmalión: Pues veré que puedo hacer. Que vaya bien.",
        "Chaval: ¡Gracias!",
      ];
    if (this.objetos[objs.OBJECTS.hijoAyudado])
      this.florista = [
        "Pigmalión: Le he llevado las flores a tu hijo.",
        "Florista: ¿De verdad? Te lo agradezco de todo corazón.",
        "¿Hay algo que pueda hacer para compensarte toda la ayuda?",
        "Pigmalión: Pues la verdad es que sí. ¿Tienes rosas de color rosa?",
        "Florista: Sí, son de las que mejor venden.",
        "¿Quieres un ramo?",
        "Pigmalión: Sí, por favor.",
        "Florista: Pues todo tuyo.",
      ];
    else if (this.objetos[objs.OBJECTS.llaveFlorista])
      this.florista = [
        "Florista: ¿Esas son mis llaves? ¡Sí lo son!",
        "Pigmalión: Aquí las tiene.",
        "Florista: Muchísimas gracias caballero.",
        "No tengo mucho que ofrecerle,",
        "pero estas flores son para usted.",
        "Eran para una cita de mi hijo, pero se le olvidaron\ny ya no hay nada que hacer.",
      ];
    else
      this.florista = [
        "Florista: ¿Dónde diablos estarán?",
        "El jefe me va a matar como no las encuentre.",
        "Pigmalión: ¿Le ocurre algo?",
        "Florista: ¡Oh! Buenas tardes, caballero.",
        "El problema es que he perdido las llaves de la trastienda",
        "y como no las encuentre para cuando venga el jefe, me despedirá.",
        "Pigmalión: Vaya, pues si las encuentro se lo diré.",
        "Florista: Muchas gracias, buen hombre.",
      ];

    this.jarron = ["Has encontrado una llave."];

    if (!this.objetos[objs.OBJECTS.llaveComoda])
      this.comoda = [
        "Es una cómoda con un espejo.",
        "Hay un cajón pero está cerrado con llave.",
      ];
    else
      this.comoda = [
        "Abres el cajón con la llave de la fuente.",
        "Hay un abanico roto.",
        "Pigmalión: A Pomponina le encantaba su abanico.",
        "Seguro que se alegra si le consigo otro.",
      ];
    this.fuente = ["Has encontrado una llave en la fuente"];
    //#endregion

    //-----FINALES------
    //#region
    this.finalNeutral = [
      "URDEMALAS: Tanto tiempo trabajando para ti...",
      "URDEMALAS: Y no has sido capaz de entender lo\nque necesitábamos.",
      "PIGMALIÓN: He hecho lo que tenía que hacer.",
      "PIGMALIÓN: No me habéis dejado opción alguna.",
      "PIGMALIÓN: Fuistéis creados por y para mí.",
      "PIGMALIÓN: Y ya es hora de volver al trabajo.",
      "URDEMALAS: No te confundas.",
      "URDEMALAS: Vas a tener que empezar a trabajar\nsin tus muñecos.",
      "PIGMALIÓN: ¿Qué estás insinuando?",
      "URDEMALAS: Te quedas tú solo.",
      "PIGMALIÓN: No podéis hacer eso.",
      "URDEMALAS: Podemos y lo haremos.",
      "URDEMALAS: Mas no te preocupes...",
      "URDEMALAS: Volveremos a por ti...",
      "URDEMALAS: Lo que has hecho tendrá\nconsecuencias.",
    ];
    this.finalPacifista = [
      "URDEMALAS: Atónito me encuentro, de que alguien como tú,\ndespués de todo este tiempo y todo lo\nque nos has hecho, nos hayas por fin entendido.",
      "PIGMALIÓN : ¡Urdemalas! ¡Por ti estaba preguntándome!.\nMe alegro de que estés bien",
      "URDEMALAS: Lo cierto es que estaba decidido a irme.",
      "URDEMALAS: Pero después de ver cómo tratabas a mis compañeros,",
      "creo que te daré una segunda oportunidad.",
      "URDEMALAS: Pero no la vuelvas a cagar, ¿entendido?",
    ];
    this.finalGenocida = [
      "URDEMALAS: Después de todo lo que hemos\nhecho por ti...",
      "de lo que hemos tragado... ",
      "encima nos cazas como si de ganado\nnos tratasemos...",
      "¿Es que no significamos nada para ti?",
      "Me las vas a pagar.",
    ];
    //#endregion
    this.iterator = 0;
    this.e = this.input.keyboard.addKey("E");
    this.text = this.add.text(150, 500, this.bebe[this.iterator]); //Y ÉSTO QUÉ COÑO ES
    this.text.setFontSize(40);
  }

  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.e)) {
      this.iterator++;
    }
    switch (this.npc) {
      //-----CUCU-----
      //#region
      //Diálogo inicial
      case npcs.NPCS.cucu:
        if (this.iterator != this.cucu.length)
          this.text.setText(this.cucu[this.iterator]);
        else {
          if (this.runInfo._monecos[0] === 0) {
            this.scene.start(cst.SCENES.SALA18CUCU, {
              posx: 200,
              posy: this.sys.game.canvas.height / 2 + this.player.height / 2,
              lives: this.player.lives,
              objs: this.objetos,
              runInf: this.runInfo,
            });
            this.scene.pause();
            this.scene.sendToBack();
          }
        }
        break;
        //Diálogos combate
      case npcs.NPCS.chisteCombate:
        if (this.iterator != this.chisteCombate.length)
          this.text.setText(this.chisteCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.animarleCombate:
        if (this.iterator != this.animarleCombate.length)
          this.text.setText(this.animarleCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.datoCombate:
        if (this.iterator != this.datoCombate.length)
          this.text.setText(this.datoCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.reirseCombate:
        if (this.iterator != this.reirseCombate.length)
          this.text.setText(this.reirseCombate[this.iterator]);
        else this.end();
        break;
        //Diálogos final
      case npcs.NPCS.salvar_cucu:
        if (this.iterator != this.salvarCucu.length)
          this.text.setText(this.salvarCucu[this.iterator]);
        else {
          this.scene.start(cst.SCENES.SALA0, {
            posx: this.player.x,
            posy: this.player.y,
            lives: this.player.lives,
            objs: this.objetos,
            runInf: this.runInfo,
          });
          this.scene.pause();
          this.scene.sendToBack();
        }
        break;
      case npcs.NPCS.matar_cucu:
        if (this.iterator != this.matarCucu.length)
          this.text.setText(this.matarCucu[this.iterator]);
        else {
          this.scene.start(cst.SCENES.SALA0, {
            posx: this.player.x,
            posy: this.player.y,
            lives: this.player.lives,
            objs: this.objetos,
            runInf: this.runInfo,
          });
          this.scene.pause();
          this.scene.sendToBack();
        }
        break;
        //Puzzles
      case npcs.NPCS.bebe:
        if (this.iterator != this.bebe.length)
          this.text.setText(this.bebe[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.tienda_disfraces:
        if (this.iterator != this.tiendaDisfraces.length)
          this.text.setText(this.tiendaDisfraces[this.iterator]);
        else this.end();
      case npcs.NPCS.chulapos:
        if (this.iterator != this.chulapos.length)
          this.text.setText(this.chulapos[this.iterator]);
        else this.end();
        //#endregion

        //-----DON LINDO-----
        //#region 
        //Diálogo inicial
      case npcs.NPCS.don_lindo:
        if (this.iterator != this.donlindo.length)
          this.text.setText(this.donlindo[this.iterator]);
        else {
          if (this.runInfo._monecos[1] === 0) {
            this.scene.start(cst.SCENES.SALA28DONLINDO, {
              posx: 200,
              posy: this.sys.game.canvas.height / 2 + this.player.height / 2,
              lives: this.player.lives,
              objs: this.objetos,
              runInf: this.runInfo,
            });
            this.scene.pause();
            this.scene.sendToBack();
          }
        }
        break;
        //Diálogo de combate
        case npcs.NPCS.musica:
          if (this.iterator != this.musica.length)
            this.text.setText(this.musica[this.iterator]);
          else this.end();
          break;
        case npcs.NPCS.gritar:
          if (this.iterator != this.gritar.length)
            this.text.setText(this.gritar[this.iterator]);
          else this.end();
          break;
        case npcs.NPCS.foto_pomponina:
          if (this.iterator != this.foto_pomponina.length)
            this.text.setText(this.foto_pomponina[this.iterator]);
          else this.end();
          break;
        case npcs.NPCS.donlindo_persuadir:
          if (this.iterator != this.donlindo_persuadir.length)
            this.text.setText(this.donlindo_persuadir[this.iterator]);
          else this.end();
          break;
        case npcs.NPCS.gorro:
          if (this.iterator != this.gorro.length)
            this.text.setText(this.gorro[this.iterator]);
          else this.end();
          break;
        case npcs.NPCS.ukelele:
            if (this.iterator != this.ukelele.length)
              this.text.setText(this.ukelele[this.iterator]);
            else this.end();
            break;
        case npcs.NPCS.cartera:
          if (this.iterator != this.cartera.length)
            this.text.setText(this.cartera[this.iterator]);
          else this.end();
          break;
        //Diálogos final
      case npcs.NPCS.salvar_don_lindo:
        if (this.iterator != this.salvarDonLindo.length)
          this.text.setText(this.salvarDonLindo[this.iterator]);
        else {
          this.scene.start(cst.SCENES.SALA0, {
            posx: this.player.x,
            posy: this.player.y,
            lives: this.player.lives,
            objs: this.objetos,
            runInf: this.runInf,
          });
          this.scene.pause();
          this.scene.sendToBack();
        }
        break;
      case npcs.NPCS.matar_don_lindo:
        if (this.iterator != this.matarDonLindo.length)
          this.text.setText(this.matarDonLindo[this.iterator]);
        else {
          this.scene.start(cst.SCENES.SALA0, {
            posx: this.player.x,
            posy: this.player.y,
            lives: this.player.lives,
            objs: this.objetos,
            runInf: this.runInfo,
          });
          this.scene.pause();
          this.scene.sendToBack();
        }
        break;
        //Puzzles
        case npcs.NPCS.tabernero:
          if (this.iterator != this.tabernero.length)
            this.text.setText(this.tabernero[this.iterator]);
          else this.end();
          break;
      case npcs.NPCS.bullying:
        if (this.iterator != this.bullying.length)
          this.text.setText(this.bullying[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.dependiente_ropa:
        if (this.iterator != this.dependienteRopa.length)
          this.text.setText(this.dependienteRopa[this.iterator]);
        else this.end();
        break;
        case npcs.NPCS.dependienta_musica:
          if (this.iterator != this.dependienta_musica.length)
            this.text.setText(this.dependienta_musica[this.iterator]);
          else this.end();
          break;
        case npcs.NPCS.frio1:
        if (this.iterator != this.frio1.length)
          this.text.setText(this.frio1[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.frio2:
        if (this.iterator != this.frio2.length)
          this.text.setText(this.frio2[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.foto:
        if (this.iterator != this.foto.length)
        this.text.setText(this.foto[this.iterator]);
      else this.end();
      break;
        //#endregion

        //-----POMPONINA-----
        //#region 
        //Diálogo inicial
      case npcs.NPCS.pomponina:
        if (this.iterator != this.pomponina.length)
          this.text.setText(this.pomponina[this.iterator]);
        else {
          if (this.runInfo._monecos[2] === 0) {
            this.scene.start(cst.SCENES.SALA38POMPONINA, {
              posx: 200,
              posy: this.sys.game.canvas.height / 2 + this.player.height / 2,
              lives: this.player.lives,
              objs: this.objetos,
              runInf: this.runInfo,
            });
            this.scene.pause();
            this.scene.sendToBack();
          }
        }
        break;
        //Diálogos combate
      case npcs.NPCS.collarCombate:
        if (this.iterator != this.collarCombate.length)
          this.text.setText(this.collarCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.bombonesCombate:
        if (this.iterator != this.bombonesCombate.length)
          this.text.setText(this.bombonesCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.abanicoCombate:
        if (this.iterator != this.abanicoCombate.length)
          this.text.setText(this.abanicoCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.halagarCombate:
        if (this.iterator != this.halagarCombate.length)
          this.text.setText(this.halagarCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.ordenarCombate:
        if (this.iterator != this.ordenarCombate.length)
          this.text.setText(this.ordenarCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.amenazarCombate:
        if (this.iterator != this.amenazarCombate.length)
          this.text.setText(this.amenazarCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.floresRosasCombate:
        if (this.iterator != this.floresRosasCombate.length)
          this.text.setText(this.floresRosasCombate[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.rosasCombate:
        if (this.iterator != this.rosasCombate.length)
          this.text.setText(this.rosasCombate[this.iterator]);
        else this.end();
        break;
        //Diálogos final de combate
      case npcs.NPCS.salvar_pomponina:
        if (this.iterator != this.salvarPomponina.length)
          this.text.setText(this.salvarPomponina[this.iterator]);
        else {
          this.scene.start(cst.SCENES.SALA0, {
            posx: this.player.x,
            posy: this.player.y,
            lives: this.player.lives,
            objs: this.objetos,
            runInf: this.runInfo,
          });
          this.scene.pause();
          this.scene.sendToBack();
        }
        break;
      case npcs.NPCS.matar_pomponina:
        if (this.iterator != this.matarPomponina.length)
          this.text.setText(this.matarPomponina[this.iterator]);
        else {
          this.scene.start(cst.SCENES.SALA0, {
            posx: this.player.x,
            posy: this.player.y,
            lives: this.player.lives,
            objs: this.objetos,
            runInf: this.runInfo,
          });
          this.scene.pause();
          this.scene.sendToBack();
        }
        break;
        //Puzzles
      case npcs.NPCS.abuela:
        if (this.iterator != this.abuela.length)
          this.text.setText(this.abuela[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.cliente:
        if (this.iterator != this.cliente.length)
          this.text.setText(this.cliente[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.cliente2:
        if (this.iterator != this.cliente2.length)
          this.text.setText(this.cliente2[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.encargadoAnticuario:
        if (this.iterator != this.encargadoAnticuario.length)
          this.text.setText(this.encargadoAnticuario[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.hijoFlorista:
        if (this.iterator != this.hijoFlorista.length)
          this.text.setText(this.hijoFlorista[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.florista:
        if (this.iterator != this.florista.length)
          this.text.setText(this.florista[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.jarron:
        if (this.iterator != this.jarron.length)
          this.text.setText(this.jarron[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.fuente:
        if (this.iterator != this.fuente.length)
          this.text.setText(this.fuente[this.iterator]);
        else this.end();
        break;
      case npcs.NPCS.comoda:
        if (this.iterator != this.comoda.length)
          this.text.setText(this.comoda[this.iterator]);
        else this.end();
        break;
        
        //#endregion

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
            posx: this.sys.game.canvas.width / 2,
            posy: this.sys.game.canvas.height / 2,
            lives: 10,
            objs: this.objetos,
            runInfo: this.runInfo,
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
  end() {
    this.scene.pause();
    this.scene.resume(this.prevKey);
    this.scene.sendToBack();
  }
}