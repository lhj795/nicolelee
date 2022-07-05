import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
// import Distortion from './components/Distortion';
import Able from './Able/Able';
import TenEx from './10xFinders/10xFinders';
import AMC from './AMC/AMC';
import About from './About';
import Construction from './Construction';
import Lightly from './Lightly/Lightly';
// import Template from './Template/Template';
import Redesign from './Template/Redesign';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/Distortion' element={<Distortion/>} /> */}
        <Route path='/able' element={<Able/>} />
        <Route path='/10xfinders' element={<TenEx/>} />
        <Route path='/AMC' element={<AMC/>} />
        <Route path='/Lightly' element={<Lightly/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Construction/>} />
        <Route path='/test' element={<Redesign/>} />
      </Routes>
    </Router>
  );
}

export default App;
