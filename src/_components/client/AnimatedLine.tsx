'use client'
import { motion } from 'framer-motion'
import line1 from '../../_assets/icons/line-1.svg'
import Image from 'next/image'

export default function AnimatedLine() {
  return(
    <div className='h-1 w-full mb-12 hidden sm:block fixed'>
      <motion.div 
        initial={{ scale: 0, filter: 'blur(35rem)', y: -500 }}
        animate={{ scale: 1, filter: 'blur(25rem)', y: 0 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className='bg-gradient-to-r from-orange-400 to-fuchsia-500 absolute top-32 left-3/4 w-96 h-96 blur-[15rem] rounded-full'
      ></motion.div>
      <motion.div 
        initial={{ scale: 0, filter: 'blur(35rem)', y: 500 }}
        animate={{ scale: 1, filter: 'blur(25rem)', y: 0 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className='bg-gradient-to-r from-orange-400 to-fuchsia-500 absolute bottom-8 left-8 w-96 h-96 blur-[18rem] rounded-full'
      ></motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className='overflow-x-hidden blur-3xl'
      >
        <div className='w-screen'>
          <Image src={line1} alt='Line 1' className='w-screen h-fit shadow-2xl' />
        </div>
      </motion.div>
    </div>
  )
}