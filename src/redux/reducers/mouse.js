import { MOUSE_SET } from "../actionTypes"

let initialState = {
    position: {
        x: 0,
        y: 0,
    }

}
export default function (state = initialState, action) {
    switch (action.type) {
        case MOUSE_SET: return {
            ...state,
            position: action.payload
        }
        default: return state
    }
}
