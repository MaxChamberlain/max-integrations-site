'use client'

import { useEffect, useState } from 'react'

export default function PhilosophyCard() {
  const [activeCard, setActiveCard] = useState(-1)

  useEffect(() => {
    setTimeout(() => {
      setActiveCard(0)
    }, 100)
    const interval = setInterval(() => {
      setActiveCard(prev => {
        if(prev === 2) return 0
        return prev + 1
      })
    }
    , 5000)
    return () => clearInterval(interval)
  }, [])

  return(
    <div className='relative w-72 md:w-96 lg:w-[30rem] aspect-video' style={{ perspective: 500 }}>
      <div className={`absolute top-0 aspect-video flex flex-col items-center justify-center space-y-4 md:space-y-12 transition-all duration-1000 bg-gradient-to-r from-orange-400 to-fuchsia-500  after:bg-gradient-to-r after:from-orange-400 after:to-fuchsia-500 after:shadow-pink-400 after:absolute after:inset-3 after:blur-xl after:-z-50 z-50 rounded-2xl`} style={{
        transform: activeCard === 0 ? 'rotateY(0) translateX(0) translateZ(0)' : activeCard === 1 ? 'rotateY(-45deg) translateX(-50%) translateZ(20px)' : activeCard === 2 ? 'rotateY(45deg) translateX(50%) translateZ(20px)' : 'rotateY(0) translateX(0) translateZ(0)',
        left: activeCard === 0 ? '0' : activeCard === 1 ? '-50%' : activeCard === 2 ? '50%' : '0',
        right: activeCard === 0 ? '0' : activeCard === 1 ? '50%' : activeCard === 2 ? '-50%' : '0',
        zIndex: (activeCard === 0 || activeCard === -1) ? 50 : 0
      }}>
        <span className='text-2xl md:text-4xl font-bold'>
          Max Integrations
        </span>
        <span className='text-base md:text-xl font-normal'>
          Fast, Responsive Web Design
        </span>
      </div>
      <div className={`absolute top-0 aspect-video flex flex-col items-center justify-center space-y-4 md:space-y-12 transition-all duration-1000 bg-gradient-to-r from-orange-400 to-fuchsia-500 after:bg-gradient-to-r after:from-orange-400 after:to-fuchsia-500 after:shadow-pink-400 after:absolute after:inset-3 after:blur-xl after:-z-50 z-50 rounded-2xl`} style={{
        transform: activeCard === 1 ? 'rotateY(0) translateX(0) translateZ(0)' : activeCard === 2 ? 'rotateY(-45deg) translateX(-50%) translateZ(20px)' : activeCard === 0 ? 'rotateY(45deg) translateX(50%) translateZ(20px)' : 'rotateY(0) translateX(0) translateZ(0)',
        left: activeCard === 1 ? '0' : activeCard === 2 ? '-50%' : activeCard === 0 ? '50%' : 0,
        right: activeCard === 1 ? '0' : activeCard === 2 ? '50%' : activeCard === 0 ? '-50%' : 0,
        zIndex: activeCard === 1 ? 50 : 0
      }}>
        <span className='text-2xl md:text-4xl font-bold'>
          Our Philosophy
        </span>
        <span className='text-base md:text-xl font-normal'>
          How we design, build and deliver
        </span>
      </div>
      <div className={`absolute top-0 aspect-video flex flex-col items-center justify-center space-y-4 md:space-y-12 transition-all duration-1000 bg-gradient-to-r from-orange-400 to-fuchsia-500  after:bg-gradient-to-r after:from-orange-400 after:to-fuchsia-500 after:shadow-pink-400 after:absolute after:inset-3 after:blur-xl after:-z-50 z-50 rounded-2xl`} style={{
        transform: activeCard === 2 ? 'rotateY(0) translateX(0) translateZ(0)' : activeCard === 0 ? 'rotateY(-45deg) translateX(-50%) translateZ(20px)' : activeCard === 1 ? 'rotateY(45deg) translateX(50%) translateZ(20px)' : 'rotateY(0) translateX(0) translateZ(0)',
        left: activeCard === 2 ? '0' : activeCard === 0 ? '-50%' : activeCard === 1 ? '50%' : 0,
        right: activeCard === 2 ? '0' : activeCard === 0 ? '50%' : activeCard === 1 ? '-50%' : 0,
        zIndex: activeCard === 2 ? 50 : 0
      }}>
        <span className='text-2xl md:text-4xl font-bold'>
          Start Today
        </span>
        <span className='text-base md:text-xl font-normal'>
          Power your web presence
        </span>
      </div>
    </div>
  )
}