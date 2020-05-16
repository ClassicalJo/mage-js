import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

export const useAnimationFrame = callback => {
    const requestRef = useRef();
    const pauseRef = useRef();
    pauseRef.current = useSelector(state => state.screen.pause)
    useEffect(() => {
        const animate = () => {
            if (!pauseRef.current) callback()
            requestRef.current = requestAnimationFrame(animate);
        }
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [callback]);
}
