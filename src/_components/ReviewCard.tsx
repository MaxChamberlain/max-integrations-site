import quoteIcon from '../_assets/icons/quotation.svg'
import Image from 'next/image'

export default function ReviewCard({
  name,
  quote,
  location
}: {
  name: string
  quote: string
  location: string
}){
  return(
    <div className='p-2 bg-white shadow-lg rounded-xl text-black w-full md:max-w-xl h-fit md:h-64 justify-between flex flex-col'>
      <div className='w-full flex justify-end'>
        <Image src={quoteIcon} alt='quote icon' className='opacity-20 w-12 h-12 md:w-16 md:h-16' />
      </div>
      <div className='p-2 md:p-4 h-full text-sm md:text-base'>
        {quote}
      </div>
      <div className='flex justify-between items-center p-2 md:p-4'>
        <div className='flex flex-col'>
          <span className='font-semibold'>
            {name}
          </span>
          <span className='text-sm'>
            {location}
          </span>
        </div>
        <div className='hidden md:flex items-center blur-[1px] opacity-50'>
          <div className='w-4 h-4 bg-gradient-to-r from-orange-400 to-fuchsia-600 rounded-full'></div>
          <div className='w-4 h-4 bg-gradient-to-r from-orange-400 to-fuchsia-600 rounded-full -ml-1'></div>
          <div className='w-4 h-4 bg-gradient-to-r from-orange-400 to-fuchsia-600 rounded-full -ml-1'></div>
        </div>
      </div>
    </div>
  )
}