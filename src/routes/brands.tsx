import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { products } from '@/lib/data/products'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/brands')({
  component: Brands,
})

function Brands() {
  const brands = [...new Set(products.map(p => p.brand))].sort()
  
  const getBrandProducts = (brand: string) => {
    return products.filter(p => p.brand === brand).slice(0, 4)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Brands Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl font-bold text-white sm:text-6xl">
                  Shop by Brand
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Discover products from world-renowned brands
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-20">
            {brands.map((brand, index) => {
              const brandProducts = getBrandProducts(brand)
              return (
                <motion.div
                  id={brand.toLowerCase().replace(/\s+/g, '-')}
                  key={brand}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-foreground">{brand}</h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                      {products.filter(p => p.brand === brand).length} products available
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {brandProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        className="col-span-1"
                      />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
