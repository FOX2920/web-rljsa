import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Dịch vụ của chúng tôi</h1>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-muted-foreground">
                Chúng tôi cung cấp các dịch vụ gia công bồi dán mút, eva và dịch vụ may theo yêu cầu với chất lượng cao
                và giá cả cạnh tranh.
              </p>
            </div>
          </div>
        </div>

        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
