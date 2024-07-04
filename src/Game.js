/*Autor: Víctor Martínez*/
import Timeline from "./Timeline.js"
import Cuadricula from "./Cuadricula.js"
import Piezas from "./Piezas.js"
import Punto from "./Punto.js"
import Tablero from "./Tablero.js"
import Timer from "./Timer.js"
import PiezasConEfecto from "./PiezasConEfecto.js"


export default function Game(config) {
    this.original = new Cuadricula(3, 4)
    this.cuadricula = this.original.newInstance()
    this.piezas = null
    this.tablero = null
    this.botonVerImagen = null
    this.mensajeFinal = null
    this.config = config
    this.timeline = null
    this.timer = null
}

Game.prototype.create = function () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.botonVerImagen = this.add.button(this.config.ANCHO * 0.5 - 55, 50, 'boton-ver-original', this.verImagen, this)
    this.botonVerImagen.anchor.set(0.5)

    const botonAtras = this.add.button(this.config.ANCHO*.5 - 55+156, 50, 'boton-atras', this.cerrarJuego, this)
    botonAtras.anchor.set(.5)

    this.timer = new Timer(this, 15, this.config)

    this.cuadricula.mezclarPiezas(new Punto(384, 290), 160)

    
    this.tablero = new Tablero(this, new Punto(5, 100))


    this.piezas = new Piezas(this, this.cuadricula, this.tablero)
    this.habilitarPiezasDisponible()
    this.timeline = new Timeline(this, 1, 6)

}

Game.prototype.verImagen = function () {
    if (this.timeline.isAtEnd()) {
        this.timeline.reset()
    }

    if (this.timeline.isAtT1()) {
        this.piezas.destroy()
        this.piezas = new PiezasConEfecto(this.game, this.original, this.tablero, .99)
    }
}

Game.prototype.habilitarPiezasDisponible = function () {
    this.cuadricula.getPuntosDisponibles().forEach(punto => this.habilitarPieza(punto))
}

Game.prototype.habilitarPieza = function (punto) {
    const pieza = this.piezas.iterate('key', punto.toString(), Phaser.Group.RETURN_CHILD)
    pieza.inputEnabled = true
}

Game.prototype.update = function () {
    if (this.timeline.isOutT1()) {
        this.piezas.destroy()
        this.piezas = new Piezas(this.game, this.cuadricula, this.tablero)
        this.habilitarPiezasDisponible()
    }

    if (this.mensajeFinal === null && (!this.cuadricula.hayDisponible() || this.timer.finalizo())) {
        if (!this.cuadricula.hayDisponible()) {
            this.mensajeFinal = this.add.sprite(.5 * this.config.ANCHO, 0.5 * this.config.ALTURA, "mensaje-final")
            this.mensajeFinal.anchor.set(.5)
        }
        this.piezas.bloquear()
        this.botonVerImagen.inputEnabled = false
        const timer = this.game.time.create(false)
        timer.loop(4e3, this.cerrarJuego, this)
        timer.start()
    }
}

Game.prototype.cerrarJuego = function () {
    this.original = new Cuadricula(3, 4)
    this.cuadricula = this.original.newInstance()
    this.mensajeFinal = null
    this.botonVerImagen = null
    this.piezas = null
    this.tablero = null
    this.timeline = null
    this.timer = null
    this.game.time.events.destroy()
    this.game.state.start("MainMenu")
}