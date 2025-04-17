import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Liên hệ với chúng tôi</h1>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-muted-foreground">
                Hãy liên hệ với chúng tôi để được tư vấn và báo giá chi tiết về sản phẩm và dịch vụ.
              </p>
            </div>
          </div>
        </div>

        <ContactSection />

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Bản đồ</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4737883168486!2d105.78956841476357!3d21.050062985984825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd484c53%3A0x4c3fb31c3a2d1ac7!2zNDIgVMOibiBYdcOibiwgWHXDom4gxJDhu4tuaCwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650123456789!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
