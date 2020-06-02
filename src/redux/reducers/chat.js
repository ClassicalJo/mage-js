import { CHAT_SHOW, CHAT_MESSAGES_SET } from '../actionTypes'

let initialState = {
    show: false,
    messages: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHAT_SHOW: return {
            ...state,
            show: action.payload
        }
        case CHAT_MESSAGES_SET: return {
            ...state,
            messages: [...state.messages, action.payload].slice(Math.max(state.messages.length - 3, 0))
        }
        default: return state
    }
}
