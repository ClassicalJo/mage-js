import React from 'react'
import { connect } from 'react-redux'


let Board = props => {
    let { height, width } = { ...props.viewBox }
    
    return (
        <g>
            <path
                fill="rgb(5,0,5)"
                opacity="1"
                filter="url(#shadow-blur)"
                d={`M 0 ${height / -2 + 100}L ${width / 2 - 50} 50 L 0 ${height / 2} L ${width / -2 + 50} 50 Z`}
            />
            <path
                // fill="white"
                fill="transparent"
                d={`M 0 ${height / -2 + 50}L ${width / 2 - 50} 0 L 0 ${height / 2 - 50} L ${width / -2 + 50} 0 Z`}
            />
        </g>
    )
}



function mapStateToProps(state) {
    return {
        viewBox: state.screen.viewBox
    }
}
export default connect(mapStateToProps)(Board)
