import './header.css';
import Logo from '../img/logo-m3.png';


function Header() {
    return(
        <header className="header">
            <img src={Logo} alt="Erro ao carregar arquivo" className="imgheader"></img>
        </header>
    )
}

export default Header;