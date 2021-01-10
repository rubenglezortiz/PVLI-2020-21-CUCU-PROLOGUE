import { cst } from "../scenes/cst.js";


class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }

  preload() {
    this.load.on("complete", () => {
      this.scene.start(cst.SCENES.SALA38POMPONINA, {posx: 700, posy :400, lives:10,objs:[false,false,false,false]});
    });


    //------SPRITES GENERALES------
    this.load.spritesheet("pigmalion", "./././resources/sprites/prota/pigmalion.png", {
      frameWidth: 192,
      frameHeight: 192,
    });
    this.load.image("cortinas", "./././resources/sprites/teatroGeneral/cortinas.png");
    this.load.image("telon", "./././resources/sprites/teatroGeneral/telon.png");
    this.load.image("telonGrande", "./././resources/sprites/teatroGeneral/telonGrande.png");
    this.load.image("tablones", "./././resources/sprites/teatroGeneral/tablones.png");   
    this.load.image("teclaE", "./././resources/sprites/interaccion/teclaE.png");


    //-----SPRITES CUCU-----
    //caminos
    this.load.image("cucucamino1" , "./././resources/sprites/caminos/cucu/camino_piedra_1.png" );
    this.load.image("cucucamino2" , "./././resources/sprites/caminos/cucu/camino_piedra_2.png" );
    this.load.image("cucucamino3" , "./././resources/sprites/caminos/cucu/camino_piedra_3.png" );
    this.load.image("cucucamino4" , "./././resources/sprites/caminos/cucu/camino_piedra_4.png" );
    this.load.image("cucucamino5" , "./././resources/sprites/caminos/cucu/camino_piedra_5.png" );
    //decorado
    this.load.image("cajaCucu", "./././resources/sprites/cucu/caja.png");
    this.load.image("mujer", "./././resources/sprites/cucu/mujer.png");
    this.load.image("carreta", "./././resources/sprites/cucu/carreta.png");
    this.load.image("tiendarastroiz", "./././resources/sprites/cucu/tienda_rastro_iz.png");
    this.load.image("tiendarastrodr", "./././resources/sprites/cucu/tienda_rastro_dr.png");
    this.load.image("tiendadisfraces", "./././resources/sprites/cucu/tienda_disfraces.png");
    this.load.image("bebe", "./././resources/sprites/cucu/bebe.png");    
    this.load.image("mesa", "./././resources/sprites/cucu/mesas1.png");    
    this.load.image("caballo", "./././resources/sprites/cucu/caballo.png");
    this.load.spritesheet("chulapos", "./././resources/sprites/cucu/chulaposanim_sheet.png",{
      frameWidth: 288,
      frameHeight: 288
    });
    //muñeco
    this.load.spritesheet("cucu_idle", "./././resources/sprites/cucu/cucu_idle_anim.png",{
      frameWidth: 32,
      frameHeight:32
    });
    this.load.spritesheet("cucu", "./././resources/sprites/cucu/cucu.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("cucuat", "./././resources/sprites/cucu/cucuattacksprite.png", {
      frameWidth: 216,
      frameHeight: 108,
    });
    this.load.spritesheet("cucuat2", "./././resources/sprites/cucu/cucuattacksprite2.png",{
      frameWidth: 91,
      frameHeight:108
    });
    

    //-----SPRITES POMPONINA-----
    //caminos
    //decorado
    this.load.image("tiendabombones","./././resources/sprites/pomponina/tienda_bombones.png");
    this.load.image("anticuario","./././resources/sprites/pomponina/anticuario.png");
    this.load.image("comoda","./././resources/sprites/pomponina/comoda_espejo.png");
    this.load.spritesheet("abuela", "./././resources/sprites/pomponina/abuela.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("fuente", "./././resources/sprites/pomponina/fuente.png",{
      frameWidth: 64,
      frameHeight: 72
    });    
    this.load.spritesheet("clienteBombones1", "./././resources/sprites/pomponina/cliente_bombones_1.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("clienteBombones2", "./././resources/sprites/pomponina/cliente_bombones_2.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("florista", "./././resources/sprites/pomponina/florista.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("hijoFlorista", "./././resources/sprites/pomponina/hijo_florista.png",{
      frameWidth: 192,
      frameHeight: 192
    });   
    //muñeco
    this.load.spritesheet("pomponinaIdl", "./././resources/sprites/pomponina/pomponina_idle.png",{
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("pomponina", "./././resources/sprites/pomponina/pomponina_enfadada.png",{
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("pomponinaat", "./././resources/sprites/pomponina/pomponina_attack.png",{
      frameWidth: 125,
      frameHeight: 88
    });
    
   
    //-----SPRITES MENU COMBATE-----
    this.load.image("mc","./././resources/sprites/menuAtaque/MenuComb.png");
    this.load.image("attackButton", "./././resources/sprites/menuAtaque/boton_atacar.png");
    this.load.image("talkButton","./././resources/sprites/menuAtaque/boton_hablar.png");
    this.load.image("mercyButton","./././resources/sprites/menuAtaque/boton_piedad.png");
    this.load.image("backButton", "./././resources/sprites/menuAtaque/boton_retroceder.png");
    this.load.image("bar","./././resources/sprites/menuAtaque/barra_final.png");
    this.load.image("moveBar","./././resources/sprites/menuAtaque/barra_movil.png");







    //-------Audio------------
    this.load.audio("chotis","./././resources/audio/chotis.mp3");


  }
}
export default Bootloader;
