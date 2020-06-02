import { useContext, useRef, useEffect } from "react"
import { worldContext } from "./useEngine"
export let useCommon = () => {
    let world = useContext(worldContext)
    let intervals = useRef()
    if (intervals.current === undefined) intervals.current = []
    let fns = {
        stepGen: function* () {
            let value = 0
            while (true) yield value++
        },
        timeout: function (callback, delay) {
            let timeStamp = world.timer
            let interval = setInterval(() => {
                if (Math.abs(timeStamp - world.timer) * 1000 >= delay) {
                    clearInterval(interval)
                    callback()
                }
            }, 10)
            intervals.current.push(interval)
        },
        timeoutNext: function (callback, next, delay){
            fns.timeout(() =>{
                callback()
                next()
            }, delay)
        },
        next: function (callback, next){
            callback()
            next()
        },
        fnTimeoutNext: function (fn, next, delay){
            fn()
            fns.timeout(next, delay)
        },
        searchByX: function (pos, arr) {
            let i = Math.floor(arr.length / 2)
            if (arr[i].x === pos.x) return arr[i]
            if (i === 0) return -1
            if (arr[i].x > pos.x) return fns.searchByX(pos, arr.slice(0, i))
            if (arr[i].x < pos.x) return fns.searchByX(pos, arr.slice(i))
        },
        searchTile: function (pos, arr) {
            let filtered = arr.filter(key => key.y === pos.y)
            if (filtered.length === 0) return -1
            return fns.searchByX(pos, filtered)
        },
        getDistance: function (origin, target) {
            return Math.sqrt(Math.pow(target.x - origin.x, 2) + Math.pow(target.y - origin.y, 2))
        },
        searchID: function (id, arr) {
            let i = Math.floor(arr.length / 2)
            if (arr[i].id === id) return arr[i]
            else if (arr[i].id > id) return fns.searchID(id, arr.slice(0, i))
            else if (arr[i].id < id) return fns.searchID(id, arr.slice(i))
        },
        searchPlayer: function (arr) {
            for (let i in arr) {
                if (arr[i].label === "Player") return arr[i]
                else return -1
            }
        }
    }

    useEffect(() => {
        return () => intervals.current.forEach(key => clearInterval(key))
    }, [])
    return fns
}

