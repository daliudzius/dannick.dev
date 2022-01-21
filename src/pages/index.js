import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>Dannick.dev</title>
            <meta
               name='description'
               content="I'm Dannick Liudzius, a developer, tinkerer, creator. This is my website."
            />
         </Head>
         <Navbar />
         <main className='flex-grow p-8 text-bluegray-800 dark:text-bluegray-50'>
            <div className='flex flex-col'>
               <div className='flex flex-col items-center md:self-start'>
                  <p>Hi friend, I&apos;m</p>
                  <h1
                     title='Dannick Liudzius'
                     className='my-1 text-5xl font-bold bg-clip-text gradient-purple-pink dark:text-transparent'
                  >
                     Dannick
                  </h1>
               </div>
               <div className='flex flex-col items-center my-5 md:self-start'>
                  <Image
                     src='/profile-pic.png'
                     alt='Profile picture'
                     width={150}
                     height={150}
                     quality={40}
                     className='rounded-full'
                     priority
                  />
                  <SocialLinks />
               </div>
            </div>
            <div>
               <p>
                  I&apos;m a developer, tinkerer, and creator. I work at SLA
                  California as a software engineer building and shipping
                  enterprise web and Windows applications.
               </p>
               <br />
               <p>
                  I enjoy creating software and hardware that&apos;s{' '}
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
            </div>
            <div className='grid justify-center md:justify-start'>
               <button className='my-8 text-purple-600 transition duration-75 rounded outline-none ring-inset dark:text-white ring-2 dark:hover:ring-0 dark:focus:ring-white ring-purple-400 dark:ring-purple-500 dark:hover:gradient-purple-pink dark:focus:gradient-purple-pink focus:bg-purple-500 hover:bg-purple-500 focus:ring-purple-500 hover:ring-purple-500 hover:text-white focus:text-white'>
                  <Link href='/contact'>
                     <a className='flex items-center justify-center w-40 text-lg text-purple-600 transition duration-75 dark:text-white h-14 hover:text-white dark:hover:text-white'>
                        <svg
                           viewBox='0 0 16 16'
                           className='w-4 mr-3 fill-current'
                        >
                           <path d='M1.215.086l14.303 7.117a.86.86 0 01.351.326.91.91 0 010 .941.86.86 0 01-.351.326L1.215 15.913a.82.82 0 01-.91-.118.885.885 0 01-.266-.413.917.917 0 01-.009-.498L1.836 8 .03 1.114A.917.917 0 01.04.617.886.886 0 01.306.205a.82.82 0 01.91-.118V.086zM1.11 1.209l1.645 6.276h7.427c.124 0 .243.047.335.131a.536.536 0 01.17.328l.005.07a.543.543 0 01-.126.35.504.504 0 01-.314.176l-.07.005H2.747L1.11 14.79 14.759 8 1.11 1.208z' />
                        </svg>
                        Let&apos;s Chat
                     </a>
                  </Link>
               </button>
            </div>
            <div>
               <p>
                  Currently I focus on keeping pace with the latest web design
                  and tech stack trends. In my free time you can find me
                  running, cooking, tinkering with electronics, or slapping my
                  keyboard to a new project.
               </p>
               <br />
               <p>
                  I’m always looking for new tech to learn and ways I can
                  improve on what I already use. This unusual year has allocated
                  more time at my desk to do just that — here are technologies
                  I’ve been working with lately:
               </p>
               <br />
               <div className='flex space-x-8 leading-8'>
                  <ul className='list-disc list-inside'>
                     <li>JavaScript&nbsp;ES6+</li>
                     <li>Next/React</li>
                     <li>Python</li>
                     <li>Arduino</li>
                     <li>MQTT</li>
                  </ul>
                  <ul className='list-disc list-inside'>
                     <li>C#</li>
                     <li>Entity C#</li>
                     <li>LINQ</li>
                     <li>MySQL</li>
                     <li>AWS</li>
                  </ul>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   )
}
