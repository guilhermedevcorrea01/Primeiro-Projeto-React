import './App.css';
import Header from './Components/header/header';
import Cores from './Components/menu/cores/cores';
import Tamanho from './Components/menu/tamanho/tamanho';
import Preco from './Components/menu/preço/preco';
import Loja from './Components/lojinha/loja';
import Lista from './Components/nav/nav';


function App() {
  return (
  <div className='container'>
   < Header />
   <Lista />
   <Cores/>
   <Tamanho />
   <Preco />
   <Loja />
   </div>
  );
}

export default App;
