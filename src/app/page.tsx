import PhilosophyCard from '../_components/client/PhilosophyCard'
import TransformingTitle from '../_components/client/TransformingTitle'
import AnimatedLine from '../_components/client/AnimatedLine'
import TransformingFeatures from '@/_components/client/TransformingFeatures'
import StackDisplay from '@/_components/client/StackDisplay'
import ReviewCard from '@/_components/ReviewCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen overflow-x-hidden snap-y overflow-y-scroll">
      <div className='w-screen flex flex-col justify-center items-center gap-16 md:gap-8 relative snap-start' style={{ height: 'calc(100vh - 3.5rem)' }}>
        <span className='sm:flex-row text-4xl md:text-6xl font-bold whitespace-nowrap tracking-wide shadow [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)]'>
          Max Integrations
        </span>
        <TransformingTitle />
        <div className='h-0 md:h-8 lg:h-16'></div>
        <AnimatedLine />
        <PhilosophyCard />
      </div>
      <div className='w-screen flex flex-col justify-center items-center gap-16 md:gap-8 relative h-screen px-4 md:px-8 lg:px-16 xl:px-24 snap-start' style={{ perspective: 2000 }}>
        <span className='text-3xl font-semibold'>
          Our Stack
        </span>
        <div className='bg-gradient-to-r from-orange-400 to-fuchsia-600 bg-clip-text h-fit'>
          <TransformingFeatures />
        </div>
        <StackDisplay />
      </div>
      <div className='w-screen flex flex-col justify-start lg:justify-center mt-24 lg:mt-0 items-center gap-4 md:gap-8 lg:gap-16 relative h-screen p-8 md:p-24 snap-start'>
        <span className='text-3xl font-semibold'>
          Reviews
        </span>
        <span className='text-2xl md:text-4xl font-bold text-center md:text-start'>
          Don&apos;t take our word for it
        </span>
        <span className='text-xl font-normal text-white/70 text-center md:text-start'>
          Let our clients tell you how we&apos;ve helped them
        </span>
        <div className='w-full flex justify-center items-center gap-8 mt-12 flex-col xl:flex-row'>
          <ReviewCard
            name='John Chamberlain'
            quote='Robust, elegant solutions. We worked to make an analytics app that exceeded my expectations. I would recommend them to anyone.'
            location='Denver, CO'
          />
          <ReviewCard
            name='Logan Todd'
            quote='Max Integrations had my custom website to me really fast, even with all the custom booking and payment features I needed. High quality work.'
            location='Port Orange, FL'
          />
        </div>
      </div>
    </main>
  )
}
