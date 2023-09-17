import React from "react";
import './sobre_nos.css';


export function Sobre_Nos(){
    return(
        <section>
        <div class="container">
            <div class="canto_superior_container">
                <img src="canto1.png" alt="Logo"></img>
                <img id="canto_superior_direito" src="canto2.png" alt="Logo"></img>
            </div>
            <div class="canto_inferior_container">
                <img id="canto_inferior_esquerdo" src="canto4.png" alt="Logo"></img>
                <img id="canto_inferior_direito" src="canto3.png" alt="Logo"></img>
            </div>
        </div>
        </section>
    )
}