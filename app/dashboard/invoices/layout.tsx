import { APP_TITLE, INVOICES_TITLE } from '@/app/lib/metadata'

export const metadata = {
  title: {
    template: `%s | ${INVOICES_TITLE} | ${APP_TITLE}`,
    default: `${INVOICES_TITLE}`
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
