// rafce (react arrow function export)

import React from 'react'

const Pedido = (props) => {
  return (
    <div className="d-flex">
        <div className="d-flex align-items-center">
            <img src={props.imagem} height={200}/>
        </div>
        <div className="ms-2 flex-grow-1 border rounded p-2">
            <h4 className="text-center">{props.titulo}</h4>
            <p className="text-center">{props.descricao}</p>
        </div>
    </div>
  )
}

export default Pedido