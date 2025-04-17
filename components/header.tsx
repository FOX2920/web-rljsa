"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/gioi-thieu" },
  { name: "Sản phẩm", href: "/san-pham" },
  { name: "Dịch vụ", href: "/dich-vu" },
  { name: "Liên hệ", href: "/lien-he" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-12">
              <Image src="/images/royal-lotus-logo.png" alt="Royal Lotus Logo" fill className="object-contain" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">ROYAL LOTUS</h1>
              <p className="text-xs text-muted-foreground">XUẤT NHẬP KHẨU JSC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm">
              <Link href="/lien-he">Liên hệ ngay</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-2",
                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="w-full">
                <Link href="/lien-he">Liên hệ ngay</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
