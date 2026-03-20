import { useState } from 'react'
import Formulario from './Formulario'
import Card from './Card'
import Personagem from './Personagem'

function App() {
  const [nome, setNome] = useState('Personagem sem nome')
  const [classe, setClasse] = useState('-')
  const [nivel, setNivel] = useState(1)
  const [icone, setIcone] = useState('x')

  const icons = {
    '-': 'x',
    'Guerreiro': 'shield',
    'Mago': 'broom-ball',
    'Arqueiro': 'bullseye',
    'Curandeiro': 'hospital'
  }

  const obterClasse = (classeSelecionada) => {
    setClasse(classeSelecionada)
    setIcone(icons[classeSelecionada])
  }

  const incrementar = () => {
    const valor = nivel < 20 ? nivel + 1 : 20
    setNivel(valor)
  }

  const decrementar = () => {
    const valor = nivel > 1 ? nivel - 1 : 1
    setNivel(valor)
  }

  return (
    <div className='container border mt-4'>
      <h5 className='text-center'>Criador de personagem de RPG</h5>
      <Formulario
        setNome={setNome}
        nivel={nivel}
        setClasse={setClasse}
        incrementar={incrementar}
        decrementar={decrementar}
        obterClasse={obterClasse}
      />
      <Card cabecalho={icone}>
        <Personagem
          nome={nome}
          classe={classe}
          nivel={nivel}
        />
      </Card>
    </div>
  )
}

export default App
