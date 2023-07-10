'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
export default function TransformingTitle(){
  const [activeFeature, setActiveFeature] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => {
        if(prev === features.length - 1) return 0
        return prev + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    ['Responsive', 'bg-orange-400'],
    ['SEO Friendly', 'bg-red-500'],
    ['Performant', 'bg-pink-400'],
    ['Feel Good', 'bg-fuchsia-500']
  ]

  return(
    <div style={{ perspective: 2000 }} className='flex gap-2 flex-col items-center sm:flex-row text-2xl md:text-4xl font-bold whitespace-nowrap'>
      Make Your Web Presence
      <AnimatePresence mode='wait'>
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -90 }}
            transition={{ duration: 0.5, ease: 'anticipate' }}
            className='text-center sm:text-left w-40 md:w-64 bg-gradient-to-r from-orange-400 to-fuchsia-600 bg-clip-text overflow-visible'
          >
            <span className='text-white/0'>
              {features[activeFeature][0]}
            </span>
          </motion.div>
      </AnimatePresence>
    </div>
  )
}