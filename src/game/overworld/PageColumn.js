import React from 'react'
import { useSelector } from 'react-redux'
import Ow from "./index"
let PageColumn = props => {
    let viewBox = useSelector(state => state.screen.viewBox)
    return props.content.map((key, index) => (
        <Ow.PageLine
            key={`PageLine${index}`}
            width={viewBox.width}
            height={viewBox.height}
            fontSize={props.fontSize}
            column={props.column}
            content={key}
            line={index}
        />
    ))
}
export default PageColumn
