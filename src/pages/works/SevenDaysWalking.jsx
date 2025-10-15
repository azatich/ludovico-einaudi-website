import React from 'react'

const SevenDaysWalking = () => {
  return (
    <div className="px-12 md:px-20 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row md:justify-around md:gap-12">
        <div>
          <div className="text-white">
            <h1 className="text-2xl">The Summer Portraits</h1>
            <span>2025</span>
          </div>
          <img className="w-[20rem]" src="/images/works/3.png" alt="" />
        </div>
        <div className="text-white">
          <h1 className="text-2xl text-center">Decca Records</h1>
          <ul className="list-decimal pl-4">
            <li>Rose Bay</li>
            <li>Punta Bianca</li>
            <li>Sequence </li>
            <li>To Be Sun</li>
            <li>Jay </li>
            <li>In Memory Of A Dream</li>
            <li>In Limine</li>
            <li>Summer Song</li>
            <li>Oil On Wood</li>
            <li>Episode One</li>
            <li>Maria Callas</li>
            <li>Santiago</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-start flex-col mt-8">
        <span className="text-white text-xl uppercase md:text-2xl">Listen on</span>
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/watch?v=2PHobK7oB0Y&list=PL9rRqI6iklCXsEx_T_y6dgTA_AM33KFm-"
            target="_blank"
          >
            <img
              className="w-8 hover:brightness-50"
              src="/icons/youtube.svg"
              alt="youtube"
              loading="lazy"
            />
          </a>
          <a>
            <img
              className="w-8 hover:brightness-50"
              src="/icons/spotify.svg"
              alt="youtube"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SevenDaysWalking