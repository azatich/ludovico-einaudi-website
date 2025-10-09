import { Player } from '@lottiefiles/react-lottie-player'

const PianoLoader = () => {
  return (
    <div className='h-[calc(100vh-90px)] flex flex-col items-center justify-center bg-black'>
        <Player autoplay loop src='/icons/loader.json' style={{height: '500px', width: '500px'}} />
        <span className='text-3xl text-white font-semibold'>The page is currently under development...</span>
    </div>
  )
}

export default PianoLoader