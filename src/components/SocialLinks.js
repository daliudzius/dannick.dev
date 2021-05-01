export default function SocialLinks() {
   return (
      <div className='text-current'>
         <a
            href='https://github.com/daliudzius'
            className='inline-flex items-center w-24 h-10 mr-5'
         >
            GitHub
            <svg
               fill='none'
               stroke='currentColor'
               viewBox='0 0 14 14'
               className='inline-block w-4 ml-2'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11 7.667v4A1.334 1.334 0 019.667 13H2.333A1.334 1.334 0 011 11.667V4.333A1.333 1.333 0 012.333 3h4M9 1h4v4M5.667 8.333L13 1'
               />
            </svg>
         </a>
         <a
            href='https://www.linkedin.com/in/dliudzius/'
            className='inline-flex items-center w-24 h-10'
         >
            LinkedIn
            <svg
               fill='none'
               stroke='currentColor'
               viewBox='0 0 14 14'
               className='inline-block w-4 ml-2'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11 7.667v4A1.334 1.334 0 019.667 13H2.333A1.334 1.334 0 011 11.667V4.333A1.333 1.333 0 012.333 3h4M9 1h4v4M5.667 8.333L13 1'
               />
            </svg>
         </a>
      </div>
   )
}
