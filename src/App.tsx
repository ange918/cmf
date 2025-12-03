import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Agencies from './pages/Agencies'
import Contact from './pages/Contact'
import PoissonsNobles from './pages/PoissonsNobles'
import CrustacesCoquillages from './pages/CrustacesCoquillages'
import EquipementAquacole from './pages/EquipementAquacole'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/poissons-nobles" element={<PoissonsNobles />} />
          <Route path="/crustaces-coquillages" element={<CrustacesCoquillages />} />
          <Route path="/equipement-aquacole" element={<EquipementAquacole />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
