import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/layouts/Footer';
import BrandPartnership from './pages/BrandPartnership';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/brand-integrations" element={<BrandPartnership />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
