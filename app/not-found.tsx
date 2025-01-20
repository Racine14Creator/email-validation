"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='card flex flex-col gap-5'>
        <h1 className='font-bold text-4xl'>404</h1>
        <p className='text-2xl'>Not Found</p>
        <Link
          href='/'
          className='bg-white text-stone-800 px-10 py-2 rounded-md'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
