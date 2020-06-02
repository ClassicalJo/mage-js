import { useDispatch } from "react-redux"
import { updateTile } from "../../redux/actions"
export let useBlockTiles = () => {
    let dispatch = useDispatch()
    let tiles = {
        block(...args) {
            args.forEach(key => dispatch(updateTile({ ...key, blocked: true })))
        },
        unblock(...args) {
            args.forEach(key => dispatch(updateTile({ ...key, blocked: false })))
        }
    }
    return tiles
}
