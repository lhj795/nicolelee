import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Distortion from './components/Distortion';
import Able from './Able/Able';
import TenEx from './10xFinders/10xFinders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/Distortion' element={<Distortion/>} /> */}
        <Route path='/able' element={<Able/>} />
        <Route path='/10xfinders' element={<TenEx/>} />
      </Routes>
    </Router>
  );
}

export default App;
