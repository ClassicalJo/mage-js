import {
    SHOW_SCREEN,
    RESIZE_SCREEN,
    MOUSE_SET,
    PAUSE_SET,
    UPDATE_BODIES,
    UI_SHOW,
    UPDATE_BOARD,
    UPDATE_TILE,
    UPDATE_PAGE,
    SPELLBOOK_SHOW,
    SPELLBOOK_LENGTH_SET,
    SPELLBOOK_LOAD,
    BATTLE_SHOW,
    BATTLE_SPELL_TITLE_SHOW,
    BATTLE_START_SHOW,
    BATTLE_SPELL_TITLE_SET,
    BATTLE_PHASE_FORCE_NEXT,
    BATTLE_MENU_SHOW,
    PLAYER_POSITION_SET,
    PLAYER_HP_SET,
    PLAYER_ANGLE_SET,
    PLAYER_MAXHP_SET,
    PLAYER_MOVED_SET,
    MOVE_SHOW,
    CHAT_SHOW,
    CHAT_MESSAGES_SET,
    BATTLE_RESULT_SET,
    SCENARIO_SHOW,
    START_BUTTON_SHOW,
    FIGHT_ENTRY_UPDATE,
    
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
    return ({
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

export const showSpellbook = boolean => {
    return ({
        type: SPELLBOOK_SHOW,
        payload: boolean,
    })
}
export const setSpellbookLength = int => {
    return ({
        type: SPELLBOOK_LENGTH_SET,
        payload: int,
    })
}
export const loadSpellbook = spells => {
    return ({
        type: SPELLBOOK_LOAD,
        payload: spells
    })
}

export const showBattle = boolean => {
    return ({
        type: BATTLE_SHOW,
        payload: boolean
    })
}
export const showBattleTitle = bool => {
    return ({
        type: BATTLE_SPELL_TITLE_SHOW,
        payload: bool
    })
}

export const setBattleTitle = title => {
    return ({
        type: BATTLE_SPELL_TITLE_SET,
        payload: title
    })
}

export const showBattleStart = boolean => {
    return ({
        type: BATTLE_START_SHOW,
        payload: boolean
    })
}

export const showBattleMenu = boolean => {
    return ({
        type: BATTLE_MENU_SHOW,
        payload: boolean
    })
}
export const battlePhaseForceNext = fn => {
    return ({
        type: BATTLE_PHASE_FORCE_NEXT,
        payload: fn
    })
}

export const setBattleResult = string => {
    return ({
        type: BATTLE_RESULT_SET,
        payload: string
    })
}
export const setPlayerHP = int => {
    return ({
        type: PLAYER_HP_SET,
        payload: int
    })
}

export const setPlayerMaxHP = int => {
    return ({
        type: PLAYER_MAXHP_SET,
        payload: int
    })
}
export const setPlayerAngle = int => {
    return ({
        type: PLAYER_ANGLE_SET,
        payload: int
    })
}
export const setPlayerPosition = vector => {
    return ({
        type: PLAYER_POSITION_SET,
        payload: vector
    })
}

export const setPlayerMoved = bool => {
    return ({
        type: PLAYER_MOVED_SET,
        payload: bool
    })
}
export const showMove = bool => {
    return ({
        type: MOVE_SHOW,
        payload: bool
    })
}

export const showChat = bool => {
    return ({
        type: CHAT_SHOW,
        payload: bool
    })
}

export const setChatMessages = messages => {
    return ({
        type: CHAT_MESSAGES_SET,
        payload: messages
    })
}

export const showScenario = bool => {
    return ({
        type: SCENARIO_SHOW,
        payload: bool
    })
}

export const showStartButton = bool => {
    return ({
        type: START_BUTTON_SHOW,
        payload: bool
    })
}

export const updateFight = n => {
    return ({
        type: FIGHT_ENTRY_UPDATE,
        payload: n
    })
}
export const updatePage = n => {
    return ({
        type: UPDATE_PAGE,
        payload: n
    })
}
