import '../src/css/LandingPage.css';
import Navbar from '../src/components/Navbar.js';
import Banner from '../src/components/Banner.js';
import Benefits from '../src/components/Benefits.js';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Benefits></Benefits>
    </div>
  );
}

export default App;
