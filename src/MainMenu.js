
/*Autor: Víctor Martínez*/
export default function MainMenu(config) {
    this.config = config
}

MainMenu.prototype.create = function () {
    this.add.sprite(0, 0, 'fondo')
    const espacio1 = this.game.add.graphics(5, 400)
    espacio1.clear()
    espacio1.beginFill(0xffffff)
    espacio1.lineStyle(4, 0x000000, 1)
    espacio1.moveTo(0, 0)
    espacio1.lineTo(256, 0)
    espacio1.lineTo(256, 75)
    espacio1.lineTo(296, 75)
    espacio1.lineTo(296, 115)
    espacio1.lineTo(256, 115)
    espacio1.lineTo(256, 190)
    espacio1.lineTo(148, 190)
    espacio1.lineTo(148, 230)
    espacio1.lineTo(108, 230)
    espacio1.lineTo(108, 190)
    espacio1.lineTo(0, 190)
    espacio1.lineTo(0, 0)
    espacio1.endFill()


    const espacio2 = this.game.add.graphics(265, 400)
    espacio2.clear()
    espacio2.beginFill(0xffffff)
    espacio2.lineStyle(4, 0x000000, 1)
    espacio2.moveTo(0, 0)
    espacio2.lineTo(256, 0)
    espacio2.lineTo(256, 75)
    espacio2.lineTo(216, 75)
    espacio2.lineTo(216, 115)
    espacio2.lineTo(256, 115)
    espacio2.lineTo(256, 190)
    espacio2.lineTo(148, 190)
    espacio2.lineTo(148, 150)
    espacio2.lineTo(108, 150)
    espacio2.lineTo(108, 190)
    espacio2.lineTo(0, 190)
    espacio2.lineTo(0, 115)
    espacio2.lineTo(40, 115)
    espacio2.lineTo(40, 75)
    espacio2.lineTo(0, 75)
    espacio2.lineTo(0, 0)
    espacio2.endFill()


    const espacio3 = this.game.add.graphics(481, 400)
    espacio3.clear()
    espacio3.beginFill(0xffffff)
    espacio3.lineStyle(4, 0x000000, 1)
    espacio3.moveTo(0, 75)
    espacio3.lineTo(40, 75)
    espacio3.lineTo(40, 0)
    espacio3.lineTo(296, 0)
    espacio3.lineTo(296, 75)
    espacio3.lineTo(336, 75)
    espacio3.lineTo(336, 115)
    espacio3.lineTo(296, 115)
    espacio3.lineTo(296, 190)
    espacio3.lineTo(189, 190)
    espacio3.lineTo(189, 230)
    espacio3.lineTo(148, 230)
    espacio3.lineTo(148, 190)
    espacio3.lineTo(40, 190)
    espacio3.lineTo(40, 115)
    espacio3.lineTo(0, 115)
    espacio3.lineTo(0, 75)
    espacio3.endFill()

    const espacio4 = this.game.add.graphics(775, 400)
    espacio4.clear()
    espacio4.beginFill(0xffffff)
    espacio4.lineStyle(4, 0x000000, 1)
    espacio4.moveTo(0, 0)
    espacio4.lineTo(256, 0)
    espacio4.lineTo(256, 190)
    espacio4.lineTo(148, 190)
    espacio4.lineTo(148, 150)
    espacio4.lineTo(108, 150)
    espacio4.lineTo(108, 150)
    espacio4.lineTo(108, 190)
    espacio4.lineTo(0, 190)
    espacio4.lineTo(0, 115)
    espacio4.lineTo(40, 115)
    espacio4.lineTo(40, 75)
    espacio4.lineTo(0, 75)
    espacio4.lineTo(0, 0)
    espacio4.endFill()

    const pieza1 = this.game.add.sprite(5, 400, 'pieza-0-0')
    const pieza2 = this.game.add.sprite(265, 400, 'pieza-0-1')
    const pieza3 = this.game.add.sprite(481, 400, 'pieza-0-2')
    const pieza4 = this.game.add.sprite(777, 400, 'pieza-0-3')

    const mask1 = this.game.add.graphics(5, 400);
    mask1.lineStyle(2, 0x000000)
    mask1.clear()
    mask1.moveTo(0, 0)
    mask1.lineTo(296, 0)
    mask1.lineTo(296, 230)
    mask1.lineTo(0, 230)
    mask1.lineTo(0, 0)
    mask1.endFill()

    const mask2 = this.game.add.graphics(263, 400);
    mask2.lineStyle(2, 0x000000)
    mask2.clear()
    mask2.moveTo(0, 0)
    mask2.lineTo(256, 0)
    mask2.lineTo(256, 190)
    mask2.lineTo(0, 190)
    mask2.lineTo(0, 0)
    mask2.endFill()


    const mask3 = this.game.add.graphics(479, 400);
    mask3.lineStyle(2, 0x000000)
    mask3.clear()
    mask3.moveTo(0, 0)
    mask3.lineTo(336, 0)
    mask3.lineTo(336, 230)
    mask3.lineTo(0, 230)
    mask3.lineTo(0, 0)
    mask3.endFill()



    const mask4 = this.game.add.graphics(775, 400)
    mask4.clear()
    mask4.moveTo(0, 0)
    mask4.lineTo(256, 0)
    mask4.lineTo(256, 190)
    mask4.lineTo(0, 190)
    mask4.lineTo(0, 0)
    mask4.endFill()

    pieza1.mask = mask1
    pieza2.mask = mask2
    pieza3.mask = mask3
    pieza4.mask = mask4

    const tween2 = this.game.add.tween(mask2).from({ y: 630 }, 2000, Phaser.Easing.Bounce.InOut, true, 0, 1000, true)
    tween2.start()

    const tween3 = this.game.add.tween(mask3).from({ y: 630 }, 2000, Phaser.Easing.Bounce.InOut, true, 0, 1000, true)
    tween3.start()

    this.botonPlay = this.add.button(this.config.ANCHO * .5, 220, 'button-play', this.iniciarJuego, this)
    this.botonPlay.anchor.set(0.5)
    this.botonPlay.input.useHandCursor = true


    if (!this.config.musicaFondo) {
        this.config.musicaFondo = this.add.audio('sonido-fondo')
        this.sound.setDecodedCallback(this.config.musicaFondo, this.iniciarMusica, this)
    }
}


MainMenu.prototype.iniciarMusica = function () {
    this.config.musicaFondo.loopFull(this.config.volumen/100)
}

MainMenu.prototype.iniciarJuego = function () {
    this.game.state.start('Game')
}