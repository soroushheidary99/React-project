import React from 'react'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App
