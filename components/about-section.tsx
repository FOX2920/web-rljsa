import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Giới thiệu về Royal Lotus</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground mb-6">
            CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS là đơn vị chuyên cung cấp sỉ lẻ các loại giả da công nghiệp,
            nguyên phụ liệu cho nhiều ngành công nghiệp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Chất lượng cao</h3>
            <p className="text-muted-foreground mb-4">
              Chúng tôi cam kết cung cấp các sản phẩm giả da công nghiệp với chất lượng cao nhất, đáp ứng mọi yêu cầu
              khắt khe của khách hàng.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Giá cả cạnh tranh</h3>
            <p className="text-muted-foreground mb-4">
              Với mạng lưới nhà cung cấp rộng khắp, chúng tôi luôn đảm bảo mức giá cạnh tranh nhất trên thị trường cho
              khách hàng.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Dịch vụ chuyên nghiệp</h3>
            <p className="text-muted-foreground mb-4">
              Đội ngũ nhân viên giàu kinh nghiệm, tận tâm sẽ hỗ trợ khách hàng từ khâu tư vấn đến hoàn thiện sản phẩm
              theo yêu cầu.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/gioi-thieu">Tìm hiểu thêm</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
