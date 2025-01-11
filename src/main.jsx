import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import bemVindo from './pages/client/bemVindo.jsx';
// import sobre from './pages/client/sobre.jsx';
import Rodape from './components/Rodape';
// import './utils/index.css';

const App = () => {
  return (
    <Router>
      <div>jj
        <Routes>
          <Route path="/benvindo" element={<bemVindo />} />
          <Route path="/sobre" element={<sobre />} />
        </Routes>
        <rodape />
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
