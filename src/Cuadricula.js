/*Autor: Víctor Martínez*/

import Celda from "./Celda.js"
import Clasificacion from "./Clasificacion.js"
import Punto from "./Punto.js"
import Ubicacion from "./Ubicacion.js"

export default function Cuadricula(fila, columna) {
    this.fila = fila
    this.columna = columna
    this.cuadricula = []
    const ANCHO = 256
    const LARGO = 190
    for (let i = 0; i < fila; i++) {
        const vector = []
        for (let j = 0; j < columna; j++) {
            let x = ANCHO * j + 5
            if ((i % 2 === 0 && j % 2 === 0 && j === 2)
                || (i % 2 !== 0 && j % 2 !== 0)) {
                x = ANCHO * j - 40 + 5
            }

            let y = LARGO * i + 100
            if ((i % 2 === 0 && j % 2 === 0 && i > 0)
                || (i % 2 !== 0 && j % 2 !== 0)) {
                y = LARGO * i - 40 + 100
            }

            const ubicacion = new Ubicacion(new Punto(i, j), new Punto(x, y), new Punto(x, y))
            const pieza = new Clasificacion(1, `pieza-${i}-${j}`)
            vector.push(new Celda(pieza, ubicacion))
        }
        this.cuadricula.push(vector)
    }
}

Cuadricula.prototype = Object.create(Cuadricula.prototype)
Cuadricula.prototype.constructor = Cuadricula

Cuadricula.prototype.mezclarPiezas = function (origen, radio) {
    const THETA_EN_RADIANES = 2 * Math.PI
    let cantidadPuntos = this.fila * this.columna
    const sectorCircular = []
    while (cantidadPuntos) {
        const theta = Math.random() * THETA_EN_RADIANES
        const r = Math.random() * radio
        const x = Math.ceil(origen.getX() + r * Math.cos(theta))
        const y = Math.ceil(origen.getY() + r * Math.sin(theta))
        
        const punto = new Punto(x, y)
        if (!this.existe(punto, sectorCircular)) {
            sectorCircular.push(punto)
            cantidadPuntos--
        }
    }


    for (let [i, celda] of this.toCeldas().entries()) {
        const ubicacion = celda.getUbicacion().newInstance()
        ubicacion.setPuntoConcreto(sectorCircular[i])
        celda.setUbicacion(ubicacion)
        this.setCelda(celda)
    }
}

Cuadricula.prototype.existe = function (punto, sectorCircular) {
    for (let coordenada of sectorCircular) {
        if (coordenada.toString() === punto.toString()) {
            return true
        }
    }
    return false
}

Cuadricula.prototype.toCeldas = function () {
    const celdas = []
    for (let i = 0; i < this.fila; i++) {
        for (let j = 0; j < this.columna; j++) {
            const celda = this.fromXY(i, j)
            celdas.push(celda)
        }
    }
    return celdas
}

Cuadricula.prototype.getPuntosDisponibles = function () {
    return this.toCeldas().filter(c => c.isDisponible())
    .map(({ubicacion:{puntoAbstracto}})=> puntoAbstracto)
}

Cuadricula.prototype.fromXY = function (x, y) {
    return this.cuadricula[x][y]
}

Cuadricula.prototype.fromPunto = function (punto) {
    return this.fromXY(punto.getX(), punto.getY())
}

Cuadricula.prototype.setCelda = function (celda) {
    const { x, y } = celda.getUbicacion().getPuntoAbstracto()
    this.cuadricula[x][y] = celda
}

Cuadricula.prototype.hayDisponible = function () {
    return this.toCeldas().filter(c=> c.isDisponible()).length !== 0
}

Cuadricula.prototype.toPuntoArray = function () {
    return this.toCeldas().map(({ubicacion:{puntoAbstracto}}) => puntoAbstracto)
}

Cuadricula.prototype.newInstance = function () {
    return new Cuadricula(this.fila, this.columna)
}