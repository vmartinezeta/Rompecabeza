/*Autor: Víctor Martínez*/

import Boot from "./Boot.js";
import Game from "./Game.js";
import MainMenu from "./MainMenu.js";
import Preloader from "./Preloader.js";
import ConfigRompecabeza from "./configRompecabeza.js";

const config = new ConfigRompecabeza()
const mainMenu = new MainMenu(config)
const game = new Game(config)


const phaser = new Phaser.Game(config.ANCHO, config.ALTURA, Phaser.CANVAS, 'game')
phaser.state.add('Boot', Boot)
phaser.state.add('Preloader', Preloader)
phaser.state.add('MainMenu', mainMenu)
phaser.state.add('Game', game)
phaser.state.start('Boot')