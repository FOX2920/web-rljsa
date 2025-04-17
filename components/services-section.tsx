import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dịch vụ của chúng tôi</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Chúng tôi cung cấp các dịch vụ gia công bồi dán mút, eva và dịch vụ may theo yêu cầu với chất lượng cao và
            giá cả cạnh tranh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Xưởng gia công bồi dán mút, eva</h3>
            <p className="text-muted-foreground mb-4">
              Chúng tôi có xưởng gia công bồi dán mút, eva chuyên nghiệp tại Hà Nội, đáp ứng mọi yêu cầu của khách hàng
              với công nghệ hiện đại và đội ngũ nhân viên lành nghề.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Bồi dán mút cho nội thất ô tô</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Bồi dán eva cho nội thất xe máy</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Bồi dán mút cho sofa và nội thất trong nhà</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/dich-vu/gia-cong-boi-dan">Tìm hiểu thêm</Link>
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Xưởng may theo yêu cầu</h3>
            <p className="text-muted-foreground mb-4">
              Chúng tôi có xưởng may chuyên nghiệp tại Hà Nội, nhận may theo yêu cầu các sản phẩm từ da công nghiệp với
              chất lượng cao và giá cả cạnh tranh.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">May vỏ bọc ghế ô tô theo yêu cầu</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">May vỏ bọc yên xe máy theo yêu cầu</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">May túi xách, balo, vali theo yêu cầu</span>
              </li>
            </ul>
            <Button variant="outline" asChild>
              <Link href="/dich-vu/may-theo-yeu-cau">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/dich-vu">Xem tất cả dịch vụ</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
