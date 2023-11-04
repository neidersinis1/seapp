"use client";
import { useCallback, useState } from 'react';

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { HiMenu } from 'react-icons/hi'


import { BiSearch } from "react-icons/bi";
import MobileMenu from './MobileMenu';


import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
  const [ShowMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const router = useRouter();
 

  const handleLogout = async () => {
    // const { error } = await supabaseClient.auth.signOut();
    // player.reset();
    router.refresh();

    // if (error) {
    //   toast.error(error.message);
    // }
  }

  return (
    <div
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-sky-800 
        p-4
        `,
        className
      )}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button 
            onClick={() => router.back()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button 
            onClick={() => router.forward()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
        <button
            onClick={toggleMobileMenu}
            className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              transition
              select-none
            '
          >
            <HiMenu className='text-black select-none' size={20} />
            <MobileMenu visible={ShowMobileMenu} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {/* {user ? (
            <div className="flex gap-x-4 items-center">
              <Button 
                onClick={handleLogout} 
                className="bg-white px-6 py-2"
              >
                Logout
              </Button>
              <Button 
                onClick={() => router.push('/account')} 
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button 
                  onClick={authModal.onOpen} 
                  className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button 
                  onClick={authModal.onOpen} 
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )} */}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;

// 'use client'
// import { useCallback, useState } from 'react';
// import { twMerge } from 'tailwind-merge'
// import MobileMenu from './MobileMenu';
// import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
// import { HiMenu } from 'react-icons/hi'

// // import Logo from './Logo'
// interface HeaderProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const Header: React.FC<HeaderProps> = ({
//   children,
//   className,
// }) => {
// const [ShowMobileMenu, setShowMobileMenu] = useState(false)

//   const toggleMobileMenu = useCallback(() => {
//     setShowMobileMenu((current) => !current);
//   }, []);

//   return (
//     <div
//       className={twMerge(`
//         h-fit 
//         bg-gradient-to-b 
//         from-sky-800 
//         p-2
//         `,
//       className
//       )}
//     >
//       <div className=' mb-4 flex items-center justify-between'>
//         <div className='hidden md:flex gap-x-2 items-center'>
//           <button
//             onClick={() => {}}
//             className='
//               rounded-full
//               bg-black
//               flex
//               items-center
//               justify-center
//               cursor-pointer
//               hover:opacity-75
//               transition
//               select-none
//             '
//           >
//             <RxCaretLeft className='text-white select-none' size={35} />
//           </button>
//           <button
//             onClick={() => {}}
//             className='
//               rounded-full
//               bg-black
//               flex
//               items-center
//               justify-center
//               cursor-pointer
//               hover:opacity-75
//               transition
//               select-nonev
//             '
//           >
//             <RxCaretRight className='text-white select-none' size={35} />
//           </button>
//         </div>
//         <div className='flex w-full justify-between  md:hidden gap-x-2 items-center'>
//           <div className='-ml-5 select-none'>
//             {/* <Link to={'/'}>
//               <Logo />
//             </Link> */}
//           </div>
//           <button
//             onClick={toggleMobileMenu}
//             className='
//               rounded-full
//               p-2
//               bg-white
//               flex
//               items-center
//               justify-center
//               cursor-pointer
//               transition
//               select-none
//             '
//           >
//             <HiMenu className='text-black select-none' size={20} />
//             <MobileMenu visible={ShowMobileMenu} />
//           </button>
//         </div>
//       </div>
//       {children}
//     </div>
//   )
// }

// export default Header
