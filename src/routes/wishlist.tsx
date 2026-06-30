import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { products } from '@/lib/data/products'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export const Route = createFileRoute('/wishlist')({
  component: Wishlist,
})

function Wishlist() {
  const wishlistItems = products.filter((product) => product.bestSeller || product.newArrival).slice(0, 8)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Wishlist</p>
              <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">Your saved fashion favorites</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Keep track of the pieces you love and return anytime for a fresh edit.</p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-border/60 bg-card px-4 py-3 text-sm text-muted-foreground">
              <Heart className="h-5 w-5 text-primary" />
              {wishlistItems.length} saved items
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
