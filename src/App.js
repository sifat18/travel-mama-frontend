import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
