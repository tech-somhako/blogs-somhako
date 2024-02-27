import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { cx } from "@/src/utils"
import Header from "@/src/components/Header"
import Footer from "@/src/components/Footer"
import { siteMetaData } from "@/src/utils/siteMetaData"
import ThemeScript from "../components/ThemeScript"
import NextTopLoader from "nextjs-toploader"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-in" })
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-mr" })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title, // a default is required when creating a template
  },

  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetaData.title,
    images: [siteMetaData.socialBanner], // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
   
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, "font-mr bg-white dark:bg-dark")}>
        <NextTopLoader
          color={"#ffdb4d"}
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow={false}
          zIndex={1600}
          showAtBottom={false}
        />
        <ThemeScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
