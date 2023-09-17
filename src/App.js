import '../src/css/LandingPage.css';
import Navbar from '../src/components/Navbar.js';
import Banner from '../src/components/Banner.js';
import Benefits from '../src/components/Benefits.js';
import Carousel from '../src/components/Carousel.js';
import Footer from '../src/components/Footer.js';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Benefits></Benefits>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
