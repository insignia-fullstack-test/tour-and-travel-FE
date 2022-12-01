import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tour from './Components/Tour/Tour';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tour />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
