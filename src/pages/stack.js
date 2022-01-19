import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>Tech Stack</title>
            <meta
               name='description'
               content='The tech stack I used to create this website included Nextjs, TailwindCSS, and Vercel for deployment and hosting.'
            />
         </Head>
         <Navbar />
         <main className='flex flex-col flex-grow p-8 space-y-8 overflow-y-auto text-bluegray-800 dark:text-bluegray-50'>
            <div>
               <h1 className='text-4xl font-bold'>Tech Stack</h1>
               <h1 className='text-4xl tracking-tight text-bluegray-600 dark:text-bluegray-400'>
                  for this website
               </h1>
            </div>
            <div>
               <h2 className='mb-2 font-bold'>Design</h2>
               <ul>
                  <li>
                     <a
                        href='https://www.figma.com'
                        className='border-b border-current border-dotted hover:border-solid'
                     >
                        Figma
                     </a>
                     &nbsp;as UI design tool
                  </li>
               </ul>
            </div>
            <div>
               <h2 className='mb-2 font-bold'>Develop</h2>
               <ul>
                  <li>
                     <a
                        href='https://www.nextjs.org'
                        className='border-b border-current border-dotted hover:border-solid'
                     >
                        NextJS
                     </a>
                     &nbsp;as frontend framework
                  </li>
                  <li>
                     <a
                        href='https://reactjs.org'
                        className='border-b border-current border-dotted hover:border-solid'
                     >
                        ReactJS
                     </a>
                     &nbsp;as frontend library
                  </li>
                  <li>
                     <a
                        href='https://www.tailwindcss.com'
                        className='border-b border-current border-dotted hover:border-solid'
                     >
                        TailwindCSS
                     </a>
                     &nbsp;as CSS library
                  </li>
               </ul>
            </div>
            <div>
               <h2 className='mb-2 font-bold'>Deploy</h2>
               <ul>
                  <li>
                     <a
                        href='https://www.vercel.com'
                        className='border-b border-current border-dotted hover:border-solid'
                     >
                        Vercel
                     </a>
                     &nbsp;as deployment and hosting tool
                  </li>
               </ul>
            </div>
            <div>
               <p>
                  This site is open source. Visit the repo to suggest changes:
               </p>
               <a
                  href='https://github.com/daliudzius/dannick.dev'
                  className='inline-block my-2 text-purple-600 border-b border-current border-dotted dark:text-purple-400 hover:border-solid'
               >
                  <svg
                     fill='none'
                     viewBox='0 0 15 19'
                     stroke='currentColor'
                     className='inline-block w-4'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8 2.667c1.112 0 1.741.266 2 .333.35-.283 1.292-1 2.333-1 .23.667.191 1.48 0 2 .5.667.667 1.333.667 2.333 0 1.459-.322 2.388-1 3-.678.612-1.407.917-2.333 1 .433.359.333 1.25.333 1.667v2M8 2.667c-1.112 0-1.741.266-2 .333-.35-.283-1.292-1-2.333-1-.23.667-.191 1.48 0 2C3.167 4.667 3 5.333 3 6.333c0 1.459.322 2.388 1 3 .678.612 1.407.917 2.333 1C5.9 10.692 6 11.583 6 12v2'
                     />
                     <path
                        strokeLinecap='round'
                        d='M6 12.667c-.937 0-1.896-.376-2.459-.792-.561-.416-.728-1.104-1.541-1.542'
                     />
                  </svg>
                  daliudzius/dannick.dev
               </a>
               <p>
                  Much of this site was inspired by{' '}
                  <a
                     href='https://github.com/leerob'
                     className='border-b border-current border-dotted hover:border-solid'
                  >
                     Lee Robinson&apos;s
                  </a>{' '}
                  expertise on Nextjs and Vercel — thanks Lee!
               </p>
            </div>
         </main>
         <Footer />
      </div>
   )
}
