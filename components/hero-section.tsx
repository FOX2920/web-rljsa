import { Button } from "@/components/ui/button"
import Link from "next/link"
import { OptimizedImage } from "./optimized-image"

export function HeroSection() {
  return (
    <div className="relative h-screen min-h-[600px] w-full">
      <OptimizedImage
        src="/images/leather-materials.png"
        alt="Royal Lotus Hero"
        fill
        className="object-cover"
        priority // Mark as priority for faster loading
      />
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="relative h-32 w-32 mx-auto mb-6">
            <OptimizedImage
              src="/images/royal-lotus-logo.png"
              alt="Royal Lotus Logo"
              fill
              className="object-contain"
              priority // Mark as priority for faster loading
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">ROYAL LOTUS</h1>
          <p className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto">
            Nhà cung cấp giả da công nghiệp hàng đầu cho ngành nội thất ô tô, xe máy, sofa và nội thất trong nhà, giày
            dép, cặp túi balo vali
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/san-pham">Xem sản phẩm</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white" asChild>
              <Link href="/lien-he">Liên hệ ngay</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
