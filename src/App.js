import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Why from './pages/Why';
import Trainer from './pages/Trainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Index />} />
          <Route path='/contact' element={<Contact /> } />
          <Route path='/why' element={<Why /> } />
          <Route path='/trainer' element={<Trainer /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
