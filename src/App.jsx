import Home from './pages/Home';
import './styles/main.scss';
import { useEffect } from 'react';



function App() {
  
  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
      });
    }
  }, []);
  
  return (
    <>
      <Home />
      {/* <Footer /> */}
    </>
  );
}

export default App;
