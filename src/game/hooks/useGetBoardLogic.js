import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { get4Centers } from "../../redux/reducers/world"
import { updateBoard } from '../../redux/actions'

export let useGetBoardLogic = () => {
    let dispatch = useDispatch()
    let viewBox = useSelector(state => state.screen.viewBox)
    useEffect(() => {
        let { height, width } = { ...viewBox }
        let centers = get4Centers(width - 100, height - 100, 0, 0, 3).flat()
        dispatch(updateBoard(centers))
    }, [viewBox])
}
