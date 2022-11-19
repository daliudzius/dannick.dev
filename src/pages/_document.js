import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      return (
         <Html lang='en'>
            <Head>
               <script
                  async
                  defer
                  data-website-id='74f2fb17-b88a-4271-a407-d0b17dfc6689'
                  src='https://umami-analytics-dannickdev.vercel.app/umami.js'
               ></script>
               <link
                  rel='preload'
                  href='/fonts/inter-var-latin.woff2'
                  as='font'
                  type='font/woff2'
                  crossOrigin='anonymous'
               />
            </Head>
            <body className='bg-theme'>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
