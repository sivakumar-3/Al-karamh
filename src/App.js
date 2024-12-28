import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Products from './pages/products';
import ContactPage from './pages/contactus';
import './App.css'; // Import your custom CSS

function App() {
  return (
    <div className="josefin-sans">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
