import React from 'react';
import '../css/LandingPage.css';
import logoFooter from '../assets/images/logoFooter.svg';
import Linkedin from '../assets/images/Linkedin Logo.png';
import Instagram from '../assets/images/Instagram Logo.png';
import Whatsapp from '../assets/images/WhatsApp Logo.png';
import Telefone from '../assets/images/Icone Telefone.svg';
import Email from '../assets/images/Icone E-mail.svg';
import Localization from '../assets/images/Icone localização.svg';


function Footer() {
    return (
        <footer>
            <ul className='footerComponents'>
                <li>
                    <ul className='footerSection1'>
                        <li>
                            <img alt='logo do footer' src={logoFooter}></img>
                        </li>
                        <li>
                            <p>
                                Não deixe que suas candidaturas para vagas de emprego sejam
                                uma bagunça.
                            </p>
                        </li>
                        <li>
                            <ul>
                                <li className='socialIcons'>
                                    <img alt='linkedin' src={Linkedin}></img>
                                    <img alt='instagram' src={Instagram}></img>
                                    <img alt='whatsapp' src={Whatsapp}></img>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='footerSection2'>
                        <h3>Links Úteis</h3>
                        <li>Início</li>
                        <li>Contato</li>
                        <li>Sobre nós</li>
                        <li>Entre</li>
                    </ul>
                </li>
                <li>
                    <ul className='footerSection3'>
                        <h3>Contatos</h3>
                        <li>
                            <img alt='icone de telefone' src={Telefone}></img>
                            <p>(55) 11 9 1111-1111</p>
                        </li>
                        <li>
                            <img alt='icone de E-mail' src={Email}></img>
                            <p>contato@conectajobs@gmail.com</p>
                        </li>
                        <li>
                            <img alt='icone de Endereço' src={Localization}></img>
                            <p>Av. Antônia Rosa Fioravanti, 804 - Centro, Mauá - SP, 09390-120</p>
                        </li>
                    </ul>
                </li>
            </ul>
                <div>
                    <p className='footer-end'>
                        Todos os direitos reservados © Conecta Jobs, 2023. CNPJ: XX.XXX.XXX/XXXX-XX
                    </p>
                </div>
        </footer>
    )
};

export default Footer;