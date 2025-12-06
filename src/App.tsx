import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Agencies from './pages/Agencies'
import Contact from './pages/Contact'
import PoissonsElevage from './pages/PoissonElevage'
import CrustacesCoquillages from './pages/CrustacesCoquillages'
import EquipementAquacole from './pages/EquipementAquacole'
import Documentation from './pages/Documentation'
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
                    <Route
                        path="/poissons-nobles"
                        element={<PoissonsElevage />}
                    />
                    <Route
                        path="/crustaces-coquillages"
                        element={<CrustacesCoquillages />}
                    />
                    <Route
                        path="/equipement-aquacole"
                        element={<EquipementAquacole />}
                    />
                    <Route path="/documentation" element={<Documentation />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
