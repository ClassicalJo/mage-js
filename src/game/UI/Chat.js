import React, {useEffect} from 'react'
import { useSelector } from "react-redux"

let Chat = () => {
    let messages = useSelector(state => state.chat.messages)
    let viewBox = useSelector(state => state.screen.viewBox)
    let fontSize = 20
    useEffect(() => {
        document.querySelector("#hideChatWindow").beginElement()
    }, [messages])
    
    return (
        <g>  
            <animate id="hideChatWindow" attributeName="opacity" to="0" keyTimes="0;0.75;1" values="1;1;0" begin="indefinite" fill="freeze" dur="4s"/>
            <animate id="showChatWindow" attributeName="opacity" to="1" begin="indefinite" fill="freeze" dur="0.1s" calcMode="discrete"/>
            <rect
                x={viewBox.width / -2}
                width={viewBox.width / 3.33}
                y={viewBox.height / 3.33}
                height={viewBox.height / 4}
                fill="black"
                opacity="0.3"
                onMouseOver={() => document.querySelector("#showChatWindow").beginElement()}
                onMouseLeave={() => document.querySelector("#hideChatWindow").beginElement()}/>
            {messages.map((key, index) => (
                <text
                    key={`message${index}`}
                    x={viewBox.width / -2 + fontSize}
                    y={(viewBox.height / 2) - (fontSize * 1.5 * (messages.length - index))}
                    alignmentBaseline="middle"
                    fill="white"
                    fontFamily="Arial Black"
                    fontSize={fontSize}
                    pointerEvents="none" >
                    {key}
                </text>
            ))}
        </g>
    )
}

export default Chat
