import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { resizeScreen } from "../../redux/actions"

export let useResizeScreen = () => {
    let dispatch = useDispatch()
    let viewBox = useSelector(state => state.screen.viewBox)
    useEffect(() => {
        function handleResize() {
            dispatch(resizeScreen(getSize(viewBox)));
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [viewBox, dispatch])
}

function getSize(viewBox) {
    let height = window.innerHeight > window.innerWidth * 9 / 16 ? window.innerWidth * 9 / 16 : window.innerHeight
    let width = window.innerHeight > window.innerWidth * 9 / 16 ? window.innerWidth : window.innerHeight * 16 / 9
    let offset = (window.innerWidth - width) / 2
    return {
        height: height,
        width: width,
        offset: offset * (viewBox.width / width),
        windowOffset: (window.innerWidth - width) / -2 
    }
}
