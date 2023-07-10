'use client'
import { AnimatePresence, motion } from 'framer-motion'
import TestimonialCard from '../TestimonialCard'
import { useState, useEffect } from 'react'

let cards = [
  <TestimonialCard title='card-1' />,
  <TestimonialCard title='card-2' />,
  <TestimonialCard title='card-3' />,
  <TestimonialCard title='card-4' />,
  <TestimonialCard title='card-5' />,
]

export default function Carousel(){
  const [activeCard, setActiveCard] = useState(0)
  const [prevCard, setPrevCard] = useState(cards.length - 1)
  const [nextCard, setNextCard] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => {
        if(prev === cards.length - 1) return 0
        return prev + 1
      })
      setPrevCard(prev => {
        if(prev === cards.length - 1) return 0
        return prev + 1
      })
      setNextCard(prev => {
        if(prev === cards.length - 1) return 0
        return prev + 1
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  console.log({ activeCard, prevCard, nextCard })

  return(
    <div className='w-full flex justify-center items-center gap-12'>
      <AnimatePresence mode='wait'>
        <motion.div 
          key={prevCard} 
          className='opacity-75 scale-90' 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cards[prevCard]}
        </motion.div>
        <motion.div 
          key={activeCard} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cards[activeCard]}
        </motion.div>
        <motion.div 
          key={nextCard} 
          className='opacity-75 scale-90' 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cards[nextCard]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}