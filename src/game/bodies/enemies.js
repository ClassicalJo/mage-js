import { GameBody } from '.';
import { Bodies } from 'matter-js'

class Enemy extends GameBody {
    constructor(origin, hp, speed, world) {
        super(world);
        this.body = Bodies.circle(origin.x, origin.y, 30, {
            name: "Enemy",
            label: "Enemy",
            isStatic: true,
            hp: hp,
            maxHP: hp,
            moveSpeed: speed,
            remove: this.remove,
            move: this.move
        })
    }
}

class Skeleton extends GameBody {
    constructor(origin, world) {
        super(world);
        this.body = Bodies.circle(origin.x, origin.y, 30, {
            name: "Skeleton",
            label: "Enemy",
            isStatic: true,
            damage: { amount: 3, sides: 6, element: "force" },
            behaviour: "Melee",
            hp: 30,
            maxHP: 30,
            moveSpeed: 2,
            remove: this.remove,
            move: this.move,
        })
    }
}

class Warg extends GameBody {
    constructor(origin, world) {
        super(world);
        this.body = Bodies.circle(origin.x, origin.y, 30, {
            name: "Warg",
            label: "Enemy",
            isStatic: true,
            damage: { amount: 2, sides: 10, element: "force" },
            behaviour: "Melee",
            hp: 50,
            maxHP: 50,
            moveSpeed: 4,
            remove: this.remove,
            move: this.move,
        })
    }
}

class Elf extends GameBody {
    constructor(origin, world) {
        super(world);
        this.body = Bodies.circle(origin.x, origin.y, 30, {
            name: "Elf",
            label: "Enemy",
            isStatic: true,
            damage: { amount: 1, sides: 10, element: "force" },
            behaviour: "Ranged",
            hp: 25,
            maxHP: 25,
            moveSpeed: 3,
            remove: this.remove,
            move: this.move
        })
    }
}

class Statue extends GameBody {
    constructor(origin, world) {
        super(world)
        this.body = Bodies.circle(origin.x, origin.y, 30, {
            name: "Stone Statue",
            label: "Enemy",
            isStatic: true,
            damage: { amount: 0, sides: 0, element: "force" },
            behaviour: "Melee",
            hp: 25,
            maxHP: 25,
            moveSpeed: 0,
            remove: this.remove,
            move: this.move
        })
    }
}
export default { Enemy, Skeleton, Warg, Elf, Statue }
