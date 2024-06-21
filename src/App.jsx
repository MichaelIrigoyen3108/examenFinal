
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme,  } from './Components/utils/FeaturedContext';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const theme = useTheme();

  return (
    <div className={`App ${theme}`}>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
