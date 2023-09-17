import React from 'react';
import '../css/LandingPage.css'
import engrenagem from '../assets/images/engineering 1.png'
import checklist from '../assets/images/check-list 1.png'
import mirror from '../assets/images/self-confrontation 1.png'

function Benefits() {
    return (
        <div className='benefits'>
            <h1 className='benefitsH1'>
                Facilite o complexo processo de busca pela
                vaga dos seus sonhos
            </h1>

            <ul>
                <li className='benefitsCard'>
                    <ul>
                        <li>
                            <img src={engrenagem} alt="icone de engrenagem" className='benefitsImages'></img>
                        </li>
                        <li>
                            <h2 className='benefitsH2'>Eficiência</h2>
                        </li>
                        <li>
                            <p className='benefitsP'>
                                Permite uma abordagem estruturada, identificação de
                                estratégias eficazes e melhoria contínua, tornando-o
                                mais eficiente e  aumentando as chances de
                                sucesso na busca por emprego.
                            </p>
                        </li> 
                    </ul>
                </li>
                <li className='benefitsCard'>
                    <ul>
                        <li>
                            <img src={checklist} alt="icone de checklist" className='benefitsImages'></img>
                        </li>
                        <li>
                            <h2 className='benefitsH2'>Organização</h2>
                        </li>
                        <li>
                            <p className='benefitsP'>
                                Evita duplicação,  cumpre prazos e acompanha 
                                o status, tornando o processo mais eficiente
                                e economizando tempo.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className='benefitsCard'>
                    <ul>
                        <li>
                            <img src={mirror} alt="icone de espelho" className='benefitsImages'></img>
                        </li>
                        <li>
                            <h2 className='benefitsH2'>Autoavaliação</h2>
                        </li>
                        <li>
                            <p className='benefitsP'>
                            Possibilita autoavaliação precisa, identificação
                            de tendências e ajustes na busca por emprego.
                            Melhora contínua da estratégia 
                            com base em dados.
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default Benefits;