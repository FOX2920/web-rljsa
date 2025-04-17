import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Hãy liên hệ với chúng tôi để được tư vấn và báo giá chi tiết về sản phẩm và dịch vụ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-4">Thông tin liên hệ</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Văn phòng</p>
                    <p className="text-sm text-muted-foreground">42, ngõ 87 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Nhà xưởng</p>
                    <p className="text-sm text-muted-foreground">HTX Xuân Sơn, Xã Tân Dân, Sóc Sơn, Hà Nội</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">Điện thoại</p>
                    <a href="tel:0911219966" className="text-sm text-muted-foreground hover:text-primary">
                      091.121.9966
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:royallotusjsc@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      royallotusjsc@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">Giờ làm việc</p>
                    <p className="text-sm text-muted-foreground">Thứ 2 - Thứ 7: 8:00 - 17:30</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Theo dõi chúng tôi trên các mạng xã hội để cập nhật thông tin mới nhất về sản phẩm và dịch vụ.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/daPVC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Gửi tin nhắn cho chúng tôi</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Họ và tên
                  </label>
                  <Input id="name" placeholder="Nhập họ và tên của bạn" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Nhập email của bạn" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                  Số điện thoại
                </label>
                <Input id="phone" placeholder="Nhập số điện thoại của bạn" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                  Tiêu đề
                </label>
                <Input id="subject" placeholder="Nhập tiêu đề tin nhắn" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Nội dung
                </label>
                <Textarea id="message" placeholder="Nhập nội dung tin nhắn" rows={5} required />
              </div>
              <Button type="submit" className="w-full">
                Gửi tin nhắn
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
