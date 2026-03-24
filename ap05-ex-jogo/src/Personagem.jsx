import React from 'react'

const Personagem = (props) => {
  return (
    <div className='d-flex'>
        <div className="ms-2 flex-grow-1 border rounded p-2">
            <h4 className='text-center'>{props.nome}</h4>
            <p className='text-center'>{props.classe}</p>
            <h2 className='text-center'>{props.nivel}</h2>
            <div className="d-flex justify-content-center">
              <progress value={props.nivel} max={20}/>
            </div>
        </div>
    </div>
  )
}

export default Personagem