export default function TestimonialCard({
  title,
}: {
  title: string
}){
  return (
    <div className='bg-white p-4 w-96 text-black'>
      {title}
    </div>
  )
}