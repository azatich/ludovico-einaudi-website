import PianoLoader from '../components/PianoLoader'

const NotFoundPage = () => {
  return (
    <div>
        <h1 className='text-center text-white lg:text-4xl mt-4'>Oops, it look like there is no such page</h1>
        <PianoLoader />
    </div>
  )
}

export default NotFoundPage