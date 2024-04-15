import type { ReactNode } from 'react'
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <main className={`${inter.variable} font-sans h-full`}>
      {children}
    </main>
  )
}
