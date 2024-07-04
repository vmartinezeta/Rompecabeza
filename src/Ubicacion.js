/*Autor: Víctor Martínez*/
export default function Ubicacion(puntoAbstracto, puntoConcreto, puntoDefault) {
    this.puntoAbstracto = puntoAbstracto
    this.puntoConcreto = puntoConcreto
    this.puntoDefault = puntoDefault
}

Ubicacion.prototype = Object.create(Ubicacion.prototype)
Ubicacion.prototype.constructor = Ubicacion

Ubicacion.prototype.setPuntoAbstracto = function (puntoAbstracto) {
    this.puntoAbstracto = puntoAbstracto
}

Ubicacion.prototype.reset = function () {
    this.puntoConcreto = this.puntoDefault
}

Ubicacion.prototype.getPuntoAbstracto = function () {
    return this.puntoAbstracto
}

Ubicacion.prototype.getPuntoConcreto = function () {
    return this.puntoConcreto
}

Ubicacion.prototype.setPuntoConcreto = function (punto) {
    this.puntoConcreto = punto
}

Ubicacion.prototype.newInstance = function () {
    return new Ubicacion(this.puntoAbstracto, this.puntoConcreto, this.puntoDefault)
}