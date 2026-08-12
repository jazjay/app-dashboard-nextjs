import AcmeLogo from '@/app/ui/acme-logo'
import ByJheroes from '@/app/ui/by-jheroes'
import LoginForm from '@/app/ui/login-form'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Login'
}

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <AcmeLogo />
        <Suspense>
          <LoginForm />
        </Suspense>
        <div className="hidden md:block">
          <ByJheroes />
        </div>
      </div>
    </main>
  )
}
