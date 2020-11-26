
      import Game from "./game.js";
      import cst from "./cst.js";
      var config = {        
        type: Phaser.AUTO,
        
        width: 1400,
        height: 800,
        pixelArt: true,
        input: {
          gamepad: true,
        },
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        scene: [Game,cst],
        physics: {
          default: "arcade",
          arcade: { debug: false },
        },
      };
      new Phaser.Game(config);
      