import { cst } from "../scenes/cst.js";
import RunInfo from "../runInfo.js";

class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "Bootloader" });
  }

  preload() {
    this.load.on("complete", () => {
      this.scene.start(cst.SCENES.SALA0, {posx: 700, posy :400, lives:10,objs:[false,false,false,false],runInf:new RunInfo()});
    });


    //------SPRITES GENERALES------
    this.load.spritesheet("pigmalion", "./resources/sprites/prota/pigmalion.png", {
      frameWidth: 192,
      frameHeight: 192,
    });
    this.load.image("cortinas", "./resources/sprites/teatro_general/cortinas.png");
    this.load.image("telon", "./resources/sprites/teatro_general/telon.png");
    this.load.image("telonGrande", "./resources/sprites/teatro_general/telon_grande.png");
    this.load.image("tablones", "./resources/sprites/teatro_general/tablones.png");   
    this.load.image("caja", "./resources/sprites/teatro_general/caja.png");
    this.load.image("cajaCerrada","./resources/sprites/teatro_general/caja_cerrada.png");
    this.load.image("tecla_e", "./resources/sprites/interaccion/tecla_e.png");


    //-----SPRITES CUCU-----
    //caminos
    this.load.image("cucucamino1" , "./resources/sprites/caminos/cucu/camino_piedra_1.png" );
    this.load.image("cucucamino2" , "./resources/sprites/caminos/cucu/camino_piedra_2.png" );
    this.load.image("cucucamino3" , "./resources/sprites/caminos/cucu/camino_piedra_3.png" );
    this.load.image("cucucamino4" , "./resources/sprites/caminos/cucu/camino_piedra_4.png" );
    this.load.image("cucucamino5" , "./resources/sprites/caminos/cucu/camino_piedra_5.png" );
    //decorado  
    this.load.image("mujer", "./resources/sprites/cucu/mujer.png");
    this.load.image("carreta", "./resources/sprites/cucu/carreta.png");
    this.load.image("tiendarastroiz", "./resources/sprites/cucu/tienda_rastro_iz.png");
    this.load.image("tiendarastrodr", "./resources/sprites/cucu/tienda_rastro_dr.png");
    this.load.image("tiendadisfraces", "./resources/sprites/cucu/tienda_disfraces.png");
    this.load.image("bebe", "./resources/sprites/cucu/bebe.png");    
    this.load.image("mesa", "./resources/sprites/cucu/mesas1.png");    
    this.load.image("caballo", "./resources/sprites/cucu/caballo.png");
    this.load.spritesheet("chulapos", "./resources/sprites/cucu/chulaposanim_sheet.png",{
      frameWidth: 288,
      frameHeight: 288
    });
    //muñeco
    this.load.spritesheet("cucu_idl", "./resources/sprites/cucu/cucu_idle_anim.png",{
      frameWidth: 192,
      frameHeight:192
    });
    this.load.spritesheet("cucu", "./resources/sprites/cucu/cucu.png", {
      frameWidth: 192,
      frameHeight: 192,
    });
    this.load.spritesheet("cucu_at1", "./resources/sprites/cucu/cucuattacksprite.png", {
      frameWidth: 216,
      frameHeight: 108,
    });
    this.load.spritesheet("cucu_at2", "./resources/sprites/cucu/cucuattacksprite2.png",{
      frameWidth: 100,
      frameHeight:108
    });
    

    //-----SPRITES DON LINDO-----
    //caminos
    this.load.image("donlindocamino1" , "./resources/sprites/caminos/don_lindo/camino_baldosas_1.png" );
    this.load.image("donlindocamino2" , "./resources/sprites/caminos/don_lindo/camino_baldosas_2.png" );
    this.load.image("donlindocamino3" , "./resources/sprites/caminos/don_lindo/camino_baldosas_3.png" );
    this.load.image("donlindocamino4" , "./resources/sprites/caminos/don_lindo/camino_baldosas_4.png" );
    this.load.image("donlindocamino5" , "./resources/sprites/caminos/don_lindo/camino_baldosas_5.png" );
    //decorado
    this.load.image("casa","./resources/sprites/don_lindo/casa.png");
    this.load.image("taberna","./resources/sprites/don_lindo/taberna.png");
    this.load.image("fotopomponina","./resources/sprites/don_lindo/foto_pomponina.png");
    this.load.image("tiendaderopa","./resources/sprites/don_lindo/tienda_de_ropa.png");
    this.load.image("tiendademusica","./resources/sprites/don_lindo/tienda_musica.png");



    this.load.spritesheet("dependientamusica", "./resources/sprites/don_lindo/dependienta_musica.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("bullying", "./resources/sprites/don_lindo/bullying.png",{
      frameWidth: 288,
      frameHeight: 288
    });
    this.load.spritesheet("frio1", "./resources/sprites/don_lindo/npcFrio1.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("frio2", "./resources/sprites/don_lindo/npcFrio2.png",{
      frameWidth: 192,
      frameHeight: 192
    });


    this.load.spritesheet("donlindoidle", "./resources/sprites/don_lindo/donlindoidle.png",{
      frameWidth: 192,
      frameHeight: 192
    });   


    //-----SPRITES POMPONINA-----
    //caminos
    this.load.image("pomponinacamino1" , "./resources/sprites/caminos/pomponina/camino_marmol_1.png" );
    this.load.image("pomponinacamino2" , "./resources/sprites/caminos/pomponina/camino_marmol_2.png" );
    this.load.image("pomponinacamino3" , "./resources/sprites/caminos/pomponina/camino_marmol_3.png" );
    this.load.image("pomponinacamino4" , "./resources/sprites/caminos/pomponina/camino_marmol_4.png" );
    this.load.image("pomponinacamino5" , "./resources/sprites/caminos/pomponina/camino_marmol_5.png" );
    this.load.image("pomponinacamino6" , "./resources/sprites/caminos/pomponina/camino_marmol_6.png" );
    //decorado
    this.load.image("tiendabombones","./resources/sprites/pomponina/tienda_bombones.png");
    this.load.image("anticuario","./resources/sprites/pomponina/anticuario.png");
    this.load.image("comoda","./resources/sprites/pomponina/comoda_espejo.png");
    this.load.image("floristeria", "./resources/sprites/pomponina/floristeria.png")
    this.load.spritesheet("abuela", "./resources/sprites/pomponina/abuela.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("fuente", "./resources/sprites/pomponina/fuente.png",{
      frameWidth: 320,
      frameHeight: 360
    });    
    this.load.spritesheet("cliente_bombones1", "./resources/sprites/pomponina/cliente_bombones_1.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("cliente_bombones2", "./resources/sprites/pomponina/cliente_bombones_2.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("florista", "./resources/sprites/pomponina/florista.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("hijo_florista", "./resources/sprites/pomponina/hijo_florista.png",{
      frameWidth: 192,
      frameHeight: 192
    });   
    this.load.spritesheet("encargado_anticuario", "./resources/sprites/pomponina/encargado_anticuario.png",{
      frameWidth: 192,
      frameHeight: 192
    });   
    this.load.spritesheet("jarron", "./resources/sprites/pomponina/jarron_con_llave.png",{
      frameWidth: 128,
      frameHeight: 128
    });  
    //muñeco
    this.load.spritesheet("pomponina_idl", "./resources/sprites/pomponina/pomponina_idle.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("pomponina", "./resources/sprites/pomponina/pomponina_enfadada.png",{
      frameWidth: 192,
      frameHeight: 192
    });
    this.load.spritesheet("pomponina_at", "./resources/sprites/pomponina/pomponina_attack.png",{
      frameWidth: 125,
      frameHeight: 88
    });
    
   
    //-----SPRITES MENU COMBATE-----
    this.load.image("mc","./resources/sprites/menu_ataque/menu_comb.png");
    this.load.image("attack_button", "./resources/sprites/menu_ataque/boton_atacar.png");
    this.load.image("talk_button","./resources/sprites/menu_ataque/boton_hablar.png");
    this.load.image("mercy_button","./resources/sprites/menu_ataque/boton_piedad.png");
    this.load.image("back_button", "./resources/sprites/menu_ataque/boton_retroceder.png");
    this.load.image("abanico_button", "./resources/sprites/menu_ataque/boton_abanico.png");
    this.load.image("amenazar_button", "./resources/sprites/menu_ataque/boton_amenazar.png");
    this.load.image("animarle_button", "./resources/sprites/menu_ataque/boton_animarle.png");
    this.load.image("bombones_button", "./resources/sprites/menu_ataque/boton_bombones.png");
    this.load.image("burlarse_button", "./resources/sprites/menu_ataque/boton_burlarse.png");
    this.load.image("chiste_button", "./resources/sprites/menu_ataque/boton_chiste.png");
    this.load.image("collar_button", "./resources/sprites/menu_ataque/boton_collar.png");
    this.load.image("dato_button", "./resources/sprites/menu_ataque/boton_dato.png");
    this.load.image("flores_rosas_button", "./resources/sprites/menu_ataque/boton_flores_rosas.png");
    this.load.image("halagar_button", "./resources/sprites/menu_ataque/boton_halagar.png");
    this.load.image("ordenar_button", "./resources/sprites/menu_ataque/boton_ordenar.png");
    this.load.image("rosas_button", "./resources/sprites/menu_ataque/boton_rosas.png");
    this.load.image("bar","./resources/sprites/menu_ataque/barra_final.png");
    this.load.image("move_bar","./resources/sprites/menu_ataque/barra_movil.png");


    //-------AUDIO------------
    this.load.audio("chotis","./././resources/audio/chotis.mp3");


  }

  create(){
    //-----ANIMACIONES-----
    //cucu
    this.anims.create({
      key: "chulapos",
      frames: this.anims.generateFrameNumbers("chulapos", {
        start: 0,
        end: 20,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key: "cucu_idl",
      frames: this.anims.generateFrameNumbers("cucu_idl", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key: "cucu",
      frames: this.anims.generateFrameNumbers("cucu", {
        start: 0,
        end: 20,
      }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: "cucu_at1",
      frames: this.anims.generateFrameNumbers("cucu_at1", {
        start: 0,
        end: 14,
      }),
      frameRate: 15,
      repeat: -1,
    }); 
    this.anims.create({
      key: "cucu_at2",
      frames: this.anims.generateFrameNumbers("cucu_at2", {
        start: 0,
        end: 14,
      }),
      frameRate: 15,
      repeat: -1,
    });
    
    //donLindo
    this.anims.create({
      key: "frio1",
      frames: this.anims.generateFrameNumbers("frio1", {
        start: 0,
        end: 15,
      }),
      frameRate: 4,
      repeat: -1,
    })
    this.anims.create({
      key: "dependientamusica",
      frames: this.anims.generateFrameNumbers("dependientamusica", {
        start: 0,
        end: 15,
      }),
      frameRate: 4,
      repeat: -1,
    })

    this.anims.create({
      key: "frio2",
      frames: this.anims.generateFrameNumbers("frio2", {
        start: 0,
        end: 15,
      }),
      frameRate: 4,
      repeat: -1,
    })
    this.anims.create({
      key: "bullying",
      frames: this.anims.generateFrameNumbers("bullying", {
        start: 0,
        end: 20,
      }),
      frameRate: 8,
      repeat: -1,
    })
    this.anims.create({
      key:"donlindoidle",
      frames: this.anims.generateFrameNumbers("donlindoidle",{
        start:0,
        end: 9,
      }),
      frameRate: 10,
      repeat:-1,
    });

    //pomponina
    this.anims.create({
      key:"abuela",
      frames: this.anims.generateFrameNumbers("abuela",{
        start:0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1
    }) 
    this.anims.create({
      key: "fuente",
      frames: this.anims.generateFrameNumbers("fuente", {
        start: 0,
        end: 5,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "florista",
      frames: this.anims.generateFrameNumbers("florista",{
        start:0,
        end:6
      }),
      frameRate: 4,
      repeat: -1
    })
    this.anims.create({
      key: "hijo_florista",
      frames: this.anims.generateFrameNumbers("hijo_florista", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key:"cliente_bombones1",
      frames: this.anims.generateFrameNumbers("cliente_bombones1",{
        start: 0,
        end: 6
      }),
      frameRate: 5,
      repeat:-1,
    })
    this.anims.create({
      key:"cliente_bombones2",
      frames: this.anims.generateFrameNumbers("cliente_bombones2",{
        start:0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1
    })      
    this.anims.create({
      key: "jarron",
      frames: this.anims.generateFrameNumbers("jarron",{
        start:0,
        end:5
      }),
      frameRate: 6,
      repeat: -1
    })
    this.anims.create({
      key: "encargado_anticuario",
      frames: this.anims.generateFrameNumbers("encargado_anticuario", {
        start: 0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key: "pomponina_idl",
      frames: this.anims.generateFrameNumbers("pomponina_idl",{
        start:0,
        end:12
      }),
      frameRate: 4,
      repeat: -1
    });
    this.anims.create({
      key: "pomponina",
      frames: this.anims.generateFrameNumbers("pomponina", {
        start: 0,
        end: 9,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key:"pomponina_at",
      frames: this.anims.generateFrameNumbers("pomponina_at",{
        start:0,
        end: 9,
      }),
      frameRate: 12,
      repeat:-1,
    });
    
      
  }
 
}
export default Bootloader;