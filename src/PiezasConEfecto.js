/*Autor: Víctor Martínez*/

export default function PiezasConEfecto(game, cuadricula, tablero, escala) {
    Phaser.Group.call(this, game)
    this.inputEnableChildren = false
    this.cuadricula = cuadricula
    this.escala = escala || 1
    this.tablero = tablero
    this.game = game
    this.conEfecto = true
    this.cropRect = []
    this.dibujarTodas()
}

PiezasConEfecto.prototype = Object.create(Phaser.Group.prototype)
PiezasConEfecto.prototype.constructor = PiezasConEfecto

PiezasConEfecto.prototype.dibujarTodas = function () {
    this.cuadricula.toCeldas().forEach(celda => this.dibujarPieza(celda))
}

PiezasConEfecto.prototype.dibujarPieza = function (celda) {
    const pieza = celda.getPieza()
    const ubicacion = celda.getUbicacion()
    const { x, y } = ubicacion.getPuntoConcreto()
    const piezaEnJuego = this.create(x, y, pieza.getNombre())

    const copia = new Phaser.Rectangle()
    copia.copyFrom(piezaEnJuego)
    piezaEnJuego.width = piezaEnJuego.height = 0
    const tween = this.game.add.tween(piezaEnJuego).to({ width:copia.width, height:copia.height }, 1000, Phaser.Easing.Bounce.Out, false, 0, 1000, true)
    tween.start()

    piezaEnJuego.inputEnabled = false
    piezaEnJuego.anchor.set(0)
    piezaEnJuego.scale.set(this.escala)
}