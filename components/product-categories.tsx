import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: 1,
    name: "Da công nghiệp",
    image: "/images/leather-materials.png",
    description: "Đa dạng các loại da công nghiệp PVC, PU cao cấp với nhiều màu sắc và họa tiết",
    link: "/san-pham/da-cong-nghiep",
  },
  {
    id: 2,
    name: "Nội thất ô tô",
    image: "/images/car-interior.png",
    description: "Bọc ghế ô tô da công nghiệp cao cấp, sang trọng và bền bỉ",
    link: "/san-pham/noi-that-o-to",
  },
  {
    id: 3,
    name: "Sofa & Nội thất",
    image: "/images/leather-sofa.png",
    description: "Sofa da công nghiệp cao cấp, thiết kế hiện đại và sang trọng",
    link: "/san-pham/sofa",
  },
  {
    id: 4,
    name: "Túi xách & Cặp da",
    image: "/images/handbags.png",
    description: "Túi xách và cặp da công nghiệp với nhiều màu sắc và kiểu dáng thời trang",
    link: "/san-pham/cap-tui",
  },
]

export function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Danh mục sản phẩm</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Chúng tôi cung cấp đa dạng các loại giả da công nghiệp và sản phẩm từ da công nghiệp cho nhiều ngành khác
            nhau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button asChild>
                  <Link href={category.link}>Xem chi tiết</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
