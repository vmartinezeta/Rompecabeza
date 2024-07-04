/*Autor: Víctor Martínez*/
export default function Preloader() {
    this.texto = null
    this.arco = null
}

Preloader.prototype.preload = function () {
    this.load.onFileComplete.add(this.cargandoArchivos, this)

    const circulo = this.game.add.graphics(900, 500)
    circulo.lineStyle(5, 0x484848, 0.9)
    circulo.arc(0, 0, 45, 0, this.game.math.degToRad(360), false)

    this.arco = this.game.add.graphics(900, 500)

    this.load.image('1-seg', 'images/1-seg.png')
    this.load.image('2-seg', 'images/2-seg.png')
    this.load.image('3-seg', 'images/3-seg.png')
    this.load.image('listo', 'images/listo.png')
    this.load.image('mainMenu', 'images/fondo.png')
    this.load.image('fondo', 'images/fondo.png')
    this.load.image('mensaje-final', 'images/rotulo-ganador.png')
    this.load.image('pieza-0-0', 'images/pieza-1.png')
    this.load.image('pieza-0-1', 'images/pieza-2.png')
    this.load.image('pieza-0-2', 'images/pieza-3.png')
    this.load.image('pieza-0-3', 'images/pieza-4.png')
    this.load.image('pieza-1-0', 'images/pieza-5.png')
    this.load.image('pieza-1-1', 'images/pieza-6.png')
    this.load.image('pieza-1-2', 'images/pieza-7.png')
    this.load.image('pieza-1-3', 'images/pieza-8.png')
    this.load.image('pieza-2-0', 'images/pieza-9.png')
    this.load.image('pieza-2-1', 'images/pieza-10.png')
    this.load.image('pieza-2-2', 'images/pieza-11.png')
    this.load.image('pieza-2-3', 'images/pieza-12.png')
    this.load.image('button-play', 'images/boton-play.png')
    this.load.image('boton-ver-original', 'images/boton-reintentar.png')
    this.load.image('boton-atras', 'images/boton-atras.png')
    
    this.load.audio('encajado', ['audio/encajado.mp3'])
    this.load.audio('sonido-fondo', ['audio/stranger-things.mp3'])
}

Preloader.prototype.cargandoArchivos = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    if (!success) throw new Error('Error en la precarga de activos')
    const progreso = Math.ceil((totalLoaded * 100) / totalFiles)
    this.setProgresoAlCirculo(progreso)
    let anguloFinal = Math.ceil(360 / totalFiles)
    anguloFinal *= totalLoaded
    this.dibujarArco(anguloFinal)
}

Preloader.prototype.dibujarArco = function (anguloFinal) {
    this.arco.destroy()
    this.arco = this.game.add.graphics(900, 500)
    this.arco.lineStyle(4, 0x000000, 0.9)
    this.arco.arc(0, 0, 45, 0, this.game.math.degToRad(anguloFinal), false)
}

Preloader.prototype.setProgresoAlCirculo = function (progreso) {
    if (this.texto !== null) this.texto.destroy()
    this.texto = this.game.add.text(900, 500, `${progreso}%`)
    this.texto.font = 'Arial Black'
    this.texto.fontSize = 20
    this.texto.fill = '#000000'
    this.texto.setShadow(2, 2, 'rgba(0, 0, 0, 0.9)', 2)
    this.texto.anchor.set(0.5)
}

Preloader.prototype.create = function () {
    this.game.state.start('MainMenu')
}