/* eslint-disable no-unreachable */
import React from "react";
import './loja.css';
import Imagem1 from '../img/img_2.png';
import Imagem2 from '../img/img_3.png';
import Imagem3 from '../img/img_4.png';
import Imagem4 from '../img/img_5.png';
import Imagem5 from '../img/img_6.png';
import Imagem6 from '../img/img_7.png';
import Imagem7 from '../img/img_8.png';
import Imagem8 from '../img/img_9.png';
import Imagem9 from '../img/img_10.png';



function Loja() {
    
    return(
        <>
        <nav className="containerloja">
            <div className="divloja"> 
                <img src={Imagem1} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Camiseta Cinza</p>
                <p className="preco">R$ 28,00</p>
                <span className="parcelamento">até 2 de R$14,00</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja1"> 
                <img src={Imagem2} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja2"> 
                <img src={Imagem3} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja3"> 
                <img src={Imagem4} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja4"> 
                <img src={Imagem5} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja5"> 
                <img src={Imagem6} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja6"> 
                <img src={Imagem7} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja7"> 
                <img src={Imagem8} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>
            <div className="divloja8"> 
                <img src={Imagem9} alt="imagem1" className="imagemdiv"></img>
                <p className="roupa">Saia em couro</p>
                <p className="preco">R$ 398,00</p>
                <span className="parcelamento">até 10 de R$39,80</span>
                <button className="botaoloja">COMPRAR</button> 
            </div>

        </nav>
        </>
    )

    
}

export default Loja;