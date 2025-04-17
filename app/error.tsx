"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Đã xảy ra lỗi</h1>
      <p className="mt-4 text-muted-foreground">
        Đã có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ với chúng tôi nếu lỗi vẫn tiếp tục.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button onClick={reset}>Thử lại</Button>
        <Button variant="outline" asChild>
          <Link href="/">Quay lại trang chủ</Link>
        </Button>
      </div>
    </div>
  )
}
