import {
    BATTLE_SHOW,
    BATTLE_SPELL_TITLE_SHOW,
    BATTLE_SPELL_TITLE_SET,
    BATTLE_START_SHOW,
    BATTLE_MENU_SHOW,
    BATTLE_PHASE_FORCE_NEXT,
    BATTLE_RESULT_SET
} from "../actionTypes"

let initialState = {
    show: false,
    showStart: false,
    showTitle: false,
    title: "",
    showMenu: false,
    result: null,
    next: () => { },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case BATTLE_SHOW: return {
            ...state,
            show: action.payload
        }
        case BATTLE_START_SHOW: return {
            ...state,
            showStart: action.payload
        }
        case BATTLE_SPELL_TITLE_SHOW: return {
            ...state,
            showTitle: action.payload
        }
        case BATTLE_SPELL_TITLE_SET: return {
            ...state,
            title: action.payload
        }
        case BATTLE_MENU_SHOW: return {
            ...state,
            showMenu: action.payload
        }
        case BATTLE_PHASE_FORCE_NEXT: return {
            ...state,
            next: action.payload
        }
        case BATTLE_RESULT_SET: return {
            ...state,
            result: action.payload
        }
        default: return state
    }
}
