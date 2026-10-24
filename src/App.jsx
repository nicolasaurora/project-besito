import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WhyBesito from './components/WhyBesito'
import Packs from './components/Packs'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PacksShowcase from './components/PackShowCase'


function App() {

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyBesito />
        <Packs />
        <PacksShowcase />
        <FinalCta />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}

export default App
