import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Tile from "./Tile"

let Grid = props => {
    useEffect(() => {
        document.querySelectorAll(".board-tiles-fall").forEach(key => key.beginElement())
    }, [])
    return (
        props.board.map((key, index) => (
            <Tile
                key={`tile${index}`}
                id={`square${index}`}
                tile={index}
                width={key.width}
                height={key.height}
                fill="green"
                opacity="0.5"
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
