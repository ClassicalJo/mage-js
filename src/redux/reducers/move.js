import { MOVE_SHOW } from "../actionTypes"

const initialState = {
    show: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MOVE_SHOW: return {
            ...state,
            show: action.payload
        }

        default: return state
    }
}
