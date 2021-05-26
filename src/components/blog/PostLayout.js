import Head from 'next/head'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
import { parseISO, format } from 'date-fns'
import Footer from '../../components/Footer'

export default function PostLayout({ children, frontMatter }) {
   const router = useRouter()

   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>{frontMatter.title}</title>
            <meta name='robots' content='all' />
            <meta name='description' content={frontMatter.description} />
            <meta property='og:site_name' content='Dannick Liudzius' />
            <meta property='og:description' content={frontMatter.description} />
            <meta property='og:title' content={frontMatter.title} />
            <link
               rel='canonical'
               href={`https://dannick.dev${router.asPath}`}
            />
         </Head>
         <Navbar />
         <main className='flex-grow w-full px-8'>
            <article className='flex flex-col items-start justify-center w-full max-w-2xl p-8 mx-auto'>
               <h1 className='text-4xl font-bold bg-clip-text gradient-purple-pink dark:text-transparent text-bluegray-800'>
                  {frontMatter.title}
               </h1>
               <div className='mt-2 text-sm text-bluegray-600 dark:text-bluegray-400'>
                  Dannick Liudzius •{' '}
                  {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
               </div>
               <div className='w-full prose dark:prose-dark'>{children}</div>
            </article>
         </main>
         <Footer />
      </div>
   )
}
