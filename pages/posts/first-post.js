import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1 className='text-indigo-300'>Read this page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        priority
        src="/images/myPhoto.jpeg"
        height={144}
        width={144}
        alt="Your Name">
      </Image>
    </>
  );
}
