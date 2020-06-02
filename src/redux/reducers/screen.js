import { SHOW_SCREEN, RESIZE_SCREEN, PAUSE_SET } from "../actionTypes"
let height = window.innerHeight > window.innerWidth * 9 / 16 ? window.innerWidth * 9 / 16 : window.innerHeight
let width = window.innerHeight > window.innerWidth * 9 / 16 ? window.innerWidth : window.innerHeight * 16 / 9
let offset = (window.innerWidth - width) / 2

export let viewBox = {
    width: 2000,
    height: 1125,
}

let initialState = {
    current: "start",
    viewBox: viewBox,
    pause: false,
    svg: {
        height: height,
        width: width,
        offset: offset * viewBox.width / width,
        windowOffset: (window.innerWidth - width) / -2
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_SCREEN: return {
            ...state,
            current: action.payload
        }
        case RESIZE_SCREEN: return {
            ...state,
            svg: action.payload
        }
        case PAUSE_SET: return {
            ...state,
            pause: action.payload
        }
        default: return state
    }
}
