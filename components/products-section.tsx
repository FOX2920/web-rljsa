import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { productImages } from "./product-images"

export function ProductsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sản phẩm của chúng tôi</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Chúng tôi cung cấp đa dạng các loại giả da công nghiệp và sản phẩm từ da công nghiệp cho nhiều ngành khác
            nhau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productImages.slice(0, 6).map((product) => (
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

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/san-pham">Xem tất cả sản phẩm</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
