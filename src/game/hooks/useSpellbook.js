import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showSpellbook, loadSpellbook, showBattleMenu } from "../../redux/actions"

export let useSpellbook = () => {
    let playerPosition = useSelector(state => state.player.position)
    let timeout = useRef()
    let dispatch = useDispatch()
    let spellbookLength = useSelector(state => state.spellbook.length)
    let [word, setWord] = useState([])
    useEffect(() => {
        let onKeyDown = e => {
            if (e.key === "Escape") {
                dispatch(showSpellbook(false))
                dispatch(showBattleMenu(true))
            }
            if (/^[A-Za-z]$/.test(e.key) && word.length < spellbookLength) {
                let newWord = [...word, e.key.toUpperCase()]
                setWord(newWord)
            }
            if (e.key === "Enter") {
                let animateNode = document.querySelectorAll(".spellLetter")
                animateNode.forEach(key => key.beginElement())
                dispatch(loadSpellbook(decode(word, playerPosition)))
                timeout.current = setTimeout(() => {
                    dispatch(showSpellbook(false))
                    dispatch(showBattleMenu(true))}, 1000)
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            clearTimeout(timeout.current)
        }
    }, [word, dispatch, playerPosition, spellbookLength])
    return word
}

let baseSpell = {
    element: ["force"],
    range: "10",
    damage: [{ amount: 1, sides: 6, source: "force" }],
    effect: [],
    origin: { x: 0, y: 0 },
    effectChance: [],
    maximize: false,
    combine: false,
    empower: false,
    target: ["single"],
}
let decode = (array, origin) => {
    let runes = []
    let spells = []
    let spell = { ...baseSpell, origin: {...origin} }
    let craftSpell = {...spell}
    for (let i = 0; i < array.length; i += 2) runes.push(array[i] + array[i + 1])
    runes = trimStart(runes)
    for (let i = 0; i < runes.length; i++) {
        if (cypher[runes[i]] !== undefined) {
            spell = craft(spell, runes[i], runes[i - 1] || null)
            if (i === runes.length - 1 || runes[i] === "SU") {
                spells.push(spell)
                spell = { ...craftSpell }
            }
        }
    }

    if (spells.length === 0) spells.push(spell)
    spells.forEach(key => key.name = discoverName(key))
    return spells
}

let trimStart = runeArray => {
    let runes = [...runeArray]
    if (runes.length === 0 || runes[0] === "TI" || runes[0] === "FU" || runes[0] === "GA" || runes[0] === "VE") { return runes }
    runes.splice(0, 1)
    return trimStart(runes)
}

let cypher = {
    TI: { element: ["earth"], damage: [{ amount: 1, sides: 6, source: 'earth' }] },
    FU: { element: ["fire"], damage: [{ amount: 1, sides: 6, source: 'fire' }] },
    GA: { element: ["water"], damage: [{ amount: 1, sides: 6, source: 'water' }] },
    VE: { element: ["wind"], damage: [{ amount: 1, sides: 6, source: 'wind' }] },
    LO: { element: ["force"], damage: [{ amount: 1, sides: 6, source: 'force' }] },
    SU: {},
    KO: { combine: true },
    MU: { target: ["ball"] },
    // RU: { target: ["cone"] },
    LU: { target: ["all"] },

}

let incompatibilities = {
    TI: ['TI', 'VE', 'GA'],
    FU: ['FU', 'GA', 'TI'],
    GA: ['GA', 'FU', 'VE'],
    VE: ['VE', 'TI', 'FU'],
    LO: ['TI', 'VE', 'GA', 'FU', 'LO'],
    SU: [],
    KO: ['LO, SU'],
    MU: ['SU'],
    // RU: ['SU'],
    LU: ['SU']
}

let isCompatible = (rune, lastRune) => {
    let filtered = incompatibilities[rune].filter(key => key === lastRune)
    return filtered.length === 0
}

let addRune = (spell, newSpell, rune) => {
    for (let property in cypher[rune]) {
        if (typeof newSpell[property] === "boolean") newSpell[property] = cypher[rune][property]
        else newSpell[property] = [...spell[property], ...cypher[rune][property]]
    }
}

let craft = (spell, rune, lastRune) => {
    let newSpell = { ...spell }
    if (isCompatible(rune, lastRune)) addRune(spell, newSpell, rune)
    return newSpell
}

let shapes = {
    single: "bolt",
    all: 'rain',
    self: 'armor',
    cone: "breath",
    ball: "ball",
}

let combineElements = e => {
    if (e.earth > 0) {
        if (e.water > 0 && e.fire > 0 && e.wind === 0) return "delta"
        else if (e.water > 0) return "stone"
        else if (e.wind > 0) return "sand"
        else if (e.fire > 0) return "magma"
        else return "earth"
    }
    else if (e.fire > 0) {
        if (e.water === 0 && e.earth > 0 && e.wind > 0) return "delta"
        else if (e.water > 0) return "frostfire"
        else if (e.wind > 0) return "lightning"
        else return "fire"
    }
    else if (e.water > 0) {
        if (e.fire === 0 && e.earth > 0 && e.wind > 0) return "delta"
        else if (e.wind > 0) return "ice"
        else return "water"
    }
    else if (e.wind > 0) {
        if (e.fire > 0 && e.water > 0 && e.earth === 0) return "delta"
        else return "wind"
    }
    else return "force"
}


let discoverName = spell => {
    let element = spell.element.filter(key => key !== "force")[0] || "force"
    if (spell.combine === true) {
        let e = {
            earth: 0,
            fire: 0,
            water: 0,
            wind: 0,
            force: 0,
        }
        for (let i of spell.element) e[i] += 1

        if (e.earth > 1 && e.fire > 1 && e.wind > 1 && e.water > 1) element = "prismatic"
        else element = combineElements(e)
    }

    let shape = shapes[spell.target[spell.target.length - 1]]
    return { element: element, shape: shape }
}
