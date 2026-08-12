import Image from 'next/image'
import Link from 'next/link'

export default function ByJheroes({ logo }: { logo?: boolean }) {
  const img = logo ? 'black' : 'white'

  return (
    <Link
      href="https://jhero.es"
      className="flex justify-center items-center rounded-md p-2 hover:bg-blue-400 md:hover:bg-cyan-100"
    >
      <Image
        src={`/jheroes/logo-${img}.png`}
        alt={`logo-${img}`}
        width={24}
        height={24}
      />
      <span className="p-1 text-xs">by Jheroes</span>
    </Link>
  )
}
