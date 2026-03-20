import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-header text-muted'>
            <div className='row justify-content-center'>
              <i className={`fa-solid fa-${props.cabecalho} fa-2x`}></i>
            </div>
        </div>
        <div className='card-body'>
            {props.children}
        </div>
    </div>
  )
}

export default Card