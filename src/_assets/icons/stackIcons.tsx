import expressjs from '@/_assets/icons/expressjs.svg'
import firebase from '@/_assets/icons/firebase.svg'
import nextjs from '@/_assets/icons/nextjs.svg'
import reactjs from '@/_assets/icons/reactjs.svg'
import tailwindcss from '@/_assets/icons/tailwindcss.svg'
import Image from 'next/image'

export default [
  {
    name: 'TailwindCSS',
    icon: <Image src={tailwindcss} alt="ReactJS" width={50} height={50} />,
    description: 'TailwindCSS is a utility-first CSS framework that allows us to build custom designs quickly and efficiently. It minifies extremely efficiently and results in shipping less code to the browser.'
  },
  {
    name: 'ReactJS',
    icon: <Image src={reactjs} alt="ReactJS" width={50} height={50} />,
    description: 'ReactJS is a JavaScript library for building user interfaces. It allows for a fast, responsive, and dynamic user experience. It is the most popular JavaScript library for building user interfaces.'
  },
  {
    name: 'NextJS',
    icon: <Image src={nextjs} alt="NextJS" width={50} height={50} className='invert' />,
    description: 'NextJS is a React framework that allows for server-side rendering, static site generation, and more. It is built on React, but allows for server-rendered HTML, resulting in less code shipped for faster load times and better SEO.'
  },
  {
    name: 'ExpressJS',
    icon: <Image src={expressjs} alt="ExpressJS" width={50} height={50} className='invert' />,
    description: 'ExpressJS is a NodeJS framework that allows for building web applications and APIs. It is built on NodeJS, and allows for fast, scalable, and secure web applications. We use this for building APIs and the server side of all our applications.'
  },
  {
    name: 'Firebase',
    icon: <Image src={firebase} alt="Firebase" width={50} height={50} />,
    description: 'Firebase is a Google platform that allows for building web and mobile applications. It is built on Google Cloud, and allows for fast, scalable, and secure web applications. This is where we host our data in a NoSQL database.'
  }
]