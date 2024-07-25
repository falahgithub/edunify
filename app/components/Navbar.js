// app/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white font-bold text-lg mx-2">Edunify</p>
        </Link>
        <Link href='/addSchool'>
        <button
          className="focus:outline-none bg-slate-200 rounded-md p-2"
          type="button"
        >
          Add School
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
