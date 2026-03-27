import React from 'react'
import Busca from './Busca'
import { createClient } from 'pexels'

export default class App extends React.Component {

    pexelsClient = null

    componentDidMount(){
        this.pexelsClient = createClient('s57mYzFeQLxHFK3zZsJq8FAROdyOMwZuC0SDrK7Xt4OZCVSoX7Z8uZr5')
    }

    onBuscaRealizada = (termoDeBusca) => {
        console.log(termoDeBusca)
    }

    render() {
        return (
            <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
                <div className='col-12'>
                    <h1>Exibir imagens de...</h1>
                </div>
                <div className='col-12'>
                    <Busca
                        onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
            </div>
        )
    }   
}