import Ow from "./index"
import React from "react"
import { useSelector } from 'react-redux'

let Page = props => {
    let viewBox = useSelector(state => state.screen.viewBox)
    let width = (viewBox.width - 200) / 2
    let fontSize = 50
    let margin = 100
    let height = viewBox.height - margin * 2
    let text = props.text.map(key => divideString(key, Math.floor(width / fontSize))).flat()
    let columns = divideColumn(fontSize, text, height)
    return (
        <g>
            {props.title && <Ow.PageTitle title={props.title} />}
            {props.text && <Ow.PageColumns columns={columns} margin={margin} fontSize={fontSize} />}
        </g>
    )
}


export default Page

let divideString = (string, n) => {
    let array = string.split(" ")
    let response = []
    for (let i = 0; i < array.length; i++) {
        let line = array[i]
        while (line.length < n) {
            i++
            let addWord = array[i] === undefined ? "" : array[i]
            line = line + " " + addWord
        }
        response.push(line)
    }
    return response
}

let divideColumn = (fontSize, arr, maxHeight) => {
    let maxLength = Math.floor(maxHeight / (fontSize * 1.5) - 1)
    let result = [arr.slice(0, maxLength), arr.slice(maxLength)]
    return result

}
