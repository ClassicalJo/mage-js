import { UPDATE_BODIES, UPDATE_BOARD, UPDATE_TILE, UPDATE_PAGE, SCENARIO_SHOW, START_BUTTON_SHOW, FIGHT_ENTRY_UPDATE } from "../actionTypes"
import { viewBox } from "./screen"
import Pages from "../../game/overworld/History"

let fights = {}
for (let i = 0; i < Pages.length; i++) { fights[i] = Pages[i].fight }

const initialState = {
    bodies: [],
    board: generateBoard(viewBox.width, viewBox.height),
    showScenario: false,
    showStartButton: true,
    currentPage: 0,
    fights,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_BODIES: return {
            ...state,
            bodies: action.payload
        }
        case UPDATE_BOARD: return {
            ...state,
            board: action.payload
        }
        case UPDATE_TILE: return {
            ...state,
            board: [...state.board.slice(0, action.payload.tile), action.payload, ...state.board.slice(action.payload.tile + 1)]
        }
        case UPDATE_PAGE: return {
            ...state,
            currentPage: action.payload
        }
        case SCENARIO_SHOW: return {
            ...state,
            showScenario: action.payload
        }
        case START_BUTTON_SHOW: return {
            ...state,
            showStartButton: action.payload
        }
        case FIGHT_ENTRY_UPDATE: return {
            ...state,
            fights: {
                ...state.fights,
                [action.payload]: false
            }
        }
        default: return state
    }
}

function get4Centers(width, height, x, y, times) {
    let results = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }]
    for (let i in results) {
        let result = {
            width: width / 2,
            height: height / 2,
            x: x + width / 4 * results[i].x,
            y: y + height / 4 * results[i].y,
            blocked: false,
        }
        results[i] = result
    }
    let remainingTimes = times - 1
    if (remainingTimes > 0) results.map((key, index) => results[index] = get4Centers(key.width, key.height, key.x, key.y, remainingTimes).flat())

    return results
}

function sortByHeight(a, b) {
    let result = a.y - b.y
    if (a.y - b.y === 0) return a.x - b.x
    else return result
}

function connectTiles(board) {
    for (let tile in board) {
        let connections = {
            top: { x: board[tile].x, y: board[tile].y - board[tile].height },
            topleft: { x: board[tile].x - board[tile].width / 2, y: board[tile].y - board[tile].height / 2 },
            topright: { x: board[tile].x + board[tile].width / 2, y: board[tile].y - board[tile].height / 2 },
            left: { x: board[tile].x - board[tile].width, y: board[tile].y },
            right: { x: board[tile].x + board[tile].width, y: board[tile].y },
            botleft: { x: board[tile].x - board[tile].width / 2, y: board[tile].y + board[tile].height / 2 },
            botright: { x: board[tile].x + board[tile].width / 2, y: board[tile].y + board[tile].height / 2 },
            bot: { x: board[tile].x, y: board[tile].y + board[tile].height },
        }
        board[tile]["connections"] = connections
    }
    return board
}

export function generateBoard(width, height) {
    let results = get4Centers(width - 100, height - 100, 0, 0, 3).flat()
    results = results.sort((a, b) => sortByHeight(a, b))
    results.forEach((key, index) => key.tile = index)
    connectTiles(results)
    return results
}
