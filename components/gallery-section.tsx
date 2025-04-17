import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GallerySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bộ sưu tập sản phẩm</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">Khám phá bộ sưu tập sản phẩm đa dạng và chất lượng cao của chúng tôi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/images/car-interior.png" alt="Nội thất ô tô" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">Nội thất ô tô</span>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/images/leather-sofa.png" alt="Sofa da" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">Sofa da</span>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/images/messenger-bag.png" alt="Cặp da" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">Cặp da</span>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/images/handbags.png" alt="Túi xách" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">Túi xách</span>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden md:col-span-2">
            <Image src="/images/leather-materials.png" alt="Da công nghiệp" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">Da công nghiệp</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/san-pham">Xem tất cả sản phẩm</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
