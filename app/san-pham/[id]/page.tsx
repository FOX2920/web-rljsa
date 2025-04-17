import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { productImages } from "@/components/product-images"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = productImages.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <main>
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div>
              <div className="mb-2">
                <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Đặc điểm sản phẩm:</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Chất liệu: Da công nghiệp cao cấp</li>
                    <li>Độ bền cao, chống trầy xước</li>
                    <li>Dễ dàng vệ sinh và bảo quản</li>
                    <li>Đa dạng màu sắc và họa tiết</li>
                    <li>Phù hợp cho nhiều mục đích sử dụng</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/lien-he">Liên hệ đặt hàng</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/san-pham">Xem sản phẩm khác</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
