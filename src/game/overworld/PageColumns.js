import React from 'react'
import Ow from "./index"
let PageColumns = props => {
    return (
        <g transform={`translate(${props.margin} ${props.margin})`}>
            {props.columns.map((content, index) =>
                <Ow.PageColumn
                    key={`Column${index}`}
                    column={index}
                    content={content}
                    fontSize={props.fontSize}
                />
            )}
        </g>
    )
}
export default PageColumns
