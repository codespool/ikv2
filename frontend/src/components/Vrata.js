import React, { Component } from 'react'
import {Rect} from 'react-konva'

class Vrata extends Component {
  state = {
    rootX: 0,
    rooty: 0,
    x: 50,
    y: 50,
    color: 'gray'
  }

  render () {
    return (
      <Rect
        draggable
        x={this.state.rootX}
        y={this.state.rootY}
        width={7}
        height={150}
        fill={this.state.color}
        stroke='black'
        strokeWidth='1'
        onClick={this.handleClick}
        dragBoundFunc={pos => {
          this.setState({ x: pos.x, y: 50 })
          return { x: pos.x, y: 50 }
        }}
      />
    )
  }
}

export default Vrata
