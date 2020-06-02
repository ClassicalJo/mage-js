import { Body, Bodies, World } from 'matter-js'
import Target from "./targeting"

export class GameBody {
    constructor(world) {
        this.intervals = []
        this.body = Bodies.circle(0, 0, 5)
        this.add = () => World.add(world, this.body)
        this.remove = () => {
            World.remove(world, this.body)
            for (let i in this.intervals) clearInterval(this.intervals[i])
            for (let property in this) delete this[property]
        }

        this.timeout = (callback, delay) => {
            let timeStamp = world.timer
            let interval = setInterval(() => {
                if (Math.abs(timeStamp - world.timer) * 1000 >= delay) {
                    callback()
                    clearInterval(interval)
                }
            }, 10)
            this.intervals.push(interval)
        }
    }
    checkIfInArea = (currentPosition, targetPosition, errorRange) => {
        return Math.abs(targetPosition - currentPosition) < errorRange
    }

    move = (target, callback) => {
        let speed = 8
        if (this.body.isStatic) Body.setStatic(this.body, false)
        if (this.checkIfInArea(this.body.position.x, target.x, speed) && this.checkIfInArea(this.body.position.y, target.y, speed)) {
            Body.setVelocity(this.body, { x: 0, y: 0 })
            Body.setPosition(this.body, target)
            Body.setStatic(this.body, true)
            if (callback) callback()
        }
        else {
            let velocity = Target.getVelocity(this.body.position, target, speed)
            Body.setVelocity(this.body, velocity)
            this.timeout(() => this.move(target, callback), 20)
        }
    }
}
