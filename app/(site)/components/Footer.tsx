'use client'
import { HiHome } from 'react-icons/hi'
import { HiChatAlt } from 'react-icons/hi'
import { HiUsers } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'

// import { useRouter } from 'next/router';

interface SidebarProps {
  className?: string;
}

 const Footer: React.FC<HeaderProps> = ({ className }) => {
  return ( 
    <div 
        className={twMerge(`
          bg-black
          h-fit 
          bg-gradient-to-b
          from-sky-800 
          p-4
          fixed 
          justify-between 
          w-full 
          bottom-0 
          z-40 
          flex 
          items-center 
          md:hidden
          lg:hidden
        `,
         className
        )}
        >
          <div className='
              flex 
              w-full  
              gap-x-2 
              items-center
              justify-between'
          >
              <button
            onClick={() => {}}
            className='
              bg-white
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-none
              '
              >
                <HiUsers className='text-black select-none' size={20} />               
              </button>
              <button
                onClick={() => {}}
                className='
                  bg-white
                  rounded-full
                  p-2
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-75
                  transition
                  select-none
                '
              >
                <HiHome className='text-black select-none' size={20} />
              </button>
              <button
                onClick={() => {}}
                className='
                  bg-white
                  rounded-full
                  p-2
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-75
                  transition
                  select-none
                '
              >
                <HiChatAlt className='text-black select-none' size={20} />
              </button>
            </div>
        </div>
   );
}
 
export default Footer
