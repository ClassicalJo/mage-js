import { useSelector } from "react-redux"

export let useGetBoardLogic = () => {
    let viewBox = useSelector(state => state.screen.viewBox)
    let { height, width } = { ...viewBox }
    let centers = get4Centers(width - 100, height - 100, 0, 0, 3).flat()
    let sorted = centers.sort((a, b) => sortByHeight(a, b))
    return sorted
}

let get4Centers = (width, height, x, y, times) => {
    let results = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }]
    for (let i in results) {
        let result = {
            width: width / 2,
            height: height / 2,
            x: x + width / 4 * results[i].x,
            y: y + height / 4 * results[i].y
        }
        results[i] = result
    }
    let remainingTimes = times - 1
    if (remainingTimes > 0) results.map((key, index) => results[index] = get4Centers(key.width, key.height, key.x, key.y, remainingTimes).flat())

    return results
}

let sortByHeight = (a, b) => {
    let result = a.y - b.y
    if (a.y - b.y === 0) return a.x - b.x
    else return result
}
