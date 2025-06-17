import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import BlankPage from './pages/BlankPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/subscriptions" element={<BlankPage />} />
        <Route path="/messages" element={<BlankPage />} />
        <Route path="/settings" element={<BlankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
