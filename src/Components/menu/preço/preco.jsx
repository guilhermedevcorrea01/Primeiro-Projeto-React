import React from "react";
import './preco.css';

function Preco(){
    return(
        <>
        <div className="containerpreco">
        <h1 className="precotitle">Faixa de preço</h1>
        <label>
                <input type="checkbox" className="precoin"></input>de R$0 até R$50,00</label>
                <br></br><label >
                <input type="checkbox" className="precoin"></input>de R$51,00 até R$100,00</label>
                <br></br><label>
                <input type="checkbox" className="precoin"></input>de R$101,00 até R$150,00</label>
                <br></br><label>
                <input type="checkbox" className="precoin"></input>de R$151,00 até R$200,00</label>
                <br></br>
                </div>  
        </>
        
    )
}

export default Preco;