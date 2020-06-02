import { PLAYER_POSITION_SET, PLAYER_HP_SET, PLAYER_ANGLE_SET, PLAYER_MAXHP_SET, PLAYER_MOVED_SET } from "../actionTypes"

const initialState = {
    HP: 100,
    maxHP: 100,
    speed: 5,
    angle: 0,
    position: { x: 0, y: 0 },
    moved: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PLAYER_POSITION_SET: return {
            ...state,
            position: action.payload
        }
        case PLAYER_HP_SET: return {
            ...state,
            HP: action.payload
        }
        case PLAYER_ANGLE_SET: return {
            ...state,
            angle: action.payload,
        }
        case PLAYER_MAXHP_SET: return {
            ...state,
            maxHP: action.payload
        }
        case PLAYER_MOVED_SET: return {
            ...state,
            moved: action.payload
        }
        default: return state
    }
}
