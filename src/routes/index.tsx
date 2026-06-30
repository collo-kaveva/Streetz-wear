import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import FeaturedCategories from '@/components/featured-categories'
import TrendingSneakers from '@/components/trending-sneakers'
import FeaturedClothing from '@/components/featured-clothing'
import BestSellers from '@/components/best-sellers'
import NewArrivals from '@/components/new-arrivals'
import BrandLogos from '@/components/brand-logos'
import CustomerReviews from '@/components/customer-reviews'
import Newsletter from '@/components/newsletter'
import InstagramGallery from '@/components/instagram-gallery'
import ExtendedHomeSections from '@/components/extended-home-sections'
import Footer from '@/components/footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedCategories />
      <TrendingSneakers />
      <FeaturedClothing />
      <BestSellers />
      <NewArrivals />
      <BrandLogos />
      <CustomerReviews />
      <Newsletter />
      <InstagramGallery />
      <ExtendedHomeSections />
      <Footer />
    </div>
  )
}
