import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ScrollProgress from "@/components/scroll-progress"
import FloatingElements from "@/components/floating-elements"
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mustafa Mahmoud - Flutter & Full Stack Developer",
  description:
    "Professional portfolio of Mustafa Mahmoud, a Flutter Developer and Full Stack Engineer specializing in scalable applications with clean architecture.",
  generator: "v0.app",
  keywords: ["Flutter", "Full Stack", "Developer", "React", ".NET Core", "Mobile App"],
  authors: [{ name: "Mustafa Mahmoud" }],
  openGraph: {
    title: "Mustafa Mahmoud - Flutter & Full Stack Developer",
    description: "Building scalable apps with clean architecture and modern tech",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_geist.className} bg-slate-950 text-foreground antialiased`}>
        <SmoothScrollWrapper>
          <FloatingElements />
          <ScrollProgress />
          {children}
        </SmoothScrollWrapper>
        <Analytics />
      </body>
    </html>
  )
}
