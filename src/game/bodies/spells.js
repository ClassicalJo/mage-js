import { GameBody } from "./index"
import { Bodies, Body } from "matter-js";
import Target from "./targeting";

export class Bolt extends GameBody {
    constructor(origin, target, damage, name, meta, world, callback) {
        super(world);
        this.fade = () => {
            callback()
            this.remove()
        }
        this.body = Bodies.circle(origin.x, origin.y, 10, {
            label: "Spell",
            name: name,
            isSensor: true,
            damage: damage,
            remove: this.fade,
            ...meta
        })
        this.add()
        this.timeout(() => Body.setVelocity(this.body, Target.getVelocity(origin, target, 30)), 1000)
        this.timeout(this.fade, 5000)
    }
}

export class Explosion extends GameBody {
    constructor(origin, damage, name, meta, world, callback) {
        super(world);
        this.fade = () => {
            this.timeout(() => {
                callback()
                this.remove()
            }, 2000)
        }
        this.body = Bodies.circle(origin.x, origin.y, 150, {
            label: "Spell",
            name: name,
            isSensor: true,
            damage: damage,
            remove: this.fade,
            ...meta
        })
        this.add()
        this.timeout(this.fade, 5000)
    }
}
export class Exploding extends GameBody {
    constructor(origin, target, damage, name, meta, world, callback) {
        super(world);
        this.explode = position => {
            new Explosion(position, damage, name, meta, world, callback)
            this.remove()
        }

        this.body = Bodies.circle(origin.x, origin.y, 10, {
            label: "Exploding",
            name: name,
            isSensor: true,
            damage: damage,
            explode: this.explode,
        })
        this.add()

        this.timeout(() => Body.setVelocity(this.body, Target.getVelocity(origin, target, 20)), 1000)
    }
}

export class Rain extends GameBody {
    constructor(origin, damage, name, meta, world) {
        super(world);
        this.fade = () => this.timeout(this.remove, 3000)
        this.body = Bodies.circle(origin.x, origin.y, 10, {
            label: "Spell",
            name: name,
            isSensor: true,
            damage: damage,
            remove: this.fade,
            ...meta
        })
        this.add()
        this.timeout(this.animate, 0)
    }
    animate = () => {
        let $body = document.querySelector(`#rain${this.body.id}`)
        if ($body !== undefined && $body !== null) $body.beginElement()
    }
}
