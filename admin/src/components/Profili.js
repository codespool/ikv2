import React, { Component } from 'react'
import axios from 'axios'
import ProfilRowEdit from './ProfilRowEdit'
import ProfilRow from './ProfilRow'

class Profili extends Component {
  state = {
    modalActive: false,
    columnList: [
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
      'slika',
      'uredi',
      'obrisi'
    ],
    popisProfila: [],
    editIndex: null,
    deleteIndex: null
  }

  componentDidMount () {
    this.loadProfilData()
  }

  loadProfilData = () => {
    axios.get('/api/profili').then(res =>
      this.setState({
        popisProfila: res.data
      })
    )
  }

  handleConfirmDelete = () => {
    axios
      .delete(
        `/api/profili/${this.state.popisProfila[this.state.deleteIndex].id}`
      )
      .then(result => {
        this.loadProfilData()
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
    debugger
    this.setState({
      deleteIndex: index,
      modalActive: true
    })
  }

  handleEditClick = index => {
    this.setState({ editIndex: index })
  }

  handleCancelEdit = index => {
    let dataArray = this.state.popisProfila
    if (!this.state.popisProfila[index].id) {
      dataArray.splice(index, 1)
    }
    this.setState({
      editIndex: null,
      popisProfila: dataArray
    })
  }

  handleSaveChanges = (index, newEntry) => {
    let dataArray = this.state.popisProfila
    axios
      .get(`/api/profili/${this.state.popisProfila[index].id || newEntry.id}`)
      .then(response => {
        dataArray[index] = response.data
        this.setState({
          editIndex: null,
          popisProfila: dataArray
        })
      })
  }

  handleAddNewLine = () => {
    const emptyProfilData = [
      {
        donjiHorizProfil: '',
        donjiHorizUtor: '',
        gornjiHorizProfil: '',
        gornjiHorizUtor: '',
        minusVisina: 0,
        naziv: '',
        pregradniProfil: '',
        pregradniUtorDolje: '',
        pregradniUtorGore: '',
        sifra: '',
        sirina: 0,
        visinaDonjeVodilice: 0,
        visinaGornjeVodilice: 0,
        slika: '',
        uredi: '',
        obrisi: ''
      }
    ]
    this.setState({
      popisProfila: emptyProfilData.concat(this.state.popisProfila),
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
              Jeste li sigurni da želite obrisati profil?
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
                  'Naziv',
                  'Širina',
                  'Gornji horiz. profil',
                  'Gornji horiz. utor',
                  'Donji horiz. profil',
                  'Donji horiz. utor',
                  'H profil',
                  'H profil utor gore',
                  'H profil utor dolje',
                  'Minus visina',
                  'Visina gornje vodilice',
                  'Visina donje vodilice',
                  'Slika',
                  'Uredi',
                  'Obriši'
                ].map(column => <th key={column}>{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {this.state.popisProfila.map((profil, index) => {
                return index === this.state.editIndex
                  ? <ProfilRowEdit
                    key={index}
                    columnList={this.state.columnList}
                    index={index}
                    rowData={profil}
                    handleCancelEdit={this.handleCancelEdit}
                    handleSaveChanges={this.handleSaveChanges}
                    />
                  : <ProfilRow
                    key={index}
                    columnList={this.state.columnList}
                    index={index}
                    rowData={profil}
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

export default Profili
