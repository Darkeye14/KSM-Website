
import './App.css';
import Home from './home/Home';
import Navbar from './home/Navbar';
import { Route,Routes } from 'react-router-dom';
import Placeholder from './placeholder/Placeholder';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/placeholder' element={<Placeholder/>} />
      </Routes>     
    </div>
     
  );
}

export default App;
