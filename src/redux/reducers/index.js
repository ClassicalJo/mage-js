import { combineReducers } from "redux";
import screen from "./screen"
import mouse from "./mouse"
import world from "./world"
import UI from "./ui"

export default combineReducers({ screen, mouse, world, UI })
