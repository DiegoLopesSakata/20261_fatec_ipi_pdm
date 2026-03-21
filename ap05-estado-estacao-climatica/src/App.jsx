//rafce
// hook - funcoes especiais - todo hook é uma funcao, nem toda funcao é um hook
import React, { useEffect, useState } from 'react'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'

const App = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensagemDeErro] = useState(null)

  const obterEstacao = (dataAtual, latitude) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21) //inicio inverno/verao
    const d2 = new Date(ano, 8, 23) //inicio primavera/outono
    const d3 = new Date(ano, 11, 22) //inicio verao/inverno
    const d4 = new Date(ano, 2, 21) //inicio outono/primavera
    const sul = latitude < 0
    if(dataAtual >= d1 && dataAtual < d2)
      return sul ? 'Inverno' : 'Verao'
    if(dataAtual >= d2 && dataAtual < d3)
      return sul ? 'Primavera' : 'Outono'
    if(dataAtual >= d3 || dataAtual < d4)
      return sul ? 'Verao' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
  }

  const obterLocalizacao = () => {
    //consultar a localização do usuário, registrando uma função callback
    //na função callback
    //obter a estação climática do usuário
    //decidir qual é o ícone certo
    //atualizar as variáveis de estado

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = obterEstacao(dataAtual, position.coords.latitude)
        const icone = icones[estacao]
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setEstacao(estacao)
        setIcone(icone)
      }, 
      (err) => {
        console.log(err)
        setMensagemDeErro('Tente novamente mais tarde')
      }
    )

  }

  const icones = {
    'Outono': 'leaf',
    'Inverno': 'snowflake',
    'Verao': 'sun',
    'Primavera': 'seedling'
  }

  useEffect(() => {
    console.log('useEffect executou...')
    obterLocalizacao()
  }, [])
  console.log('renderizou...')

  return (
    <div className='container mt-2'>
      <div className="row justify-content-center">
        <div className='col-12'>
          {
            (!latitude && !mensagemDeErro) ?
              <Loading/> :
              mensagemDeErro ?
                mensagemDeErro
            :
            <EstacaoClimatica
              icone={icone}
              estacao={estacao}
              latitude={latitude}
              longitude={longitude}
              obterLocalizacao={obterLocalizacao}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default App