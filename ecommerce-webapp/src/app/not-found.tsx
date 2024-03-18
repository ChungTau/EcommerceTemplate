import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mb-4">
        <Image src="/images/error404.png" width={400} height={400} alt="Error 404" />
      </div>
      <Link href="/">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-800 px-4 py-2 rounded w-full max-w-xs text-center">GO TO HOMEPAGE</button>
      </Link>
    </div>
  );
}