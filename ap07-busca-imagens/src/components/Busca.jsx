import React, { Component } from 'react'
import { IconField } from 'primereact/IconField'
import { InputIcon } from 'primereact/InputIcon'
import { InputText } from 'primereact/InputText'
import { Button } from 'primereact/button';

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (evento) => {
        this.setState({termoDeBusca: evento.target.value})
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        //chamar a função que chegou via props, passando o valor da variável de estado como parâmetro. Dica: qualifique o props com this.
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search"> </InputIcon>
                        <InputText
                            value={this.state.termoDeBusca}
                            className='w-full' 
                            placeholder="O que deseja ver?" 
                            onChange={this.onTermoAlterado}/>
                    </IconField>
                    <Button 
                        label="OK" 
                        icon="pi pi-check" 
                        className='p-button-outline mt-2'/>
                </div>
            </form>
        )
    }
}