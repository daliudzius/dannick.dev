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
         <main className='flex flex-col flex-grow p-8 space-y-2 overflow-y-auto text-bluegray-800 dark:text-bluegray-50'>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
            <p>Shoot me an email if you have a question or personal beef.</p>
            <ContactForm />
         </main>

         <Footer />
      </div>
   )
}
