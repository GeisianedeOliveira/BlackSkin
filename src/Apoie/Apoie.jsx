import React from "react";
import './Apoie.css'

export function Apoie (){
    return (
        <section>
        <div class="container">
            <div class="canto_superior_container">
                <img src="canto1.png" alt="Logo"></img>
                <img id="canto_superior_direito" src="canto2.png" alt="Logo"></img>
            </div>
            <div class="box_container">
                <h1>Campanha Black Skin - Community School</h1>
                <p>A sua contribuição nos mantém funcionando!</p>
                <p class="textao">
                        A Black Skin - Comunnity School, uma escola negra de inglês, feita por negros e para negros.
                        Estamos chegando para ajudar a fortalecer a união e a unidade do povo preto, buscando derrubar todas as barreiras que a falta de
                        acesso ao inglês nos impõe. Buscamos promover a experiência educacional de uma escola-comunidade, gratuita para os alunos e boa de
                        trabalhar para os professores, focada no ensino da língua inglesa, mas sem secundarizar as temáticas históricas e atuais
                        que atravessam a vida e a cultura da negritude.
                    <br></br>
                    <br></br>
                        Você pode nos apoiar se você se identifica com esta proposta. Esperamos poder financiar o trabalho de todo o nosso
                        corpo docente, e a sua ajuda pode tornar isso possível. Fortalecer este projeto para que ele atinja a muitas mais pessoas.
                </p>
                <p class="pix_celular"> Chave pix (celular): (15) 988019372 </p>
                <p class="pix_e-mail">Chave pix (e-mail): blackskinschool@gmail.com</p>
            </div>
            <div class="canto_inferior_container">
                <img id="canto_inferior_esquerdo" src="canto4.png" alt="Logo"></img>
                <img id="canto_inferior_direito" src="canto3.png" alt="Logo"></img>
            </div>
        </div>
        </section>
    );
}