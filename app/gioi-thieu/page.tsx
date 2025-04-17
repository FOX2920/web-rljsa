import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Giới thiệu về Royal Lotus</h1>
              <div className="h-1 w-20 bg-primary mb-8"></div>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS</h2>
                <p className="text-muted-foreground mb-4">
                  CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS được thành lập vào ngày 23/06/2016, với mã số thuế
                  0107484000. Chúng tôi là đơn vị chuyên cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu cho
                  ngành nội thất ô tô, xe máy, sofa và nội thất trong nhà, giày dép, cặp túi balo vali.
                </p>
                <p className="text-muted-foreground mb-4">
                  Với nhiều năm kinh nghiệm trong lĩnh vực sản xuất và cung cấp giả da công nghiệp, chúng tôi tự hào là
                  đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước.
                </p>
                <p className="text-muted-foreground">
                  Chúng tôi có xưởng gia công bồi dán mút, eva, và xưởng may tại Hà Nội, đáp ứng mọi yêu cầu của khách
                  hàng với chất lượng cao và giá cả cạnh tranh.
                </p>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image src="/images/leather-materials.png" alt="Royal Lotus Factory" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Tầm nhìn & Sứ mệnh</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Tầm nhìn</h3>
                <p className="text-muted-foreground">
                  Trở thành nhà cung cấp giả da công nghiệp hàng đầu tại Việt Nam, mang đến cho khách hàng những sản
                  phẩm chất lượng cao với giá cả cạnh tranh nhất.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Sứ mệnh</h3>
                <p className="text-muted-foreground">
                  Cung cấp các sản phẩm giả da công nghiệp chất lượng cao, đáp ứng mọi nhu cầu của khách hàng, góp phần
                  vào sự phát triển bền vững của ngành công nghiệp Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Giá trị cốt lõi</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
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
                <h3 className="text-lg font-bold mb-2">Chất lượng</h3>
                <p className="text-sm text-muted-foreground">
                  Cam kết cung cấp sản phẩm chất lượng cao, đáp ứng mọi yêu cầu khắt khe của khách hàng.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Khách hàng</h3>
                <p className="text-sm text-muted-foreground">
                  Lấy khách hàng làm trung tâm, luôn lắng nghe và đáp ứng mọi nhu cầu của khách hàng.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Đổi mới</h3>
                <p className="text-sm text-muted-foreground">
                  Không ngừng đổi mới, cải tiến sản phẩm và dịch vụ để đáp ứng nhu cầu ngày càng cao của thị trường.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Thông tin doanh nghiệp</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Tên công ty:</span>
                  <span className="md:col-span-2">CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Tên quốc tế:</span>
                  <span className="md:col-span-2">ROYAL LOTUS.,JSC</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Tên viết tắt:</span>
                  <span className="md:col-span-2">ROYAL LOTUS.,JSC</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Mã số thuế:</span>
                  <span className="md:col-span-2">0107484000</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Loại hình pháp lý:</span>
                  <span className="md:col-span-2">Công ty cổ phần</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Ngày cấp:</span>
                  <span className="md:col-span-2">23/06/2016</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Địa chỉ trụ sở:</span>
                  <span className="md:col-span-2">
                    Số 42 TT 361 phố Tân Xuân, Phường Xuân Đỉnh, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam
                  </span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Đại diện Pháp luật:</span>
                  <span className="md:col-span-2">ĐỒNG MINH ĐẠI</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
