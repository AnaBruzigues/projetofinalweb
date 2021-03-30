import {Header} from '../../componentes'

export default function Login(){
    return(
        <>
            <Header />
            <header>
                <h1>Login</h1>
            </header>
            <div className="container">
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email"/><br/><br/>
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" id="senha" name="Senha"/><br/><br/>
                    <input type="submit" value="Entrar"/>
                </form>   
            </div>
        </>
    )
}