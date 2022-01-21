import { useEffect, useState } from 'react'

export default function ContactForm() {
   const [validationMessage, setValidationMessage] = useState('')
   const [canSubmit, setCanSubmit] = useState(true)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   const onSubmitSuccess = () => {
      setValidationMessage('Successfully Sent!')
      setCanSubmit(true)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      setCanSubmit(false)

      const data = {
         name,
         email,
         message,
      }

      data.email = data.email.toLowerCase()
      const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'multipart/form-data' },
         body: JSON.stringify(data),
      })

      await response.json()
      if (response.status === 200) {
         onSubmitSuccess()
      }
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className='flex flex-col mt-6 mb-8'>
               <label className='mb-1 text-purple-500 dark:text-purple-400'>
                  Name
               </label>
               <input
                  required
                  type='text'
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                  className='pl-2 rounded dark:bg-gray-800 ring-1 ring-purple-300 dark:ring-transparent h-9'
               />
            </div>

            <div className='flex flex-col mb-8'>
               <label className='mb-1 text-purple-500 dark:text-purple-400'>
                  Email
               </label>
               <input
                  required
                  type='email'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  className='pl-2 rounded dark:bg-gray-800 ring-1 ring-purple-300 dark:ring-transparent h-9'
               />
            </div>

            <div className='flex flex-col mb-8'>
               <label className='mb-1 text-purple-500 dark:text-purple-400'>
                  Message
               </label>
               <textarea
                  required
                  name='message'
                  rows={4}
                  type='text'
                  onChange={(e) => setMessage(e.target.value)}
                  className='pt-2 pl-2 rounded dark:bg-gray-800 ring-1 ring-purple-300 dark:ring-transparent'
               />
            </div>

            <div className='flex items-start mb-4'>
               {validationMessage ? (
                  <span className='flex items-center justify-center px-3 text-lg bg-green-300 rounded-md dark:gradient-purple-pink h-9'>
                     {validationMessage}
                  </span>
               ) : (
                  <button
                     type='submit'
                     className='w-20 text-lg text-purple-600 transition duration-75 rounded outline-none ring-inset h-9 dark:text-white ring-2 dark:hover:ring-0 dark:focus:ring-white ring-purple-400 dark:ring-purple-500 dark:hover:gradient-purple-pink dark:focus:gradient-purple-pink focus:bg-purple-500 hover:bg-purple-500 focus:ring-purple-500 hover:ring-purple-500 hover:text-white focus:text-white'
                     disabled={!canSubmit}
                  >
                     Send
                  </button>
               )}
            </div>
         </form>
      </div>
   )
}
