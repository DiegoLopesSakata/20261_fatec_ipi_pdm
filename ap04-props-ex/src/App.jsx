import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
import Frieren from "./Imagens-react/frieren.jpg"
import DragonBall from "./Imagens-react/dragon-ball.jpg"
import Nezuko from "./Imagens-react/nezuko.jpg"
import Totoro from "./Imagens-react/totoro.jpg"

const App = () => {
    const textoOK = "Aprovar"
    const textoNOK = "Não aprovar"
    const funcaoOK = () => alert("Comentário aprovado!")
    const funcaoNOK = () => alert("Comentário infringiu os termos de contuda!")
    const componenteFeedback = (
    <Feedback 
        textoOK={textoOK}
        textoNOK={textoNOK}
        funcaoOK={funcaoOK}
        funcaoNOK={funcaoNOK}
    />
    )
    
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                {/* i.fa.fa-hippo */}
                <div className="fa fa-hippo fa-2x p-3"></div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-12 col-lg-6 col-xxl-3"> 
                <Cartao cabecalho="22/04/2026">
                    <Pedido 
                        imagem = {Frieren}
                        titulo="Mary.Lockman69"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mauris metus. Cras vitae elementum ligula. Ut eget maximus purus. Nunc bibendum maximus est ac posuere. Suspendisse non felis nec purus imperdiet consequat. Duis sed ligula justo. Ut dolor nunc, cursus eget elit nec, fermentum luctus ipsum. Nunc malesuada nibh est, sit amet posuere turpis facilisis ut. Nulla ut arcu vehicula, posuere risus commodo, fermentum felis."
                    />
                    {componenteFeedback}
                </Cartao>
            </div>   
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="15/05/2026">
                    <Pedido
                        imagem = {Totoro}
                        titulo="Brock_Reichel18"
                        descricao="Integer fringilla, nunc vel faucibus sollicitudin, ante urna iaculis ligula, sed fringilla purus ligula eget odio. Suspendisse bibendum tempus nulla, vel tincidunt lectus vulputate et. Donec ornare est a nisl accumsan, ac semper quam pharetra. Sed maximus quis mauris a gravida. Integer congue ipsum ac placerat tempus. Mauris a venenatis magna. Suspendisse libero quam, imperdiet et ultrices in, blandit nec ipsum."
                    />
                    {componenteFeedback}
                </Cartao>
            </div>   
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="19/07/2026">
                    <Pedido
                        imagem = {Nezuko}
                        titulo="Nils_Steuber"
                        descricao="Fusce sed condimentum augue. Phasellus tristique volutpat justo in posuere. Praesent est lectus, bibendum eget tristique in, placerat non leo. Suspendisse dapibus magna sed lacus auctor efficitur. Donec nibh nisi, faucibus sit amet mi sed, varius facilisis turpis. Nulla non tincidunt justo, at aliquam velit. Morbi ullamcorper augue commodo sem dapibus, ut mollis nisi iaculis. Pellentesque efficitur vehicula convallis. Suspendisse pretium odio eu urna consequat, id ornare urna pellentesque. Maecenas quis odio consectetur, pellentesque velit eu, mattis sapien."
                    />
                    {componenteFeedback}
                </Cartao>
            </div>   
            <div className="col-sm-12 col-lg-6 col-xxl-3"> 
                <Cartao cabecalho="03/12/2025">
                    <Pedido 
                        imagem = {DragonBall}
                        titulo="Jhon.Winc67"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat, purus faucibus ultricies euismod, eros velit laoreet risus, condimentum sagittis magna tortor in nisl. Cras ultricies mattis metus, sed dictum erat auctor id. Suspendisse potenti. Nullam aliquam convallis convallis. Donec dapibus risus mattis, tempus lectus lobortis, molestie dui. Maecenas id faucibus lorem. Aliquam a imperdiet nisi. Etiam accumsan felis molestie augue suscipit, eget consequat elit aliquet. Nam elementum lacus eu congue auctor."
                    />
                    {componenteFeedback}
                </Cartao>            
            </div>
        </div>
    </div>
}

export default App