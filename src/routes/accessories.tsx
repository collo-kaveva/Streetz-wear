import { createFileRoute } from '@tanstack/react-router'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { getAccessories, products } from '@/lib/data/products'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/button'

export const Route = createFileRoute('/accessories')({
  component: Accessories,
})

function Accessories() {
  const accessories = getAccessories()
  
  const watches = accessories.filter(p => p.subcategory === 'watches')
  const bags = accessories.filter(p => p.subcategory === 'bags')
  const sunglasses = accessories.filter(p => p.subcategory === 'sunglasses')
  const caps = accessories.filter(p => p.subcategory === 'caps')
  const other = accessories.filter(p => 
    !['watches', 'bags', 'sunglasses', 'caps'].includes(p.subcategory)
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Banner */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80"
            alt="Accessories Hero"
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
                  Premium Accessories
                </h1>
                <p className="mt-4 text-xl text-gray-200">
                  Complete your look with our curated collection
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Watches Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">Watches</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Timeless elegance on your wrist
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {watches.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* Bags Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-end justify-between gap-4"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground">Bags</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Style meets functionality
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {bags.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sunglasses Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">Sunglasses</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Protect your eyes in style
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {sunglasses.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* Caps Section */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 flex items-end justify-between gap-4"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground">Caps & Headwear</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Complete your outfit
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {caps.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Other Accessories */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">More Accessories</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Belts, wallets, and more
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {other.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="col-span-1"
              />
            ))}
          </div>
        </div>

        {/* All Accessories */}
        <div className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-foreground">All Accessories</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Browse our complete accessories collection
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {accessories.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
