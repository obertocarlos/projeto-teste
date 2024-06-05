import React from "react";
import imgLogo from "../../img/corinthians.png";
import imgLogin from "../../img/iconeLogin.png";
import './style.css';
function Cabecalho() {
    return (
        <header id="cabecalho" >

            <div id="logo">
                <img id="imgLogo" src={imgLogo} />
                <h4>  </h4>
            </div>
            <ul id="lista" >
                <li>Home</li>
                <li>Produto</li>
                <li>Cadastrar Produto</li>
            </ul>

            <div id="icones" >
                <img id="imgPesquisa" />
                <img id="imgLogin" src={imgLogin} />
            </div>


        </header>
    );

}
export default Cabecalho;