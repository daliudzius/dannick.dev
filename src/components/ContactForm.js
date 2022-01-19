import { useEffect, useState } from 'react'

export default function ContactForm() {
   const [validationMessage, setValidationMessage] = useState('')
   const [canSubmit, setCanSubmit] = useState(true)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   const onSubmitSuccess = () => {
      setValidationMessage('Message successfully sent!')
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
      console.log(data)
      const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'multipart/form-data' },
         body: JSON.stringify(data),
      })

      await response.json()
      onSubmitSuccess()
   }

   return (
      <div>
         {validationMessage && (
            <span
               className={
                  'block text-base md:text-xl bg-green-200 dark:text-green-700 px-3 py-2 rounded-md mb-10 text-center'
               }
            >
               {validationMessage}
            </span>
         )}

         <form onSubmit={handleSubmit}>
            <div className='flex flex-col my-8'>
               <label className='mb-1'>Name</label>
               <input
                  required
                  type='text'
                  name='name'
                  onChange={(e) => setName(e.target.value)}
               />
            </div>

            <div className='flex flex-col mb-8'>
               <label className='mb-1'>Email</label>
               <input
                  required
                  type='email'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>

            <div className='flex flex-col mb-8'>
               <label className='mb-1'>Message:</label>
               <textarea
                  required
                  name='message'
                  rows={4}
                  type='text'
                  onChange={(e) => setMessage(e.target.value)}
               />
            </div>

            <div className='flex flex-col items-start mb-4'>
               <button type='submit' className='' disabled={!canSubmit}>
                  Send
               </button>
            </div>
         </form>
      </div>
   )
}
