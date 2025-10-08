import React from 'react'
import About from './components/About'
import Tours from './components/Tours'

const AboutToursSection = () => {
  return (
    <div className='bg-white flex flex-col md:flex-row'>
        <About />
        <Tours />
    </div>
  )
}

export default AboutToursSection