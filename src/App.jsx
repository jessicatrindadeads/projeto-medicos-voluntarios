import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './globalStyle.scss'
import Home from './pages/home/Home'
import Voluntario from './pages/voluntario/Voluntario'
import ComoAjudar from './pages/como-ajudar/ComoAjudar'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voluntario" element={<Voluntario />} />
        <Route path="/como-ajudar" element={<ComoAjudar />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
