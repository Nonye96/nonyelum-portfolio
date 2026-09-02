import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HealthCheck from './pages/HealthCheck'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Work />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/health" element={<HealthCheck />} />
    </Routes>
  )
}

export default App