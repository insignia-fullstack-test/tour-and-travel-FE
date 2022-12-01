import Header from './Components/UI/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
