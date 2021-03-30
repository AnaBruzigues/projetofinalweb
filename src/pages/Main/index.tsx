import { Header } from '../../componentes'
import img1 from "assets/img/img1.jpeg"
import img2 from "assets/img/img2.jpeg"

export default function Home() {
    return (
        <>
            <Header />
            <header>
                <h1>Local Jobs</h1>
                <h3> Bem vindo ao Local Jobs. Esse é um site dediado a te ajudar a procurar ou a oferecer algum tipo de serviço.
                Nós vamos te mostrar todos as pessoas dísponiveis pra te ajudar em sua região, e se você deseja oferecer um serviço,
                nós vamos te indicar!! Cadastre-se e torne sua vida mais prática!
        </h3>
            </header>
            <div className="grid-container">

                <div className="grid-item">
                    <img src={img1} className="imagem_menu" alt="inicio" width="80%"/>
                    <figcaption>Contrate sem sair de casa!</figcaption>
                </div>
                <div className="grid-item">
                    <img src={img2} className="imagem_menu" alt="inicio" width="60%" />
                    <figcaption>Garanta seus serviços sem grande esforço para divulgaçao!</figcaption>
                </div>
            </div>
        </>
    )
}