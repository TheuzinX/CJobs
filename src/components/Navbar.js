import React, { useState } from 'react';
import logoHeader from '../assets/images/logo-header (1).png'
import '../css/LandingPage.css'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className={`Navbar ${isMenuOpen ? 'menuOpen' : ''}`}>
                <img src={logoHeader} alt="logo header" className='logoHeader' />
                <nav>
                    <div className='mobileMenu' onClick={toggleMenu}>
                        <div className='line1'></div>
                        <div className='line1'></div>
                        <div className='line1'></div>
                    </div>
                    <ul className={`NavbarMenu ${isMenuOpen ? 'open' : ''}`}>
                        <li>Início</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                        <li>Entre</li>
                        <li>Cadastre-se</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;