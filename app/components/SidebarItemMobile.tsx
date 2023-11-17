import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItemMobile: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(`
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-md 
        font-medium
        cursor-pointer
        py-1
        hover:text-neutral-500
        transition
        text-neutral-400
        dark:(hover:text-white)
        p-2`,
        active && "text-neutral-900"
        )
      }
    >
      <Icon size={26} />
      <p className="md:hidden truncate w-100">{label}</p>
    </Link>
   );
}

export default SidebarItemMobile;