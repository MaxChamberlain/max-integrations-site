'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TransformingFeatures(){
  const [activeFeature, setActiveFeature] = useState(0)
  const [displayWord, setDisplayWord] = useState('')
  const [timeout, setTimeout] = useState(150)

  const features = [
    'ReactJS',
    'NextJS',
    'TailwindCSS',
    'Framer Motion',
    'Care',
    'Attention'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayWord(prev => {
        if(prev.length === features[activeFeature].length) {
          setActiveFeature(prev => {
            if(prev === features.length - 1) return 0
            return prev + 1
          })
          setTimeout(800)
          return ''
      }
        if(prev.length === features[activeFeature].length - 1) {
          setTimeout(3000)
        } else {
          setTimeout(150)
        }
        return prev += features[activeFeature][prev.length]
      })
    }, timeout)
    return () => clearInterval(interval)
  })


  return(
    <div style={{ perspective: 2000 }} className='flex gap-2 flex-col items-center sm:flex-row text-2xl md:text-4xl font-bold whitespace-nowrap overflow-visible'>
      Web Development with 
      <AnimatePresence mode='wait'>
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100, rotateY: 45 }}
            transition={{ duration: 0.5, ease: 'anticipate' }}
            className='text-center sm:text-left w-fit bg-gradient-to-r from-teal-300 to-fuchsia-400 bg-clip-text overflow-visible flex items-center'
          >
            <span className='text-white/0 overflow-visible'>
              {displayWord}<span className='text-white animate-blink font-thin'>|</span>
            </span>
            
          </motion.div>
      </AnimatePresence>
    </div>
  )
}