import { UPDATE_BODIES, UPDATE_BOARD, UPDATE_TILE } from "../actionTypes"

const initialState = {
    bodies: [],
    board: []
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
            board: {
                ...state.board,
                [action.payload.tile]: action.payload.payload
            }
        }
        default: return state
    }
}
