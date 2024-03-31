import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Education from './components/Education'

function Home() {
    return (
        <>
            <Hero />
            <About/>
            <Education/>
            <Projects/>
            <Contact/>
            <Footer />
        </>
    )
}

export default Home
