"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@/public/Home.svg';
import AboutIcon from '@/public/Activity.svg';
import ServicesIcon from '@/public/Setting.svg';
import ChartIcon from '@/public/Chart.svg';
import FileIcon from '@/public/file.svg';
import FrameIcon from '@/public/Frame.svg';

const navItems = [
  { icon: HomeIcon, href: '/' },
  { icon: AboutIcon, href: '/about' },
  { icon: ServicesIcon, href: '/services' },
  { icon: ChartIcon, href: '/charts' },
  { icon: FileIcon, href: '/files' },
  { icon: FrameIcon, href: '/frames' },
];

const LeftNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-32 h-full bg-[#272932] text-white pl-4 fixed left-0">
      <div className="flex items-center mb-8">
        <Image
          src="/path/to/logo.png" // Update the logo path if necessary
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-xl font-semibold">Brand</span>
      </div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`mb-4 flex items-center gap-2 p-3 transition-all duration-300 w-full
                    ${pathname === item.href ? 'bg-black rounded-l-full' : ''}
                    ${index - 1 ? 'rounded-tr-lg' : ''}
                    ${index === selectedIndex + 1 ? 'rounded-br-lg' : ''}`}
            >
              <Link href={item.href} className="flex items-center gap-2 w-full">
                <Image src={item.icon} alt="Icon" width={24} height={24} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftNavbar;
