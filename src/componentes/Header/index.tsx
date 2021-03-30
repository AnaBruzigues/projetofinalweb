import logo from "assets/img/logo.png"

const Header = ()=> {
    return(<div className="fixed-top">
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="inicio" width="60" height="60"/>
                </a>
            </div>
            <div className="navbar">
                <ul id="nav-lists">
                    <li><a href="login">Login</a></li>
                    <li><a href="cadastro">Cadastro</a></li> 
                    <li><a href="perfil">Perfil</a></li>  
                </ul>
            </div>
        </div>)
}
export default Header;