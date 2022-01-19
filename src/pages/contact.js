import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Home() {
   return (
      <div className='flex flex-col min-h-screen'>
         <Head>
            <title>Contact Me</title>
            <meta name='description' content='Contact form.' />
         </Head>
         <Navbar />
         <main className='flex flex-col flex-grow p-8 space-y-2 text-bluegray-800 dark:text-bluegray-50'>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
            <p>Send me an email if you have a question for me </p>
            <p>...or a problem with me at a deep, personal level.</p>
            <ContactForm />
         </main>
         <Footer />
      </div>
   )
}
