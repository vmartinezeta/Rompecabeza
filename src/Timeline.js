/*Autor: Víctor Martínez*/
export default function Timeline(game, deltaT1, deltaT2) {
    Phaser.Group.call(this, game)
    this.game = game
    this.deltaT1 = deltaT1
    this.deltaT2 = deltaT2
    this.delta = deltaT1 + deltaT2
    this.timer = game.time.create(false)
    this.timer.loop(1e3, this.actualizar, this)
}

Timeline.prototype = Object.create(Phaser.Group.prototype)
Timeline.prototype.constructor = Timeline

Timeline.prototype.actualizar = function () {
    this.delta++
    if (this.isAtEnd()) {
        this.timer.stop()
        this.timer.destroy()
        this.timer.loop(1e3, this.actualizar, this)
    }
}

Timeline.prototype.reset = function () {
    this.delta = 0
    this.timer.start()
}

Timeline.prototype.getTotal = function () {
    return this.deltaT1 + this.deltaT2
}

Timeline.prototype.getDeltaTotal = function () {
    return this.getTotal() - this.delta
}

Timeline.prototype.isAtEnd = function () {
    return !this.isAtT1() && !this.isAtT2()
}

Timeline.prototype.isAtT1 = function () {
    return this.getDeltaTotal() > this.deltaT2
}

Timeline.prototype.isAtT2 = function () {
    return this.getDeltaTotal() > 0 && this.getDeltaTotal() <= this.deltaT2
}

Timeline.prototype.isOutT1 = function () {
    return this.delta === this.deltaT1
}