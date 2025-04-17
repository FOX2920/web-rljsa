import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ProductCategories } from "@/components/product-categories"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <ProductsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
