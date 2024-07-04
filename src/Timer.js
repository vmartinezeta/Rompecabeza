/*Autor: Víctor Martínez*/
import BarraProgreso from "./BarraProgreso.js"
import Punto from "./Punto.js"

export default function Timer(game, deltaT, config) {
    Phaser.Group.call(this, game)
    this.contador = deltaT
    this.timer = game.time.create(false)
    this.timer.loop(1e3, this.contar, this)
    this.timer.start()

    this.rotulo = game.add.text(50, 25, `Tiempo(seg): ${this.contador}`);
    this.rotulo.fill = '#000000'

    const origen = new Punto(75, 60)
    const color = { fondo: 0xffffff, border: 0x000000, relleno: 0x00ff0a }
    this.barra = new BarraProgreso(game, origen, this.contador, color)
}

Timer.prototype = Object.create(Phaser.Group.prototype)
Timer.prototype.constructor = Timer

Timer.prototype.contar = function () {
    this.contador--
    this.barra.setTiempo(this.contador)
    this.rotulo.setText(`Tiempo(seg): ${this.contador}`)
    if (this.finalizo()) {
        this.timer.stop()
        this.timer.destroy()
    }
}

Timer.prototype.finalizo = function () {
    return this.contador === 0
}