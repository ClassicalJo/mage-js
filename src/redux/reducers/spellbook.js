import { SPELLBOOK_LENGTH_SET, SPELLBOOK_SHOW, SPELLBOOK_LOAD } from "../actionTypes"

const initialState = {
    show: false,
    length: 2,
    spells: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SPELLBOOK_SHOW: return {
            ...state,
            show: action.payload
        }
        case SPELLBOOK_LENGTH_SET: return {
            ...state,
            length: action.payload
        }
        case SPELLBOOK_LOAD: return {
            ...state,
            spells: action.payload
        }
        default: return state
    }
}
