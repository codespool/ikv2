import React, { Component } from 'react'
import axios from 'axios'
import MaterijalRow from './MaterijalRow'
import MaterijalRowEdit from './MaterijalRowEdit'

class Materijali extends Component {
  state = {
    modalActive: false,
    columnList: [
      'sifra',
      'debljina',
      'debljinaBrtve',
      'naziv',
      'tekstura',
      'vrsta',
      'vrstaMaterijala',
      'uredi',
      'obrisi'
    ],
    popisMaterijala: [],
    editIndex: null,
    deleteIndex: null
  }

  componentDidMount () {
    this.loadMaterijalData()
  }

  loadMaterijalData = () => {
    axios.get('/api/materijali').then(res =>
      this.setState({
        popisMaterijala: res.data
      })
    )
  }

  handleConfirmDelete = () => {
    axios
      .delete(
        `/api/materijali/${this.state.popisMaterijala[this.state.deleteIndex].id}`
      )
      .then(result => {
        this.loadMaterijalData()
      })
    this.setState({
      modalActive: false,
      deleteIndex: null
    })
  }

  handleCancelDelete = () => {
    this.setState({
      deleteIndex: null,
      modalActive: false
    })
  }

  handleDeleteClick = index => {
    this.setState({
      deleteIndex: index,
      modalActive: true
    })
  }

  handleEditClick = index => {
    this.setState({ editIndex: index })
  }

  handleCancelEdit = index => {
    let dataArray = this.state.popisMaterijala
    if (!this.state.popisMaterijala[index].id) {
      dataArray.splice(index, 1)
    }
    this.setState({
      editIndex: null,
      popisMaterijala: dataArray
    })
  }

  handleSaveChanges = (index, newEntry) => {
    let dataArray = this.state.popisMaterijala
    axios
      .get(
        `/api/materijali/${this.state.popisMaterijala[index].id || newEntry.id}`
      )
      .then(response => {
        dataArray[index] = response.data
        this.setState({
          editIndex: null,
          popisMaterijala: dataArray
        })
      })
  }

  handleAddNewLine = () => {
    const emptyMaterijalData = [
      {
        sifra: '',
        debljina: null,
        debljinaBrtve: null,
        naziv: '',
        tekstura: '',
        vrsta: 'drvo',
        vrstaMaterijala: 'iveral',
        uredi: '',
        obrisi: ''
      }
    ]
    this.setState({
      popisMaterijala: emptyMaterijalData.concat(this.state.popisMaterijala),
      editIndex: 0
    })
  }

  renderModal = () => {
    return (
      <div className={`modal ${this.state.modalActive ? 'is-active' : null}`}>

        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title is-danger'>Pažnja!</p>
            <button className='delete' onClick={this.handleCancelDelete} />
          </header>
          <section className='modal-card-body'>
            <div className='content'>
              Jeste li sigurni da želite obrisati materijal?
            </div>
          </section>
          <footer className='modal-card-foot'>
            <a className='button is-danger' onClick={this.handleConfirmDelete}>
              Potvrdi
            </a>
            <a className='button' onClick={this.handleCancelDelete}>
              Odustani
            </a>
          </footer>
        </div>

      </div>
    )
  }
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <a
            className='button is-pulled-right is-info size-5'
            onClick={this.handleAddNewLine}
          >
            <i className='fa fa-plus' />
          </a>

          <br />
          <hr />
        </div>
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                {[
                  'Šifra',
                  'Debljina',
                  'Debljina Brtve',
                  'Naziv',
                  'Tekstura',
                  'Tip',
                  'Vrsta Materijala',
                  'Uredi',
                  'Obriši'
                ].map(column => <th key={column}>{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {this.state.popisMaterijala.map((materijal, index) => {
                return index === this.state.editIndex
                  ? <MaterijalRowEdit
                    key={index}
                    columnList={this.state.columnList}
                    index={index}
                    rowData={materijal}
                    handleCancelEdit={this.handleCancelEdit}
                    handleSaveChanges={this.handleSaveChanges}
                    />
                  : <MaterijalRow
                    key={index}
                    columnList={this.state.columnList}
                    index={index}
                    rowData={materijal}
                    handleEditClick={this.handleEditClick}
                    handleDeleteClick={this.handleDeleteClick}
                    />
              })}
            </tbody>
          </table>
        </div>
        {this.renderModal()}
      </section>
    )
  }
}

export default Materijali
