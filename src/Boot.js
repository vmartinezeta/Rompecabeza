/*Autor: Víctor Martínez*/

export default function Boot() {}

Boot.prototype.preload = function () {}

Boot.prototype.create = function () {
    this.game.stage.backgroundColor = 0xffffff
    const scale = this.game.scale
    scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    scale.pageAlignHorizontally = true
    scale.pageAlignVertically = true
    this.game.state.start('Preloader')
}