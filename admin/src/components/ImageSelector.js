import React from 'react'
import {string, func} from 'prop-types'

ImageSelector.propTypes = {
  imgUrl: string.isRequired,
  uploadHandler: func.isRequired
}

function ImageSelector ({imgUrl, uploadHandler}) {
  const upload = (e) => uploadHandler(e)
  return (
    <div id='uploadContainer'>
      <img alt='tekstura' className='image is-48x48 uploadImage' src={imgUrl || 'https://res.cloudinary.com/hszpzwoeq/image/upload/v1505080349/profili/o7blnzqtuexf0le1rdln.png'} />
      <input type='file' name='upload' id='fileUpolad' onChange={upload} />
    </div>
  )
}

export default ImageSelector
