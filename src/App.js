import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Electronics from './components/electronics';
import Jewlery from './components/jewlery';
import Home from './home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/jewlery">Jewlery</Link> | 
          <Link to="/electronics">Electronics</Link>
        </nav>
        <Routes>
        <Route path="/Home" element={<Home/>}/>
          <Route path="/jewlery" element={<Jewlery />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
