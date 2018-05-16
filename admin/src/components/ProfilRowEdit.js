import React, { Component } from 'react'
import ImageSelector from './ImageSelector'
import axios from 'axios'
import {object, func, number, array} from 'prop-types'

class ProfilRowEdit extends Component {

  state = {}

  static propTypes = {
    rowData: object.isRequired,
    handleSaveChanges: func.isRequired,
    index: number.isRequired,
    columnList: array.isRequired,
    handleCancelEdit: func.isRequired
  }

  handleSaveChanges = () => {
    const profilData = new FormData()
    const { rowData } = this.props
    const list = [
      'sifra',
      'naziv',
      'sirina',
      'gornjiHorizProfil',
      'gornjiHorizUtor',
      'donjiHorizProfil',
      'donjiHorizUtor',
      'pregradniProfil',
      'pregradniUtorGore',
      'pregradniUtorDolje',
      'minusVisina',
      'visinaGornjeVodilice',
      'visinaDonjeVodilice',
      'image'
    ]
    list.map(column =>
      profilData.append(
        column,
        this.state[column] || rowData[column]
      )
    )
    if (rowData.id) {
      axios
        .put(`/api/profili/${rowData.id}`, profilData)
        .then(response => {
          this.props.handleSaveChanges(this.props.index)
        })
    } else {
      axios.post(`/api/profili`, profilData).then(response => {
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

  handleFieldChange = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    const { columnList, rowData, handleCancelEdit, index } = this.props
    return (
      <tr>
        {columnList.map(column => {
          switch (column) {
            case 'slika':
              return (
                <td key={column}>
                  <ImageSelector
                    imgUrl={this.state.imagePreviewUrl || rowData[column]}
                    uploadHandler={this.uploadHandler}
                  />
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
                    name={column}
                    className='input is-small'
                    type='text'
                    placeholder='Text input'
                    value={this.state[column] || rowData[column]}
                    onChange={this.handleFieldChange}
                  />
                </td>
              )
          }
        })}
      </tr>
    )
  }
}

export default ProfilRowEdit
