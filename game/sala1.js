import { cst } from "./cst";

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key : cst.SCENES.SALA1
        })
    }
    init(){
        
    }
    preload(){
        this.load.image('fondoRojo', './resources/sprites/background.png');
    }
    create(){
        this.add.image(700,400,'fondoRojo');
    }
}