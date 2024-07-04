/*Autor: Víctor Martínez*/

export default function Celda(pieza, ubicacion) {
    this.pieza = pieza
    this.ubicacion = ubicacion
    this.ocupada = false
}

Celda.prototype = Object.create(Celda.prototype)
Celda.prototype.constructor = Celda

Celda.prototype.setPieza = function (pieza) {
    this.pieza = pieza
}

Celda.prototype.getPieza = function () {
    return this.pieza
}

Celda.prototype.setUbicacion = function (ubicacion) {
    this.ubicacion = ubicacion
}

Celda.prototype.getUbicacion = function () {
    return this.ubicacion
}

Celda.prototype.setOcupada = function (ocupada) {
    this.ocupada = ocupada
}

Celda.prototype.isDisponible = function () {
    return !this.ocupada
}

Celda.prototype.newInstance = function () {
    return new Celda(this.pieza, this.ubicacion)
}