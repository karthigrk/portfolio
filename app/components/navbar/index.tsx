import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white rounded-lg dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GRK
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-base font-medium text-gray-700 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/tech" className="hover:underline me-4 md:me-6">
                Tech Stack
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:underline me-4 md:me-6">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
