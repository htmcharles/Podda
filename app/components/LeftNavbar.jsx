"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@/public/Home.svg';
import AboutIcon from '@/public/Activity.svg';
import GameIcon from '@/public/Game.svg';
import ChartIcon from '@/public/Chart.svg';
import ProfileIcon from '@/public/Profile.svg';
import SettingIcon from '@/public/Setting.svg';
import LogoutIcon from '@/public/Logout.svg';
import FrameIcon from '@/public/Frame.svg';
import GroupIcon from '@/public/Group.svg';


const navItems = [
    { icon: HomeIcon, href: '/' },
    { icon: GameIcon, href: '/game' },
    { icon: ChartIcon, href: '/charts' },
    { icon: AboutIcon, href: '/about' },
    { icon: GroupIcon, href: '/group' },
    { icon: ProfileIcon, href: '/profile' },
    { icon: FrameIcon, href: '/frame' },
    { icon: SettingIcon, href: '/services' },
    { icon: LogoutIcon, href: '/logout' },
];

const LeftNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[100px] h-full bg-[#272932] text-white pl-4 fixed left-0">
      <div className="flex items-center mb-8">
        <span className="text-xl font-semibold">Logo</span>
      </div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`mb-4 flex items-center gap-2 p-3 transition-all duration-300 w-full
                    ${pathname === item.href ? 'bg-black rounded-l-full' : ''}`}
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
