import {Header} from '../../componentes'

export default function Perfil(){
    return(
        <>
            <Header/>
            <header>
                <h1>Seu perfil</h1>
            </header>
            <div className="cad">
                <form>
                    <div id="pess"><img alt="icone pessoa" src="/icone-pessoa-png-4.png" id="pessoa" width="60px" height="60px"/></div><br/>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" placeholder=" João"/><br/><br/>
                    <label htmlFor="sobrenome">Sobrenome: </label>
                    <input type="text" id="sobrenome" name="sobrenome" placeholder=" Vilela"/><br/><br/>
                    <label htmlFor="profissao">Profissão: </label>
                    <input type="text" id="profissao" name="profissao" placeholder=" Encanador"/><br/><br/>
                    <label htmlFor="nascimento">Data de nascimento: </label>
                    <input type="date" id="nascimento" name=" nascimento"/><br/><br/>
                    <label htmlFor="cidade">Cidade: </label>
                    <input type="text" id="cidade" name="cidade" placeholder=" Varginha"/><br/><br/>
                    <label htmlFor="contato">E-mail: </label>
                    <input type="email" id="contato" name="contato" placeholder=" joaoencanador@gmail.com"/><br/><br/>
                    <label htmlFor="descricao">Descreva seu trabalho:</label>
                    <textarea id="descricao" name="descricao"></textarea>  
                </form> 
            </div>
        </>
    )
}