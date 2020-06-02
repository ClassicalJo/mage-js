import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useEngine } from "./useEngine"
import { Engine } from 'matter-js'
import { updateBodies } from "../../redux/actions"

export const useAnimationFrame = () => {
    let engine = useEngine()
    let dispatch = useDispatch()
    const requestRef = useRef();
    let pause = useRef()
    pause.current = useSelector(state => state.screen.pause)
    useEffect(() => {
        function updateCycle() {
            Engine.update(engine)
            let bodies = [...engine.world.bodies]
            dispatch(updateBodies(bodies))
        }
        const animate = () => {
            if (!pause.current) updateCycle()
            requestRef.current = requestAnimationFrame(animate);
        }
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current)
        };
    }, [engine, dispatch]);
}
