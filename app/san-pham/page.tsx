import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { productImages } from "@/components/product-images"
import { GallerySection } from "@/components/gallery-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Sản phẩm của chúng tôi</h1>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-muted-foreground">
                Chúng tôi cung cấp đa dạng các loại giả da công nghiệp và sản phẩm từ da công nghiệp cho nhiều ngành
                khác nhau.
              </p>
            </div>
          </div>
        </div>

        <GallerySection />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sản phẩm nổi bật</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productImages.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/san-pham/${product.id}`}>Xem chi tiết</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
