import ScrollToTopButton from '../components/ScrollToTop'
import AboutTextSection from '../sections/AboutTextSection'
import CarouselSection from '../sections/CarouselSection'

const AboutPage = () => {
  return (
    <div className='bg-black'>
      <CarouselSection />
      <AboutTextSection />
      <ScrollToTopButton scrollMoreThanPx='2000' bgColor='bg-white' textColor='text-black' />
    </div>
  )
}

export default AboutPage