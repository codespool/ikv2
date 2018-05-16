import React from 'react'
import {array, object, func, number} from 'prop-types'

ProfilRow.propTypes = {
  columnList: array.isRequired,
  rowData: object.isRequired,
  handleEditClick: func.isRequired,
  handleDeleteClick: func.isRequired,
  index: number.isRequired
}

function ProfilRow ({
  columnList,
  rowData,
  handleEditClick,
  handleDeleteClick,
  index
}) {
  const editClick = () => handleEditClick(index)
  const deleteClick = () => handleDeleteClick(index)
  return (
    <tr>
      {columnList.map(column => {
        switch (column) {
          case 'slika':
            return (
              <td key={column}>
                <img alt='slika' className='image is-48x48' src={rowData[column]} />
              </td>
            )
          case 'uredi':
            return (
              <td key={column}>
                <p className='field'>
                  <a
                    className='button is-small'
                    onClick={editClick}
                  >
                    <span className='icon is-small'>
                      <i className='fa fa-pencil' />
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
                    className='button is-small'
                    onClick={deleteClick}
                  >
                    <span className='icon is-small'>
                      <i className='fa fa-trash-o' />
                    </span>
                  </a>
                </p>
              </td>
            )
          default:
            return <td key={column}>{rowData[column]}</td>
        }
      })}
    </tr>
  )
}

export default ProfilRow
