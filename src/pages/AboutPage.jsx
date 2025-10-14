import PianoLoader from '../components/PianoLoader'
import AboutTextSection from '../sections/AboutTextSection'
import CarouselSection from '../sections/CarouselSection'

const AboutPage = () => {
  return (
    <div className='bg-black'>
      <CarouselSection />
      <AboutTextSection />
    </div>
  )
}

export default AboutPage