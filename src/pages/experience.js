import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>Experience</title>
         </Head>
         <Navbar />
         <main className='flex flex-col flex-grow p-8 space-y-2 space-y-8 overflow-y-auto text-bluegray-800 dark:text-bluegray-50'>
            <div className='flex items-center justify-between'>
               <h1 className='my-1 text-4xl font-bold'>Experience</h1>
               <button className='border-2 border-purple-600 rounded dark:border-purple-400 focus:ring-4 ring-current focus:outline-none '>
                  <a
                     href='/dannickliudzius.pdf'
                     className='flex items-center justify-center h-11 w-36'
                     download
                  >
                     <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 14 14'
                        className='inline-block w-4 mr-2 text-purple-600 dark:text-purple-400'
                     >
                        <path
                           stroke-linecap='round'
                           stroke-linejoin='round'
                           d='M7 9l2.4-2.667M7 9V1v8zm0 0L4.6 6.333 7 9zM1 10.333l.373 1.657c.064.288.214.544.425.727.211.183.471.283.739.283h8.926c.268 0 .528-.1.739-.283.21-.183.36-.439.425-.727L13 10.333'
                        />
                     </svg>
                     My Resume
                  </a>
               </button>
            </div>
            <Experience />
         </main>
         <Footer />
      </div>
   )
}

function Experience() {
   return (
      //add mapping of json data
      //format flex/something to allow gitline
      <h2>Experience #1 / Software Engineer</h2>
   )
}
