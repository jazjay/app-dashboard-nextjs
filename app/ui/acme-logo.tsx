import ByJheroes from '@/app/ui/by-jheroes'
import { lusitana } from '@/app/ui/fonts'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function AcmeLogo() {
  return (
    <div className="flex w-full h-full mb-2 items-end justify-between leading-none text-white rounded-md bg-blue-600 p-4 md:h-40">
      <Link href="/" className="pl-2 pr-3 py-1 rounded-md hover:bg-blue-400">
        <div className={`${lusitana.className} flex flex-row items-center`}>
          <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
          <p className="text-[44px]">Acme</p>
        </div>
      </Link>
      <div className="block md:hidden">
        <ByJheroes logo />
      </div>
    </div>
  )
}
