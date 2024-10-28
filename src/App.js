import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Electronics from './components/electronics';
import Jewlery from './components/jewlery';
import Home from './home';
import Books from './components/books';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/books">Books</Link> |
          <Link to="/jewlery">Jewlery</Link> | 
          <Link to="/electronics">Electronics</Link>
        </nav>
        <Routes>
        <Route path="/Home" element={<Home/>}/>
          <Route path="/Books" element={<Books />} />
          <Route path="/jewlery" element={<Jewlery />} />

          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
