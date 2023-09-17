import React from 'react';
import '../css/LandingPage.css';
import LogoBanner from '../assets/images/LogoBanner.svg';

function Banner() {
    return (
        <div className='banner'>
        <div className='conteudo1'>
            <p className='paragrafo1'>
                Não deixe que suas
                candidaturas para vagas
                de emprego sejam
                uma bagunça.
            </p>
            <p className='paragrafo2'>
                Cadastre-se agora e comece a 
                organizar suas candidaturas com facilidade! 
            </p>
            <button className='BannerBtn'>Cadastre-se</button>
        </div>
        <img src={LogoBanner} alt="logo cjobs" className='LogoBanner'></img>
        </div>
    )
}

export default Banner;