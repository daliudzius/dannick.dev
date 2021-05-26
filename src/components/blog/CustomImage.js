import Image from 'next/image'

export default function CustomImage({ alt, src, width, height, priority }) {
   return (
      <div className='my-5'>
         <Image
            alt={alt}
            src={src}
            width={width}
            height={height}
            className='rounded'
            priority={priority}
         />
      </div>
   )
}
