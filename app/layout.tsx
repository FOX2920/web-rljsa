import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap", // Improves first load performance
})

export const metadata = {
  title: "ROYAL LOTUS - Nhà cung cấp giả da công nghiệp hàng đầu",
  description:
    "Cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu cho ngành nội thất ô tô, xe máy, sofa và nội thất trong nhà, giày dép, cặp túi balo vali.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Updated Zalo verification meta tag with the new content value */}
        <meta name="zalo-platform-site-verification" content="GuFaUBkbD7bwfxH4yBO5RmcQX73bx5KcCpOt" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'