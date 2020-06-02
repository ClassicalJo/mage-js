import { UI_SHOW } from "../actionTypes"

const initialState = {
    show: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UI_SHOW: return {
            ...state,
            show: action.payload
        }
        default: return state
    }
}
