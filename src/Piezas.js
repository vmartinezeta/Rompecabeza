/*Autor: Víctor Martínez*/

export default function Piezas(game, cuadricula, tablero) {
    Phaser.Group.call(this, game)
    this.enableBody = true
    this.physicsBodyType = Phaser.Physics.ARCADE
    this.cuadricula = cuadricula
    this.tablero = tablero
    this.game = game
    this.redibujar = false
    this.dibujarTodas()
}


Piezas.prototype = Object.create(Phaser.Group.prototype)
Piezas.prototype.constructor = Piezas


Piezas.prototype.dibujarTodas = function() {
    this.cuadricula.toCeldas().filter(celda => !celda.isDisponible()).forEach(celda =>this.dibujarPieza(celda))
    this.cuadricula.toCeldas().filter(celda => celda.isDisponible()).forEach(celda =>this.dibujarPieza(celda))
}

Piezas.prototype.bloquear = function() {
    this.cuadricula.toPuntoArray().forEach(punto => {
        const pieza = this.iterate('key', punto.toString(), Phaser.Group.RETURN_CHILD)
        pieza.inputEnabled = false
    })
}

Piezas.prototype.eliminarTodas = function () {
    this.cuadricula.toPuntoArray().forEach(punto => this.eliminar(punto))
}

Piezas.prototype.eliminar = function(punto) {
    const pieza = this.iterate('key', punto.toString(), Phaser.Group.RETURN_CHILD)
    this.remove(pieza)
}

Piezas.prototype.dibujarPieza = function (celda) {
    const pieza = celda.getPieza()
    const ubicacion = celda.getUbicacion()
    
    const puntoAbstracto = ubicacion.getPuntoAbstracto()
    const { x, y } = ubicacion.getPuntoConcreto()
    const piezaEnJuego = this.create(x, y, pieza.getNombre())

    piezaEnJuego.key = puntoAbstracto.toString()
    piezaEnJuego.toCelda = function () {
        return celda
    }
    piezaEnJuego.inputEnabled = true
    if (!celda.isDisponible()) {
        piezaEnJuego.inputEnabled = false
    }
    piezaEnJuego.input.enableDrag()
    piezaEnJuego.anchor.set(0)
    piezaEnJuego.events.onDragStop.add(this.comprobarEncaje, this)
    this.game.physics.enable(piezaEnJuego, Phaser.Physics.ARCADE)
    piezaEnJuego.body.immovable = true
    piezaEnJuego.events.onDragStart.add(this.activar, this)
}

Piezas.prototype.activar = function (pieza) {
    pieza.tint = 0x1100ed00
    pieza.alpha = 0.95
    this.bringToTop(pieza)
}

Piezas.prototype.debeRedibujar = function() {
    return this.redibujar
}

Piezas.prototype.setRedibujar = function(redibujar) {
    this.redibujar = redibujar
}

Piezas.prototype.comprobarEncaje = function (pieza) {
    
    const celda = pieza.toCelda()
    const ubicacion = celda.getUbicacion().newInstance()
    const concreto = ubicacion.getPuntoConcreto()
    
    concreto.setX(pieza.x)
    concreto.setY(pieza.y)
    celda.setUbicacion(ubicacion)

    this.cuadricula.setCelda(celda)
    this.setRedibujar(true)
   
    this.game.physics.arcade.collide(pieza, this.tablero, this.encajar, null, this);
}

Piezas.prototype.encajar = function (pieza, espacio) {
    
    const celdaPieza = pieza.toCelda()
    const ubicacionPieza = celdaPieza.getUbicacion()
    const punto = espacio.toPunto()
    const { puntoAbstracto } = ubicacionPieza

    if (puntoAbstracto.toString() === punto.toString()) {
        celdaPieza.setOcupada(true)
        ubicacionPieza.reset()
        const sonido = this.game.add.audio("encajado")
        sonido.play()
    }
    this.cuadricula.setCelda(celdaPieza)
    this.setRedibujar(true)
}

Piezas.prototype.update = function() {
    if (this.debeRedibujar()) {
        this.eliminarTodas()
        this.dibujarTodas()
        this.setRedibujar(false)
    }
}