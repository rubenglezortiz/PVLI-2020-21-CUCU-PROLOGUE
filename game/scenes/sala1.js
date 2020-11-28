import { cst } from "../cst.js";

export class sala1 extends Phaser.Scene{
    constructor(){
        super({
            key : cst.SCENES.SALA1
        })
    }
    // init(posx, posy){
        
    // }
    init(){}

    preload(){
        this.load.image('fondoRojo', './resources/sprites/background.png');
    }
    create(){
        this.add.image(700,400,'fondoRojo');
    }
}