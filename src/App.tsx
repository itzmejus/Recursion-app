
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExcursionsDubaiHero from './components/ExcursionsDubaiHero'
import Footer from './components/Footer';
import ItemDetailpage from './components/ItemDetailpage';
import Navbar from './components/Navbar';
import ContactUsPage from './components/ContactUs';
import FallbackPage from './components/FallBackPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ExcursionsDubaiHero />} />
          <Route path='/detail' element={<ItemDetailpage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/about' element={<FallbackPage />} />
          <Route path='/tours' element={<FallbackPage />} />
          <Route path='/transfers' element={<FallbackPage />} />
          <Route path='/services' element={<FallbackPage />} />
          <Route path='/cart' element={<FallbackPage />} />
          <Route path='*' element={<FallbackPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
