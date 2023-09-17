import React from "react";
import './navbar.css'

export function Navbar(){
    return(
        <navbar>
            <div class="logo">
                <a href="/"><img src="Logo.png" alt="Logo"></img></a>
            </div>
            <div class="menu_navbar">
                <ul>
                <li>
                    <a href="SobreNos">Sobre nós</a>
                </li>
                <li>
                    <a href="">Inscreva-se!</a>
                </li>
                <li>
                    <a href="/Apoie">Nos apoie!</a>
                </li>
                <button class="button_navbar">
                    <a href="">Sou aluno</a>
                </button>
            </ul>
            </div>
        </navbar>
    );
}