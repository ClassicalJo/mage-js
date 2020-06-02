import { combineReducers } from "redux";
import screen from "./screen"
import mouse from "./mouse"
import world from "./world"
import UI from "./ui"
import spellbook from "./spellbook"
import player from "./player"
import battle from "./battle"
import move from "./move"
import chat from "./chat"
export default combineReducers({ screen, mouse, world, UI, spellbook, player, battle, move, chat })
