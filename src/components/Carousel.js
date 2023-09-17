import React from 'react';
import Slider from 'react-slick';
import Mission from '../assets/images/Frame Missão.svg';
import Vision from '../assets/images/Frame Visão.svg';
import Values from '../assets/images/Frame Valores.svg';
import AboutUs from '../assets/images/Sobre-nós.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/LandingPage.css'

const Carousel = () => {
  const settings = {
    dots: true, // Exibe os pontos de navegação
    infinite: true, // Loop infinito do carrossel
    speed: 500, // Velocidade da transição em milissegundos
    slidesToShow: 1, // Número de slides a serem exibidos de cada vez
    slidesToScroll: 1, // Número de slides a serem percorridos a cada clique de navegação
    initialSlide: 0,
  };

  return (
    <Slider className='Carousel' {...settings}>
      <div>
        <img className='cardCarousel' src={Mission} alt="missão da empresa" />
      </div>
      <div>
        <img className='cardCarousel' src={Vision} alt="visão da empresa" />
      </div>
      <div>
        <img className='cardCarousel' src={Values} alt="valores da empresa" />
      </div>
      <div>
        <img className='cardCarousel' src={AboutUs} alt="sobre nós da empresa" />
      </div>
    </Slider>
  );
};

export default Carousel;
