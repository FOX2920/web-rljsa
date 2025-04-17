import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Không tìm thấy trang</h2>
        <p className="mt-2 text-muted-foreground">Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
        <Button className="mt-8" asChild>
          <Link href="/">Quay lại trang chủ</Link>
        </Button>
      </div>
      <Footer />
    </>
  )
}
