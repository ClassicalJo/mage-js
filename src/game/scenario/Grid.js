import React from 'react'
import { connect } from 'react-redux'
import Tile from "./Tile"

let Grid = props => {
    return (
        props.board.map((key, index) => (
            <Tile
                key={`tile${index}`}
                id={`square${index}`}
                width={key.width}
                height={key.height}
                fill={key.y % 128.125 === 0 ? "black" : "orange"}
                x={key.x}
                y={key.y}
            />)))
}

function mapStateToProps(state) {
    return {
        viewBox: state.screen.viewBox,
        board: state.world.board
    }
}

export default connect(mapStateToProps)(Grid)
