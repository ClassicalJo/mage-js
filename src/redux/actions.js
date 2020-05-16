import {
    SHOW_SCREEN,
    RESIZE_SCREEN,
    MOUSE_SET,
    PAUSE_SET,
    UPDATE_BODIES,
    UI_SHOW,
    UPDATE_BOARD,
    UPDATE_TILE,
} from "./actionTypes"

export const showScreen = screen => {
    return ({
        type: SHOW_SCREEN,
        payload: screen
    })
}

export const resizeScreen = data => {
    return ({
        type: RESIZE_SCREEN,
        payload: data
    })
}

export const mouseSet = data => {
    return ({
        type: MOUSE_SET,
        payload: data,
    })
}

export const updateBodies = bodies => {
    return ({
        type: UPDATE_BODIES,
        payload: bodies
    })
}

export const updateBoard = board => {
    return ({
        type: UPDATE_BOARD,
        payload: board
    })
}

export const updateTile = tile => {
    return({
        type: UPDATE_TILE,
        payload: tile
    })
}

export const showUI = boolean => {
    return ({
        type: UI_SHOW,
        payload: boolean
    })
}

export const setPause = boolean => {
    return ({
        type: PAUSE_SET,
        payload: boolean
    })
}
