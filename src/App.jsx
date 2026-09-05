import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WhyBesito from './components/WhyBesito'
import Problem from './components/Problem'
import Packs from './components/Packs'
import HowWeWork from './components/HowWeWork'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PacksShowcase from './components/PackShowCase'
import PageAnimations from './components/PageAnimations'


function App() {

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        {/* <Problem /> */}
        <WhyBesito />
        <Packs />
        <PacksShowcase />
        <HowWeWork />
        <Faq />
        <FinalCta />
        <Footer />
        <WhatsAppButton />
      </main>
      <PageAnimations />
    </>
  )
}

export default App
