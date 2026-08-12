import ByJheroes from '@/app/ui/by-jheroes'
import { lusitana } from '@/app/ui/fonts'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AcmeLogo from './ui/acme-logo'

export const metadata: Metadata = {
  title: 'Welcome'
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <AcmeLogo />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-start rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 mt-10 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <div className="hidden mt-auto self-end md:block">
            <ByJheroes />
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  )
}
