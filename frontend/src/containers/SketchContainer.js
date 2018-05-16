import React, { Component } from 'react'
import { Layer, Stage } from 'react-konva'
import Vrata from '../components/Vrata'

export default class SketchContainer extends Component {
  state = {
    color: 'gray'
  }

  handleClick = () => {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor()
    })
  }
  render () {
    return (
      <Stage width={900} height={600}>
        <Layer>
          <Vrata vrataData={this.props.vrata} defaults={this.props.defaults} />
        </Layer>
      </Stage>
    )
  }
}
