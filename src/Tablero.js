/*Autor: Víctor Martínez*/
import Punto from "./Punto.js"


export default function Tablero(game, origen) {
    Phaser.Group.call(this, game)
    this.game = game
    const colorFondo = 0x1a1a1a
    const colorBorde = 0xffffff
    this.inputEnableChildren = true
    this.enableBody = true
    this.physicsBodyType = Phaser.Physics.ARCADE


    let coordenada = origen.newInstance()
    let punto = origen.newInstance()
    let isPositivoX = null
    let isPositivoY = null
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            punto = punto.newInstance()
            if (j > 0) {
                punto.x += 256
            }

            if (isPositivoX !== null) {
                isPositivoX = !isPositivoX
            } else if (i % 2 === 0 && j === 2) {
                isPositivoX = false
            } else if (i % 2 !== 0 && j === 1) {
                isPositivoX = false
            }

            if (isPositivoX !== null && isPositivoX) {
                punto.x += 40
            } else if (isPositivoX !== null && !isPositivoX) {
                punto.x -= 40
            }


            if (isPositivoY !== null) {
                isPositivoY = !isPositivoY
            } else if (i === 2 && j === 0) {
                isPositivoY = false
            } else if (i % 2 !== 0 && j === 1) {
                isPositivoY = false
            }

            if (isPositivoY !== null && isPositivoY) {
                punto.y += 40
            } else if (isPositivoY !== null && !isPositivoY) {
                punto.y -= 40
            }

            const espacio = this[`createEspacio${4 * i + j + 1}`](new Punto(i, j), punto, colorFondo, colorBorde)
            this.add(espacio)
        }

        isPositivoX = null
        isPositivoY = null
        coordenada = origen.newInstance()
        coordenada.y += 190 * (i + 1)
        punto = coordenada.newInstance()
    }

}

Tablero.prototype = Object.create(Phaser.Group.prototype)
Tablero.prototype.constructor = Tablero


Tablero.prototype.getAt = function (punto) {
    return this.iterate('key', punto.toString(), Phaser.Group.RETURN_CHILD)
}

Tablero.prototype.createEspacio1 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio.clear()
    espacio.beginFill(colorFondo)
    espacio.lineStyle(4, colorBorde, 1)
    espacio.moveTo(0, 0)
    espacio.lineTo(256, 0)
    espacio.lineTo(256, 75)
    espacio.lineTo(296, 75)
    espacio.lineTo(296, 115)
    espacio.lineTo(256, 115)
    espacio.lineTo(256, 190)
    espacio.lineTo(148, 190)
    espacio.lineTo(148, 230)
    espacio.lineTo(108, 230)
    espacio.lineTo(108, 190)
    espacio.lineTo(0, 190)
    espacio.lineTo(0, 0)
    espacio.endFill()
    espacio.inputEnabled = true
    espacio.key = puntoAbstracto.toString()
    espacio.toPunto = function () {
        return puntoAbstracto
    }
    return espacio
}


Tablero.prototype.createEspacio2 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio.clear()
    espacio.beginFill(colorFondo)
    espacio.lineStyle(4, colorBorde, 1)
    espacio.moveTo(0, 0)
    espacio.lineTo(256, 0)
    espacio.lineTo(256, 75)
    espacio.lineTo(216, 75)
    espacio.lineTo(216, 115)
    espacio.lineTo(256, 115)
    espacio.lineTo(256, 190)
    espacio.lineTo(148, 190)
    espacio.lineTo(148, 150)
    espacio.lineTo(108, 150)
    espacio.lineTo(108, 190)
    espacio.lineTo(0, 190)
    espacio.lineTo(0, 115)
    espacio.lineTo(40, 115)
    espacio.lineTo(40, 75)
    espacio.lineTo(0, 75)
    espacio.lineTo(0, 0)
    espacio.endFill()
    espacio.inputEnabled = true
    espacio.key = puntoAbstracto.toString()
    espacio.toPunto = function () {
        return puntoAbstracto
    }
    return espacio
}


Tablero.prototype.createEspacio3 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio.clear()
    espacio.beginFill(colorFondo)
    espacio.lineStyle(4, colorBorde, 1)
    espacio.moveTo(0, 75)
    espacio.lineTo(40, 75)
    espacio.lineTo(40, 0)
    espacio.lineTo(296, 0)
    espacio.lineTo(296, 75)
    espacio.lineTo(336, 75)
    espacio.lineTo(336, 115)
    espacio.lineTo(296, 115)
    espacio.lineTo(296, 190)
    espacio.lineTo(189, 190)
    espacio.lineTo(189, 230)
    espacio.lineTo(148, 230)
    espacio.lineTo(148, 190)
    espacio.lineTo(40, 190)
    espacio.lineTo(40, 115)
    espacio.lineTo(0, 115)
    espacio.lineTo(0, 75)
    espacio.endFill()
    espacio.inputEnabled = true
    espacio.key = puntoAbstracto.toString()
    espacio.toPunto = function () {
        return puntoAbstracto
    }
    return espacio
}


Tablero.prototype.createEspacio4 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio.clear()
    espacio.beginFill(colorFondo)
    espacio.lineStyle(4, colorBorde, 1)
    espacio.moveTo(0, 0)
    espacio.lineTo(256, 0)
    espacio.lineTo(256, 190)
    espacio.lineTo(148, 190)
    espacio.lineTo(148, 150)
    espacio.lineTo(108, 150)
    espacio.lineTo(108, 150)
    espacio.lineTo(108, 190)
    espacio.lineTo(0, 190)
    espacio.lineTo(0, 115)
    espacio.lineTo(40, 115)
    espacio.lineTo(40, 75)
    espacio.lineTo(0, 75)
    espacio.lineTo(0, 0)
    espacio.endFill()
    espacio.inputEnabled = true
    espacio.key = puntoAbstracto.toString()
    espacio.toPunto = function () {
        return puntoAbstracto
    }
    return espacio
}


Tablero.prototype.createEspacio5 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio.clear()
    espacio.beginFill(colorFondo)
    espacio.lineStyle(4, colorBorde, 1)
    espacio.moveTo(0, 0)
    espacio.lineTo(108, 0)
    espacio.lineTo(108, 40)
    espacio.lineTo(148, 40)
    espacio.lineTo(148, 0)
    espacio.lineTo(256, 0)
    espacio.lineTo(256, 75)
    espacio.lineTo(216, 75)
    espacio.lineTo(216, 115)
    espacio.lineTo(256, 115)
    espacio.lineTo(256, 190)
    espacio.lineTo(148, 190)
    espacio.lineTo(148, 150)
    espacio.lineTo(108, 150)
    espacio.lineTo(108, 190)
    espacio.lineTo(0, 190)
    espacio.lineTo(0, 0)
    espacio.endFill()
    espacio.inputEnabled = true
    espacio.key = puntoAbstracto.toString()
    espacio.toPunto = function () {
        return puntoAbstracto
    }
    return espacio
}


Tablero.prototype.createEspacio6 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio.clear()
    espacio.beginFill(colorFondo)
    espacio.lineStyle(4, colorBorde, 1)
    espacio.moveTo(0, 115)
    espacio.lineTo(40, 115)
    espacio.lineTo(40, 40)
    espacio.lineTo(148, 40)
    espacio.lineTo(148, 0)
    espacio.lineTo(189, 0)
    espacio.lineTo(189, 40)
    espacio.lineTo(296, 40)
    espacio.lineTo(296, 115)
    espacio.lineTo(336, 115)
    espacio.lineTo(336, 155)
    espacio.lineTo(296, 155)
    espacio.lineTo(296, 230)
    espacio.lineTo(189, 230)
    espacio.lineTo(189, 270)
    espacio.lineTo(148, 270)
    espacio.lineTo(148, 230)
    espacio.lineTo(40, 230)
    espacio.lineTo(40, 155)
    espacio.lineTo(0, 155)
    espacio.lineTo(0, 115)
    espacio.endFill()
    espacio.inputEnabled = true
    espacio.key = puntoAbstracto.toString()
    espacio.toPunto = function () {
        return puntoAbstracto
    }
    return espacio
}


Tablero.prototype.createEspacio7 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio7 = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio7.clear()
    espacio7.beginFill(colorFondo)
    espacio7.lineStyle(4, colorBorde, 1)
    espacio7.moveTo(0, 0)
    espacio7.lineTo(108, 0)
    espacio7.lineTo(108, 40)
    espacio7.lineTo(148, 40)
    espacio7.lineTo(148, 0)
    espacio7.lineTo(256, 0)
    espacio7.lineTo(256, 75)
    espacio7.lineTo(216, 75)
    espacio7.lineTo(216, 115)
    espacio7.lineTo(256, 115)
    espacio7.lineTo(256, 190)
    espacio7.lineTo(148, 190)
    espacio7.lineTo(148, 150)
    espacio7.lineTo(108, 150)
    espacio7.lineTo(108, 190)
    espacio7.lineTo(0, 190)
    espacio7.lineTo(0, 115)
    espacio7.lineTo(40, 115)
    espacio7.lineTo(40, 75)
    espacio7.lineTo(0, 75)
    espacio7.lineTo(0, 0)
    espacio7.endFill()
    espacio7.inputEnabled = true

    espacio7.key = puntoAbstracto.toString()
    espacio7.toPunto = function () {
        return puntoAbstracto
    }
    return espacio7
}


Tablero.prototype.createEspacio8 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio8 = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio8.clear()
    espacio8.beginFill(colorFondo)
    espacio8.lineStyle(4, colorBorde, 1)
    espacio8.moveTo(0, 115)
    espacio8.lineTo(40, 115)
    espacio8.lineTo(40, 40)
    espacio8.lineTo(148, 40)
    espacio8.lineTo(148, 0)
    espacio8.lineTo(188, 0)
    espacio8.lineTo(188, 40)
    espacio8.lineTo(296, 40)
    espacio8.lineTo(296, 230)
    espacio8.lineTo(188, 230)
    espacio8.lineTo(188, 270)
    espacio8.lineTo(148, 270)
    espacio8.lineTo(148, 230)
    espacio8.lineTo(40, 230)
    espacio8.lineTo(40, 155)
    espacio8.lineTo(0, 155)
    espacio8.lineTo(0, 115)
    espacio8.endFill()
    espacio8.inputEnabled = true
    espacio8.key = puntoAbstracto.toString()
    espacio8.toPunto = function () {
        return puntoAbstracto
    }
    return espacio8
}


Tablero.prototype.createEspacio9 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio9 = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio9.clear()
    espacio9.beginFill(colorFondo)
    espacio9.lineStyle(4, colorBorde, 1)
    espacio9.moveTo(0, 40)
    espacio9.lineTo(108, 40)
    espacio9.lineTo(108, 0)
    espacio9.lineTo(148, 0)
    espacio9.lineTo(148, 40)
    espacio9.lineTo(256, 40)
    espacio9.lineTo(256, 115)
    espacio9.lineTo(296, 115)
    espacio9.lineTo(296, 155)
    espacio9.lineTo(256, 155)
    espacio9.lineTo(256, 230)
    espacio9.lineTo(0, 230)
    espacio9.lineTo(0, 40)
    espacio9.endFill()
    espacio9.inputEnabled = true
    espacio9.key = puntoAbstracto.toString()
    espacio9.toPunto = function () {
        return puntoAbstracto
    }
    return espacio9
}


Tablero.prototype.createEspacio10 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio10 = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio10.clear()
    espacio10.beginFill(colorFondo)
    espacio10.lineStyle(4, colorBorde, 1)
    espacio10.moveTo(0, 0)
    espacio10.lineTo(108, 0)
    espacio10.lineTo(108, 40)
    espacio10.lineTo(148, 40)
    espacio10.lineTo(148, 0)
    espacio10.lineTo(256, 0)
    espacio10.lineTo(256, 75)
    espacio10.lineTo(216, 75)
    espacio10.lineTo(216, 115)
    espacio10.lineTo(256, 115)
    espacio10.lineTo(256, 190)
    espacio10.lineTo(0, 190)
    espacio10.lineTo(0, 115)
    espacio10.lineTo(40, 115)
    espacio10.lineTo(40, 75)
    espacio10.lineTo(0, 75)
    espacio10.lineTo(0, 0)
    espacio10.endFill()
    espacio10.inputEnabled = true

    espacio10.key = puntoAbstracto.toString()
    espacio10.toPunto = function () {
        return puntoAbstracto
    }
    return espacio10
}


Tablero.prototype.createEspacio11 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio11 = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio11.clear()
    espacio11.beginFill(colorFondo)
    espacio11.lineStyle(4, colorBorde, 1)
    espacio11.moveTo(0, 115)
    espacio11.lineTo(40, 115)
    espacio11.lineTo(40, 40)
    espacio11.lineTo(148, 40)
    espacio11.lineTo(148, 0)
    espacio11.lineTo(188, 0)
    espacio11.lineTo(188, 40)
    espacio11.lineTo(296, 40)
    espacio11.lineTo(296, 115)
    espacio11.lineTo(336, 115)
    espacio11.lineTo(336, 155)
    espacio11.lineTo(296, 155)
    espacio11.lineTo(296, 230)
    espacio11.lineTo(40, 230)
    espacio11.lineTo(40, 155)
    espacio11.lineTo(0, 155)
    espacio11.lineTo(0, 115)
    espacio11.endFill()
    espacio11.inputEnabled = true
    espacio11.key = puntoAbstracto.toString()
    espacio11.toPunto = function () {
        return puntoAbstracto
    }
    return espacio11
}


Tablero.prototype.createEspacio12 = function (puntoAbstracto, puntoConcreto, colorFondo, colorBorde) {
    const espacio = this.game.add.graphics(puntoConcreto.x, puntoConcreto.y)
    espacio.clear()
    espacio.beginFill(colorFondo)
    espacio.lineStyle(4, colorBorde, 1)
    espacio.moveTo(0, 0)
    espacio.lineTo(108, 0)
    espacio.lineTo(108, 40)
    espacio.lineTo(148, 40)
    espacio.lineTo(148, 0)
    espacio.lineTo(256, 0)
    espacio.lineTo(256, 190)
    espacio.lineTo(0, 190)
    espacio.lineTo(0, 115)
    espacio.lineTo(40, 115)
    espacio.lineTo(40, 75)
    espacio.lineTo(0, 75)
    espacio.lineTo(0, 0)
    espacio.endFill()
    espacio.inputEnabled = true
    espacio.key = puntoAbstracto.toString()
    espacio.toPunto = function () {
        return puntoAbstracto
    }
    return espacio
}