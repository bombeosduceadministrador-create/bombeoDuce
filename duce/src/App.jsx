import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import HeroSection from './components/HeroSection'
import ServiciosSection from './sections/ServiciosSection'
import PorQueSection from './sections/PorQueSection'
import ObrasSection from './sections/ObrasSection'
import CtaBanner from './sections/CtaBanner'
import CotizarSection from './sections/CotizarSection'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiciosSection />
        <PorQueSection />
        <ObrasSection />
        <CtaBanner />
        <CotizarSection />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}