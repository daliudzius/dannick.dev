import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'

export default function Home() {
   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>Dannick.dev</title>
         </Head>
         <Navbar />
         <main className='flex flex-col flex-grow p-8 space-y-2 overflow-y-auto text-bluegray-800 dark:text-bluegray-50'>
            <div className='self-center'>
               <Image
                  src='/profile-pic.png'
                  alt='Profile picture'
                  width={150}
                  height={150}
                  quality={40}
                  className='rounded-full'
                  priority
               />
            </div>
            <p className='self-center'>My name is</p>
            <h1 className='self-center text-4xl font-bold bg-clip-text gradient-purple-pink dark:text-transparent'>
               Dannick&nbsp;Liudzius
            </h1>
            <div className='self-center'>
               <SocialLinks />
            </div>
            <div className='dark:text-bluegray-200'>
               <p>
                  I'm a full stack software engineer working at SLA California
                  to build and deploy web and Windows applications.
               </p>
               <br />
               <p>
                  In my free time you can find me running, cooking, tinkering
                  with electronics, or slapping my keyboard to a new project.
               </p>
               <br />
               <p>
                  My current project is compiling info I’ve learned from my
                  hobbies into articles and building a blog site to toss them
                  on. I hope consolidation of my notes and projects may prove
                  useful for future eyes.
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
