import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tour from './Components/Tour/Tour';
import Login from './Components/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tour />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
