import React from 'react'

const Formulario = (props) => {

    return (
        <div className='container border my-2'>
            <p className='text'>Nome do Personagem</p>
            <input type="text" onChange={(e) => {props.setNome(e.target.value)}}/>
            <p className='text mt-2'>Classe</p>
            <select onChange={(e) => {props.obterClasse(e.target.value)}}>
            <option value="-">-</option>
            <option value="Guerreiro">Guerreiro</option>
            <option value="Mago">Mago</option>
            <option value="Arqueiro">Arqueiro</option>
            <option value="Curandeiro">Curandeiro</option>
            </select>
            <p className='text mt-2'>Nível</p>
            <div className='row mb-3'>
                <div className='col-2'>
                    <button className='bnt border rounded' style={{width:`100%`}} onClick={() => {props.decrementar()}}>
                        -
                    </button>
                </div>
                <div className='col-2'>
                    <div className='text-center border rounded'>
                        {props.nivel}
                    </div>
                </div>
                <div className='col-2'>
                    <button className='bnt border rounded' style={{width:`100%`}} onClick={() => {props.incrementar()}}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Formulario