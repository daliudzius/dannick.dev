import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'

export default function Home() {
   return (
      <>
         <Head>
            <title>Dannick.dev</title>
         </Head>
         <header>
            <Navbar />
         </header>
         <main className='p-8 text-bluegray-800 dark:text-bluegray-50'>
            <p>Hi friend, I'm</p>
            <h1 className='text-4xl font-bold'>Dannick</h1>
            <SocialLinks />
            <div className='text-bluegray-600 dark:text-bluegray-200'>
               <p>
                  I'm a developer, tinkerer, and creator. I work at SLA as a
                  software engineer building and shipping enterprise software.
               </p>
               <br />
               <p>
                  I enjoy creating software and hardware that's&nbsp;
                  <span className='text-green-500 dark:text-green-400'>
                     simple
                  </span>
                  &nbsp;•&nbsp;
                  <span className='text-pink-500 dark:text-pink-400'>
                     pretty
                  </span>
                  &nbsp;•&nbsp;
                  <span className='text-purple-600 dark:text-purple-400'>
                     performant
                  </span>
                  .
               </p>
               <br />
               <p>
                  Currently I am focused on keeping pace with the latest web
                  design and tech stack trends.
               </p>
            </div>
            <div className='flex justify-center mt-8'>
               <button className='inline-flex items-center justify-center w-40 border-2 border-purple-400 rounded h-14'>
                  <svg
                     viewBox='0 0 16 16'
                     className='inline-block w-4 mr-3 text-purple-600 fill-current'
                  >
                     <path d='M1.215.086l14.303 7.117a.86.86 0 01.351.326.91.91 0 010 .941.86.86 0 01-.351.326L1.215 15.913a.82.82 0 01-.91-.118.885.885 0 01-.266-.413.917.917 0 01-.009-.498L1.836 8 .03 1.114A.917.917 0 01.04.617.886.886 0 01.306.205a.82.82 0 01.91-.118V.086zM1.11 1.209l1.645 6.276h7.427c.124 0 .243.047.335.131a.536.536 0 01.17.328l.005.07a.543.543 0 01-.126.35.504.504 0 01-.314.176l-.07.005H2.747L1.11 14.79 14.759 8 1.11 1.208z' />
                  </svg>
                  Let's Chat
               </button>
            </div>
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   )
}
