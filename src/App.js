import { BrowserRouter } from 'react-router-dom';

import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Tour from './Components/Tour/Tour';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Tour />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
