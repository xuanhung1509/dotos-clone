import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import Showcase from './pages/Home/components/Showcase/Showcase';
// import Features from './pages/Home/components/Features/Features';
// import About from './pages/Home/components/About/About';
// import Team from './components/Team';
// import FAQ from './components/FAQ';
// import Donate from './pages/Home/components/Donate/Donate';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Download from './pages/Downloads/Download';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/download' element={<Download />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
