import Link from 'next/link'

export default function Footer() {
   return (
      <footer className='flex items-center justify-center w-screen h-10'>
         <p>
            Built by&nbsp;
            <a
               href='https://github.com/daliudzius/dannick.dev'
               className='text-purple-600 border-b border-current border-dotted dark:text-purple-400 hover:border-solid'
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
               daliudzius
            </a>
            &nbsp;|&nbsp;
            <Link href='/stack'>
               <a className='border-b border-current border-dotted hover:border-solid'>
                  Tech stack
               </a>
            </Link>
         </p>
      </footer>
   )
}
