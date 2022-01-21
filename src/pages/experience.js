import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../data/resume.json'

export default function Home() {
   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>Experience</title>
            <meta
               name='description'
               content='This is a list of my work experiences. My resume can be downloaded here.'
            />
         </Head>
         <Navbar />
         <main className='flex flex-col flex-grow p-8 overflow-y-auto text-bluegray-800 dark:text-bluegray-50'>
            <div className='flex items-center justify-between'>
               <h1 className='mb-4 mr-3 text-4xl font-bold'>Experience</h1>
               <button className='mb-4 text-purple-600 transition duration-75 rounded outline-none ring-inset dark:text-white ring-2 dark:hover:ring-0 dark:focus:ring-white ring-purple-400 dark:ring-purple-500 dark:hover:gradient-purple-pink dark:focus:gradient-purple-pink focus:bg-purple-500 hover:bg-purple-500 focus:ring-purple-500 hover:ring-purple-500 hover:text-white focus:text-white'>
                  <a
                     href='/dannickliudzius.pdf'
                     className='flex items-center justify-center w-24 px-2 transition duration-75 h-9 dark:text-white hover:text-white dark:hover:text-white'
                     download
                  >
                     <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 14 14'
                        className='w-4 mr-2 stroke-current'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M7 9l2.4-2.667M7 9V1v8zm0 0L4.6 6.333 7 9zM1 10.333l.373 1.657c.064.288.214.544.425.727.211.183.471.283.739.283h8.926c.268 0 .528-.1.739-.283.21-.183.36-.439.425-.727L13 10.333'
                        />
                     </svg>
                     My&nbsp;CV
                  </a>
               </button>
            </div>
            <Experiences />
         </main>
         <Footer />
      </div>
   )
}

function Experiences() {
   const { work } = data
   const colors = {
      purple: 'text-purple-400',
      yellow: 'text-yellow-400 dark:text-yellow-300',
      red: 'text-red-400',
      green: 'text-green-400',
      blue: 'text-blue-400',
   }

   return work.map((job) => (
      <div key={job.date} className='relative'>
         <div
            className={
               'absolute -left-5 top-1.5 h-full flex flex-col items-center ' +
               colors[job.color]
            }
         >
            <div className='w-2.5 h-2.5 rounded-full ring-4 ring-current'></div>
            <div className='w-1 h-full bg-current rounded-b'></div>
         </div>
         <div className='pb-5'>
            <div className='flex flex-wrap'>
               <h2 className={'font-bold tracking-wide ' + colors[job.color]}>
                  {job.company}&nbsp;•&nbsp;
               </h2>
               <h2 className='font-semibold'>{job.title}</h2>
            </div>
            <p className='text-sm text-bluegray-400'>{job.date}</p>
            <ol className='space-y-1.5 text-sm text-bluegray-600 dark:text-bluegray-200'>
               {job.bullets.map((bullet) => (
                  <li key={bullet.substring(0, 9)} className=''>
                     {bullet}
                  </li>
               ))}
            </ol>
         </div>
      </div>
   ))
}
