import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useViewportScroll } from 'framer-motion'
import data from '../data/resume.json'

export default function Home() {
   return (
      <>
         <Head>
            <title>dannick.dev</title>
         </Head>
         <SideNav />
         <main>
            <header className='absolute flex pt-3 pl-4'>
               <button>Dark Mode tba</button>
            </header>
            <div
               id='bio'
               className='flex flex-col items-center justify-center min-h-screen'
            >
               {/** TODO: fix shoulder hard lines feathering on profile pic */}
               {/** Does 'Priority' actually improve performance? */}
               <Image
                  src='/profile-pic.png'
                  alt='Picture of Dannick'
                  width={400}
                  height={400}
               />
               <h1 className='pb-5 text-6xl text-bluegray-800'>
                  Hey, I'm Dannick
               </h1>
               <p className='max-w-lg text-lg font-medium text-center text-bluegray-500'>
                  I'm a developer, tinkerer, and creator. I work at{' '}
                  <a href='https://learningcenter.slacal.com/'>SLA</a> as a
                  software engineer building and shipping enterprise software.{' '}
                  <br />I fancy creating software and hardware that's{' '}
                  <span className='whitespace-pre'>
                     <span className='font-semibold text-green-500'>
                        {' '}
                        simple{' '}
                     </span>
                     &bull;
                     <span className='font-semibold text-pink-500'>
                        {' '}
                        pretty{' '}
                     </span>
                     &bull;
                     <span className='font-semibold text-purple-500'>
                        {' '}
                        performant.
                     </span>
                  </span>
               </p>
               <div className='flex w-1/3 pt-4 justify-evenly'>
                  <a href='https://github.com/daliudzius'>
                     <svg
                        viewBox='0 0 256 249'
                        className='w-10 fill-current text-bluegray-600'
                     >
                        <path d='M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0' />
                        <path d='M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923m6.272 5.596c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65m4.304 7.159c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069m7.277 8.292c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258m9.403 2.8c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612m10.703 1.187c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86m10.514-.403c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398' />
                     </svg>
                  </a>
                  <a href='https://linkedin.com/in/dliudzius'>
                     <svg
                        viewBox='7.025 7.025 497.951 497.95'
                        className='w-10 fill-current text-bluegray-600'
                     >
                        <path d='M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z' />
                     </svg>
                  </a>
                  <a>Mail?</a>
               </div>
            </div>
            <div id='work' className='flex min-h-screen'>
               <div className='absolute md:relative md:flex-none'>
                  <Image
                     src='/gitlife-placeholder.png'
                     alt='Experience Timeline'
                     width={270}
                     height={1500}
                  />
               </div>
               <div className='flex flex-col min-w-0 px-5 space-y-2 sm:pr-24 lg:w-5/6'>
                  <WorkExperiences />
               </div>
            </div>
            <div
               id='skills'
               className='flex flex-col items-center justify-center min-h-screen space-y-5'
            >
               SKILLS
            </div>
         </main>
      </>
   )
}

function SideNav() {
   const { scrollYProgress } = useViewportScroll()
   const [activeArea, setActiveArea] = useState('bio')

   useEffect(() => {
      const unsubscribeScroll = scrollYProgress.onChange((v) => {
         if (v <= 0.3) setActiveArea('bio')
         if (v > 0.3 && v <= 0.8) setActiveArea('work')
         if (v > 0.8) setActiveArea('skills')
      })

      return () => unsubscribeScroll()
   }, [])

   let activeSVG = 'w-12 text-blue-400 fill-current transition-all'
   let inactiveSVG =
      'w-8 text-bluegray-300 fill-current animate-pulse-subtle transition-all'

   return (
      <nav className='fixed z-10 hidden w-10 origin-center -translate-y-1/2 sm:block top-1/2 right-8 transform-gpu'>
         {/** SideNav. Keep centered on right side */}
         <ol>
            <li className='flex flex-col items-center'>
               <a href='#bio' className='py-2'>
                  <svg
                     viewBox='0 0 438 450'
                     className={activeArea == 'bio' ? activeSVG : inactiveSVG}
                  >
                     <path d='M219.265 219.267c30.271 0 56.108-10.71 77.518-32.121 21.412-21.411 32.12-47.248 32.12-77.515 0-30.262-10.708-56.1-32.12-77.516C275.366 10.705 249.528 0 219.265 0S163.16 10.705 141.75 32.115c-21.414 21.416-32.121 47.253-32.121 77.516 0 30.267 10.707 56.104 32.121 77.515 21.416 21.411 47.251 32.121 77.515 32.121z' />
                     <path d='M419.258 335.036c-.668-9.609-2.002-19.985-3.997-31.121-1.999-11.136-4.524-21.457-7.57-30.978-3.046-9.514-7.139-18.794-12.278-27.836-5.137-9.041-11.037-16.748-17.703-23.127-6.666-6.377-14.801-11.465-24.406-15.271-9.617-3.805-20.229-5.711-31.84-5.711-1.711 0-5.709 2.046-11.991 6.139a2716.072 2716.072 0 01-21.266 13.708c-7.898 5.037-18.182 9.609-30.834 13.695-12.658 4.093-25.361 6.14-38.118 6.14-12.752 0-25.456-2.047-38.112-6.14-12.655-4.086-22.936-8.658-30.835-13.695a2784.143 2784.143 0 01-21.267-13.708c-6.283-4.093-10.278-6.139-11.991-6.139-11.61 0-22.222 1.906-31.833 5.711-9.613 3.806-17.749 8.898-24.412 15.271-6.661 6.379-12.562 14.086-17.699 23.127-5.137 9.042-9.229 18.326-12.275 27.836-3.045 9.521-5.568 19.842-7.566 30.978-2 11.136-3.332 21.505-3.999 31.121a427.742 427.742 0 00-.998 29.554c0 22.836 6.949 40.875 20.842 54.104 13.896 13.224 32.36 19.835 55.39 19.835h249.533c23.028 0 41.49-6.611 55.388-19.835 13.901-13.229 20.845-31.265 20.845-54.104-.002-10.088-.334-19.938-1.008-29.554z' />
                  </svg>
               </a>
               <div
                  className='w-1 rounded bg-bluegray-300 h-36 animate-pulse'
                  style={{
                     animationFillMode: 'backwards',
                     animationDelay: '100ms',
                  }}
               />
            </li>
            <li className='flex flex-col items-center'>
               <a href='#work' className='py-2'>
                  <svg
                     viewBox='0 0 512 530'
                     className={activeArea == 'work' ? activeSVG : inactiveSVG}
                  >
                     <path d='M319.77 338.039c0 4.949-1.811 9.236-5.424 12.847-3.617 3.621-7.902 5.428-12.851 5.428h-91.361c-4.952 0-9.233-1.807-12.85-5.428-3.616-3.61-5.424-7.897-5.424-12.847V292.36H0v137.044c0 12.56 4.471 23.312 13.418 32.257 8.945 8.946 19.701 13.419 32.264 13.419h420.266c12.56 0 23.315-4.473 32.261-13.419 8.949-8.945 13.418-19.697 13.418-32.257V292.36H319.77v45.679z' />
                     <path d='M219.266 292.36h73.096v36.545h-73.096zM498.208 123.054c-8.945-8.947-19.701-13.418-32.261-13.418H365.446V63.953c0-7.614-2.663-14.084-7.994-19.414-5.325-5.327-11.8-7.993-19.411-7.993H173.589c-7.612 0-14.083 2.666-19.414 7.993s-7.994 11.799-7.994 19.414v45.683H45.682c-12.562 0-23.318 4.471-32.264 13.418C4.471 132 0 142.75 0 155.313v109.636h511.626V155.313c0-12.563-4.468-23.313-13.418-32.259zm-169.304-13.418H182.725V73.089h146.179v36.547z' />
                  </svg>
               </a>
               <div
                  className='w-1 rounded bg-bluegray-300 h-36 animate-pulse'
                  style={{
                     animationFillMode: 'backwards',
                     animationDelay: '300ms',
                  }}
               />
            </li>
            <li className='flex flex-col items-center'>
               <a href='#skills' className='py-2'>
                  <svg
                     viewBox='0 0 8.467 8.467'
                     className={
                        activeArea == 'skills' ? activeSVG : inactiveSVG
                     }
                  >
                     <path d='M3.704.265a.265.265 0 00-.251.18l-.269.807a3.16 3.16 0 00-.318.131l-.76-.38a.265.265 0 00-.306.05l-.748.748c-.08.081-.1.204-.05.306l.38.758a3.17 3.17 0 00-.132.32l-.806.27a.265.265 0 00-.18.25v1.059c0 .113.072.215.18.25l.808.27c.038.108.082.213.131.316l-.38.762a.265.265 0 00.05.305l.747.75c.08.08.204.1.306.049l.76-.38c.104.049.21.093.318.13l.269.808c.036.108.137.18.251.18h1.058a.265.265 0 00.252-.18l.269-.809c.107-.038.213-.081.316-.13l.762.38c.102.052.225.032.305-.049l.749-.749c.08-.08.1-.203.05-.305l-.38-.76c.05-.104.093-.21.131-.319l.806-.268a.265.265 0 00.181-.251V3.705a.265.265 0 00-.18-.25l-.807-.27a3.17 3.17 0 00-.132-.317l.38-.761a.265.265 0 00-.05-.306l-.748-.748a.265.265 0 00-.305-.05l-.758.38a3.173 3.173 0 00-.321-.133L5.014.445a.265.265 0 00-.252-.18zm.528 2.116c1.02 0 1.854.834 1.854 1.853 0 1.02-.834 1.852-1.854 1.852a1.855 1.855 0 01-1.851-1.852c0-1.02.832-1.853 1.851-1.853z' />
                  </svg>
               </a>
            </li>
         </ol>
      </nav>
   )
}

function WorkExperiences() {
   const { work } = data
   return work.map((job) => (
      <div key={job.date}>
         <div className='flex items-center pr-6 overflow-hidden rounded-lg shadow-md h-11'>
            <div className='px-3 py-2 bg-blue-300'>
               <svg
                  fill='none'
                  className='text-gray-600 w-7'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='3'
                  viewBox='0 0 24 24'
               >
                  <path d='M6 3v12' />
                  <circle cx='18' cy='6' r='3' />
                  <circle cx='6' cy='18' r='3' />
                  <path d='M18 9a9 9 0 01-9 9' />
               </svg>
            </div>

            <h1 className='px-4 py-2 text-lg whitespace-pre text-bluegray-500'>
               {job.company}/<span className='font-semibold'>{job.title}</span>
            </h1>
         </div>
         <ol className='ml-12 text-sm divide-y-2 rounded-lg shadow-md divide-bluegray-100'>
            {job.bullets.map((bullet) => (
               <li key={bullet.substring(0, 9)} className='px-5 py-2'>
                  {bullet}
               </li>
            ))}
         </ol>
      </div>
   ))
}
