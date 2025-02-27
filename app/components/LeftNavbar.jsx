import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '@/public/Home.svg';
import AboutIcon from '@/public/Activity.svg';
import ServicesIcon from '@/public/Setting.svg';

const LeftNavbar = () => {
  return (
    <div className="w-32 h-full bg-[#272932] text-white p-4">
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
          <li className="mb-4 flex items-center gap-2 bg-[#0a0a0a]  p-3 left-0  ">
            <Image src={HomeIcon} alt="Home" width={24} height={24} />
            <Link href="/" className="text-white hover:text-gray-400">
            </Link>
          </li>
        <ul>
          <li className="mb-4 flex items-center gap-2">
            <Image src={AboutIcon} alt="About" width={24} height={24} />
            <Link href="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li className="mb-4 flex items-center gap-2">
            <Image src={ServicesIcon} alt="Services" width={24} height={24} />
            <Link href="/services" className="text-white hover:text-gray-400">
              Services
            </Link>
                  </li>
                  <li className="mb-4 flex items-center gap-2">
            <Image src={ServicesIcon} alt="Services" width={24} height={24} />
            <Link href="/services" className="text-white hover:text-gray-400">
              Services
            </Link>
                  </li>
                  <li className="mb-4 flex items-center gap-2">
            <Image src={ServicesIcon} alt="Services" width={24} height={24} />
            <Link href="/services" className="text-white hover:text-gray-400">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftNavbar;
