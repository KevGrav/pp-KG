import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <dir>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>      
      </dir>       
    </>
  )
}

export default App
