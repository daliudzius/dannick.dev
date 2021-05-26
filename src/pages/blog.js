import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export default function Index({ posts }) {
   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>My Blog</title>
            <meta name='robots' content='all' />
            <meta
               name='description'
               content='Welcome to my blog page. Here I will house articles I write about tech, development, electronics tinkering, etc. Enjoy my small slice of the internet!'
            />
            <meta property='og:site_name' content='Dannick Liudzius' />
            <meta
               property='og:description'
               content='Welcome to my blog page. Here I will house articles I write about tech, development, electronics tinkering, etc. Enjoy my small slice of the internet!'
            />
            <meta property='og:title' content='My Blog' />
         </Head>
         <Navbar />
         <main className='flex-grow w-full p-8 overflow-y-auto text-bluegray-800 dark:text-bluegray-50'>
            <h1 className='mb-4 text-4xl font-bold'>My Blog</h1>
            <p className='mb-10 dark:text-bluegray-200'>
               You can't have a personal website without a blog, right? Here
               lies a chunk of the web where I can hastily jot down notes about
               my projects while they're fresh. <br /> Tread with vigilance.
            </p>
            <ul className='space-y-5'>
               {posts.map((post) => (
                  <li key={post.filePath}>
                     <Link
                        as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                        href={`/blog/[slug]`}
                     >
                        <a>
                           <h2 className='text-lg font-bold'>
                              {post.data.title}
                           </h2>
                           <p className='text-bluegray-600 dark:text-bluegray-400'>
                              {post.data.description}
                           </p>
                        </a>
                     </Link>
                  </li>
               ))}
            </ul>
         </main>
         <Footer />
      </div>
   )
}

export function getStaticProps() {
   const posts = postFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)

      return {
         content,
         data,
         filePath,
      }
   })

   return { props: { posts } }
}
