import React, { Component } from 'react'
import ImageSelector from './ImageSelector'
import axios from 'axios'
import {object, func, number, array} from 'prop-types'

class MaterijalRowEdit extends Component {

  state = {}

  static propTypes = {
    rowData: object.isRequired,
    handleSaveChanges: func.isRequired,
    index: number.isRequired,
    columnList: array.isRequired,
    handleCancelEdit: func.isRequired
  }

  handleSaveChanges = () => {
    const materiajalData = new FormData()
    const { rowData } = this.props
    const list = [
      'sifra',
      'debljina',
      'debljinaBrtve',
      'naziv',
      'vrsta',
      'vrstaMaterijala',
      'image'
    ]
    list.map(column => {
      return materiajalData.append(
        column,
        this.state[column] || rowData[column]
      )
    })
    if (rowData.id) {
      axios
        .put(`/api/materijali/${rowData.id}`, materiajalData)
        .then(response => {
          this.props.handleSaveChanges(this.props.index)
        })
    } else {
      axios.post(`/api/materijali`, materiajalData).then(response => {
        this.props.handleSaveChanges(this.props.index, response.data)
      })
    }
  }

  uploadHandler = (e) => {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  render () {
    const { columnList, rowData, handleCancelEdit, index } = this.props
    return (
      <tr>
        {columnList.map(column => {
          debugger
          switch (column) {
            case 'tekstura':
              return (
                <td key={column}>
                  <ImageSelector
                    imgUrl={this.state.imagePreviewUrl || rowData[column]}
                    uploadHandler={this.uploadHandler}
                  />
                </td>
              )
            case 'vrsta':
              return (
                <td className='field' key={column}>
                  <div className='control'>
                    <div className='select is-small'>
                      <select
                        value={
                          this.state.vrsta || rowData[column].toLowerCase()
                        }
                        onChange={e => this.setState({ vrsta: e.target.value })}
                      >
                        <option>drvo</option>
                        <option>jednobojni</option>
                        <option>lacobel standard</option>
                        <option>lacobel ekskluziv</option>
                      </select>
                    </div>
                  </div>
                </td>
              )
            case 'vrstaMaterijala':
              return (
                <td className='field' key={column}>
                  <div className='control'>
                    <div className='select is-small'>
                      <select
                        value={
                          this.state.vrstaMaterijala ||
                            rowData[column].toLowerCase()
                        }
                        onChange={e =>
                          this.setState({ vrstaMaterijala: e.target.value })}
                      >
                        <option>iveral</option>
                        <option>staklo</option>
                      </select>
                    </div>
                  </div>
                </td>
              )
            case 'uredi':
              return (
                <td key={column}>
                  <p className='field'>
                    <a
                      className='button is-small is-primary is-outlined'
                      onClick={this.handleSaveChanges}
                    >
                      <span className='icon is-small'>
                        <i className='fa fa-check' />
                      </span>
                    </a>
                  </p>
                </td>
              )
            case 'obrisi':
              return (
                <td key={column}>
                  <p className='field'>
                    <a
                      className='button is-small is-danger is-outlined '
                      onClick={() => handleCancelEdit(index)}
                    >
                      <span className='icon is-small'>
                        <i className='fa fa-times' />
                      </span>
                    </a>
                  </p>
                </td>
              )
            default:
              return (
                <td key={column}>
                  <input
                    className='input is-small'
                    type='text'
                    placeholder='Text input'
                    value={this.state[column] || rowData[column]}
                    onChange={e => this.setState({ [column]: e.target.value })}
                  />
                </td>
              )
          }
        })}
      </tr>
    )
  }
}

export default MaterijalRowEdit
