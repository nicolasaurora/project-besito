import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WhyBesito from './components/WhyBesito'
import Problem from './components/Problem'


function App() {

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Problem />
        <WhyBesito />
      </main>
    </>
  )
}

export default App
