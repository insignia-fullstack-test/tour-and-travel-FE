import { BrowserRouter } from 'react-router-dom';

import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
