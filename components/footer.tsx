import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-12 w-12">
                <Image src="/images/royal-lotus-logo.png" alt="Royal Lotus Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">ROYAL LOTUS</h3>
                <p className="text-xs text-muted-foreground">XUẤT NHẬP KHẨU JSC</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Cung cấp sỉ lẻ các loại giả da công nghiệp, nguyên phụ liệu cho ngành nội thất ô tô, xe máy, sofa và nội
              thất trong nhà, giày dép, cặp túi balo vali.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-sm text-muted-foreground hover:text-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-sm text-muted-foreground hover:text-primary">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-sm text-muted-foreground hover:text-primary">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-sm text-muted-foreground hover:text-primary">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/san-pham/da-cong-nghiep" className="text-sm text-muted-foreground hover:text-primary">
                  Da công nghiệp
                </Link>
              </li>
              <li>
                <Link href="/san-pham/noi-that-o-to" className="text-sm text-muted-foreground hover:text-primary">
                  Nội thất ô tô
                </Link>
              </li>
              <li>
                <Link href="/san-pham/noi-that-xe-may" className="text-sm text-muted-foreground hover:text-primary">
                  Nội thất xe máy
                </Link>
              </li>
              <li>
                <Link href="/san-pham/sofa" className="text-sm text-muted-foreground hover:text-primary">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="/san-pham/giay-dep" className="text-sm text-muted-foreground hover:text-primary">
                  Giày dép
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  42, ngõ 87 Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">HTX Xuân Sơn, Xã Tân Dân, Sóc Sơn, Hà Nội</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:0911219966" className="text-sm text-muted-foreground hover:text-primary">
                  091.121.9966
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:royallotusjsc@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                  royallotusjsc@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="https://www.facebook.com/daPVC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  facebook.com/daPVC
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU ROYAL LOTUS. Mã số thuế: 0107484000
          </p>
        </div>
      </div>
    </footer>
  )
}
