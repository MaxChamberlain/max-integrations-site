import Link from 'next/link'
import logo from '../_assets/icons/max_integrations_logo.svg'
import Image from 'next/image'

export default function Header(){
  return(
    <div className='h-14 w-screen overflow-hidden sticky top-0 p-4 flex items-center justify-between border-b border-stone-200/10 bg-[#151617]/60 backdrop-blur-3xl z-[999]'>
      <Link href='/'>
        <div className='flex items-center justify-center'>
          <Image src={logo} alt='Max Integrations Logo' width={40} height={40} />
        </div>
      </Link>
      <Link href='/'>
        <div className='flex items-center justify-center bg-gradient-to-br from-orange-400/90 to-fuchsia-600/40 py-2 px-4 rounded-full gap-2'>
          Contact Us <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
        </div>
      </Link>
    </div>
  )
}