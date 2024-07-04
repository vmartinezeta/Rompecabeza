/*Autor: Víctor Martínez*/
import Punto from "./Punto.js"

export default function BarraProgreso(game, origen, tiempo, color) {
    Phaser.Group.call(this, game)
    this.game = game
    this.tiempo = tiempo
    this.renderizar = false
    this.color = color
    this.origen = origen

    this.crearBarra()
    this.llenarTodo()
}

BarraProgreso.prototype = Object.create(Phaser.Group.prototype)
BarraProgreso.prototype.constructor = BarraProgreso

BarraProgreso.prototype.crearBarra = function () {
    const barra = this.game.add.graphics(this.origen.getX(), this.origen.getY())
    barra.clear()
    barra.beginFill(this.color.fondo)
    barra.lineStyle(2, this.color.border, 1)
    barra.moveTo(0, 0)
    barra.lineTo(150, 0)
    barra.lineTo(150, 8)
    barra.lineTo(0, 8)
    barra.lineTo(0, 0)
    barra.endFill()
    this.add(barra)
}

BarraProgreso.prototype.llenarTodo = function () {
    let x = this.origen.getX()
    for (let i = 1; i <= this.tiempo; i++) {
        this.dibujarRelleno(`num-${i}`, this.color.relleno, new Punto(x, this.origen.getY()))
        x += 10
    }
}

BarraProgreso.prototype.dibujarRelleno = function (key, colorFondo, origen) {
    const rectangulo = this.game.add.graphics(origen.getX(), origen.getY()+1)
    rectangulo.clear()
    rectangulo.beginFill(colorFondo)
    rectangulo.moveTo(0, 0)
    rectangulo.lineTo(10, 0)
    rectangulo.lineTo(10, 6)
    rectangulo.lineTo(0, 6)
    rectangulo.lineTo(0, 0)
    rectangulo.endFill()
    rectangulo.key = key
    this.add(rectangulo)
}

BarraProgreso.prototype.getAt = function (key) {
    return this.iterate('key', key, Phaser.Group.RETURN_CHILD)
}

BarraProgreso.prototype.setTiempo = function (tiempo) {
    if (this.tiempo !== tiempo) {
        this.tiempo = tiempo
        this.renderizar = true
    }
}

BarraProgreso.prototype.update = function () {
    if (this.renderizar) {
        this.remove(this.getAt(`num-${this.tiempo + 1}`))
        this.renderizar = false
    }
}