// components/LeftNavbar.jsx
import Image from 'next/image';
import Link from 'next/link';

const LeftNavbar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <div className="flex items-center mb-8">
        <Image
          src="/path/to/logo.png" // Update this path to your image
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="ml-3 text-xl font-semibold">Brand</span>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about">
              About
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/services">
              Services
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/contact">
             Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftNavbar;
