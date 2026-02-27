import './styles.css'

const App = () => {

  const estiloBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', width: '100%', border: 'none', borderRadius: 8}

  const textoDoRotulo = 'Nome'

  const obterTextoDoBotao = () => {
    return "Enviar"
  }

  const aoClicar = () => alert('clicou')

  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label className="rotulo" htmlFor="campoNome" style={{display: 'block', marginBottom: 4}}>
        {textoDoRotulo}
      </label>
      <input id="campoNome" type="text" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}></input>
      <button
        onClick={() => aoClicar()}
        style={estiloBotao}>
        {obterTextoDoBotao()}
      </button>
    </div>
  )
}

export default App