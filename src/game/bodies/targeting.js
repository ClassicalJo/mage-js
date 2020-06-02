let getAngle = (origin, target) => {
    return Math.atan2(target.y - origin.y, target.x - origin.x)
}
let Target = {
    getAngle360: (origin, target) => {
        let theta = Math.atan2(target.y - origin.y, target.x - origin.x)
        theta = (theta > 0 ? theta : (2 * Math.PI + theta)) * 360 / (2 * Math.PI)
        return theta * Math.PI / 180
    },
    getAngle: (origin, target) => {
        return Math.atan2(target.y - origin.y, target.x - origin.x)
    },
    getVelocity: (origin, target, speed) => {
        let theta = getAngle(origin, target)
        return { x: speed * Math.cos(theta), y: speed * Math.sin(theta) }
    },
}
export default Target
