import { useDispatch, useSelector } from 'react-redux'
import { showSpellbook } from "../../redux/actions"
import { useEffect } from 'react'

export let useCast = () => {
    let dispatch = useDispatch()
    let spellbook = useSelector(state => state.spellbook.show)
    function castingWindow() {
        dispatch(showSpellbook(!spellbook))
    }
    return castingWindow
}


