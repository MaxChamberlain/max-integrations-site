'use client'
import stackIcons from '@/_assets/icons/stackIcons'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function StackDisplay(){
  let [activeIcon, setActiveIcon] = useState(0)
  let [locked, setLocked] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon(prev => {
        if(locked) return prev
        if(prev === stackIcons.length - 1) return 0
        return prev + 1
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [locked])
  
  return(
    <div className='w-full md:max-w-4xl flex flex-col items-center gap-16'>
      <div className='w-full flex flex-wrap justify-between items-end gap-8'>
        {stackIcons.map((icon, index) => (
          <div key={index} className={`cursor-pointer flex flex-col items-center justify-end gap-4 aspect-square w-16 md:w-32 transition-all duration-500 ${activeIcon === index ? 'opacity-100 scale-100' : 'opacity-50 scale-90'}`}
            onPointerEnter={() => {
              setActiveIcon(index)
              setLocked(true)
            }}
            onPointerLeave={() => {
              setLocked(false)
            }}
          >
            {icon.icon}
            <span className='text-sm font-light'>
              {icon.name}
            </span>
          </div>
        ))}
      </div>
      <AnimatePresence mode='popLayout'>
        <motion.div 
          key={String(activeIcon)} 
          className='text-white/70 w-full md:max-w-2xl text-center'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.2, ease: 'anticipate' }}
        >
          {stackIcons[activeIcon].description}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}